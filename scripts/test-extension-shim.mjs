import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const marker = '/*__GCPL_USER_SCRIPT__*/';
const bootstrap = await readFile(new URL('../extension/bootstrap.js', import.meta.url), 'utf8');
const data = { seed: { value: 1 } };
const changeListeners = [];
const pendingSets = [];
let getGate = null;
const emitChanges = (changes) => changeListeners.forEach((listener) => listener(changes, 'local'));
const blockGet = () => {
  let release;
  let started;
  const gate = {
    promise: new Promise((resolve) => { release = resolve; }),
    started: new Promise((resolve) => { started = resolve; }),
    release: () => { getGate = null; release(); },
    markStarted: () => started(),
  };
  getGate = gate;
  return gate;
};
const chrome = {
  storage: {
    local: {
      get: async (key) => {
        const gate = getGate;
        if (gate) { gate.markStarted(); await gate.promise; }
        return key == null ? structuredClone(data) : { [key]: structuredClone(data[key]) };
      },
      set: (values) => new Promise((resolve, reject) => pendingSets.push({ values: structuredClone(values), resolve, reject })),
    },
    onChanged: { addListener: (listener) => changeListeners.push(listener) },
  },
};
const commitNext = () => {
  const operation = pendingSets.shift();
  const changes = {};
  for (const [key, value] of Object.entries(operation.values)) {
    changes[key] = { oldValue: structuredClone(data[key]), newValue: structuredClone(value) };
    data[key] = structuredClone(value);
  }
  emitChanges(changes);
  operation.resolve();
};
const failAt = (index = 0) => pendingSets.splice(index, 1)[0].reject(new Error('simulated write failure'));
const remoteSet = (key, value) => {
  const oldValue = structuredClone(data[key]);
  data[key] = structuredClone(value);
  emitChanges({ [key]: { oldValue, newValue: structuredClone(value) } });
};

const errors = [];
const context = vm.createContext({ chrome, console: { ...console, error: (...args) => errors.push(args) }, structuredClone, globalThis: null });
context.globalThis = context;
vm.runInContext(bootstrap.replace(marker, 'globalThis.__GCPL_SHIM_READY__ = true;'), context);
while (!context.__GCPL_SHIM_READY__) await new Promise((resolve) => setTimeout(resolve, 0));

const seed = context.GM_getValue('seed', null);
seed.value = 9;
assert.equal(context.GM_getValue('seed', null).value, 1, 'GM_getValue must clone values');
assert.deepEqual(context.GM_getValue('missing', { empty: true }), { empty: true });

const events = [];
context.GM_addValueChangeListener('playlist', (...args) => events.push(args));
context.GM_setValue('playlist', { count: 1 });
commitNext();
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(events.length, 1, 'local chrome.storage echo must be suppressed');
assert.equal(events[0][3], false);

context.GM_setValue('playlist', { count: 3 });
remoteSet('playlist', { count: 2 });
commitNext();
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(context.GM_getValue('playlist', null).count, 3, 'late local echo must update the memory snapshot');
assert.deepEqual(events.slice(1).map((event) => [event[2].count, event[3]]), [[3, false], [2, true]]);

context.GM_setValue('playlist', { count: 4 });
failAt();
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(context.GM_getValue('playlist', null).count, 3, 'failed write must recover the persisted value');
remoteSet('playlist', { count: 5 });
assert.equal(context.GM_getValue('playlist', null).count, 5, 'failed writes must not suppress later remote updates');
assert.equal(events.at(-1)[3], true);
assert.equal(errors.length, 1, 'write failure should be logged once');

context.GM_setValue('playlist', { count: 6 });
const recoveryGate = blockGet();
failAt();
await recoveryGate.started;
context.GM_setValue('playlist', { count: 7 });
recoveryGate.release();
await new Promise((resolve) => setTimeout(resolve, 0));
commitNext();
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(context.GM_getValue('playlist', null).count, 7, 'stale recovery reads must not overwrite a newer local write');
assert.deepEqual(events.slice(-2).map((event) => [event[2].count, event[3]]), [[6, false], [7, false]]);
assert.equal(errors.length, 2, 'each failed write should be logged once');

context.GM_setValue('playlist', { count: 8 });
context.GM_setValue('playlist', { count: 9 });
failAt(1);
await new Promise((resolve) => setTimeout(resolve, 0));
failAt(0);
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(context.GM_getValue('playlist', null).count, 7, 'reverse-order failures must recover the persisted value');
assert.deepEqual(events.slice(-3).map((event) => [event[2].count, event[3]]), [[8, false], [9, false], [7, true]]);
assert.equal(errors.length, 4);

const initErrors = [];
const initChrome = {
  storage: {
    local: { get: async () => { throw new Error('simulated initialization failure'); } },
    onChanged: { addListener: () => {}, removeListener: () => {} },
  },
};
const initContext = vm.createContext({ chrome: initChrome, console: { ...console, error: (...args) => initErrors.push(args) }, structuredClone, globalThis: null });
initContext.globalThis = initContext;
vm.runInContext(bootstrap.replace(marker, 'globalThis.__GCPL_SHOULD_NOT_RUN__ = true;'), initContext);
await new Promise((resolve) => setTimeout(resolve, 0));
assert.equal(initContext.__GCPL_SHOULD_NOT_RUN__, undefined, 'business script must not run after storage initialization failure');
assert.match(String(initErrors[0]?.[0]), /storage initialization failed/);
console.log('extension storage shim passed');
