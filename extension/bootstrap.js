(async () => {
  'use strict';

  const values = new Map();
  const listeners = new Map();
  const pendingWrites = new Map();
  const revisions = new Map();
  const bufferedChanges = [];
  let listenerId = 0;
  let initialized = false;
  const clone = (value) => value === undefined ? undefined : structuredClone(value);
  const serialized = (value) => JSON.stringify(value);
  const emit = (key, oldValue, newValue, remote) => {
    for (const callback of listeners.get(key)?.values() || []) {
      try { callback(key, clone(oldValue), clone(newValue), remote); } catch (error) { console.error('[GCPL]', error); }
    }
  };
  const takePending = (key, value) => {
    const queue = pendingWrites.get(key);
    const index = queue?.indexOf(serialized(value)) ?? -1;
    if (index < 0) return false;
    queue.splice(index, 1);
    if (!queue.length) pendingWrites.delete(key);
    return true;
  };
  const applyChanges = (changes, areaName) => {
    if (areaName !== 'local') return;
    if (!initialized) { bufferedChanges.push(changes); return; }
    for (const [key, change] of Object.entries(changes)) {
      const oldValue = values.get(key);
      if (change.newValue === undefined) values.delete(key);
      else values.set(key, clone(change.newValue));
      if (takePending(key, change.newValue) || serialized(oldValue) === serialized(change.newValue)) continue;
      revisions.set(key, (revisions.get(key) || 0) + 1);
      emit(key, oldValue, change.newValue, true);
    }
  };

  chrome.storage.onChanged.addListener(applyChanges);
  let initialValues;
  try {
    initialValues = await chrome.storage.local.get(null);
  } catch (error) {
    console.error('[GCPL] storage initialization failed', error);
    chrome.storage.onChanged.removeListener?.(applyChanges);
    return;
  }
  for (const [key, value] of Object.entries(initialValues)) values.set(key, clone(value));
  initialized = true;
  for (const changes of bufferedChanges.splice(0)) applyChanges(changes, 'local');

  globalThis.GM_getValue = (key, fallback) => values.has(key) ? clone(values.get(key)) : clone(fallback);
  globalThis.GM_setValue = (key, value) => {
    const oldValue = values.get(key);
    const nextValue = clone(value);
    revisions.set(key, (revisions.get(key) || 0) + 1);
    values.set(key, nextValue);
    const queue = pendingWrites.get(key) || [];
    queue.push(serialized(nextValue));
    pendingWrites.set(key, queue);
    emit(key, oldValue, nextValue, false);
    chrome.storage.local.set({ [key]: nextValue }).catch(async (error) => {
      console.error('[GCPL] storage write failed', error);
      takePending(key, nextValue);
      if (pendingWrites.has(key)) return;
      const recoveryRevision = revisions.get(key);
      try {
        const actualValue = (await chrome.storage.local.get(key))[key];
        if (revisions.get(key) !== recoveryRevision || pendingWrites.has(key)) return;
        const optimisticValue = values.get(key);
        if (actualValue === undefined) values.delete(key);
        else values.set(key, clone(actualValue));
        if (serialized(optimisticValue) !== serialized(actualValue)) emit(key, optimisticValue, actualValue, true);
      } catch (readError) {
        console.error('[GCPL] storage recovery failed', readError);
      }
    });
  };
  globalThis.GM_addValueChangeListener = (key, callback) => {
    const id = ++listenerId;
    const callbacks = listeners.get(key) || new Map();
    callbacks.set(id, callback);
    listeners.set(key, callbacks);
    return id;
  };
  globalThis.__GCPL_EXTENSION__ = true;
  /*__GCPL_USER_SCRIPT__*/
})();
