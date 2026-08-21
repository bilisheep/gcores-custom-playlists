import { createHash } from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { mkdir, readFile, rm, utimes, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const unpacked = join(dist, 'chrome-edge');
const manifest = JSON.parse(await readFile(join(root, 'extension', 'manifest.json'), 'utf8'));
const bootstrap = await readFile(join(root, 'extension', 'bootstrap.js'), 'utf8');
const userscript = await readFile(join(root, 'gcores-custom-playlists.user.js'), 'utf8');
const version = userscript.match(/^\/\/ @version\s+(\S+)$/m)?.[1];
const marker = '/*__GCPL_USER_SCRIPT__*/';

if (!version || manifest.version !== version) throw new Error(`版本不一致：manifest=${manifest.version} userscript=${version || 'missing'}`);
if (bootstrap.split(marker).length !== 2) throw new Error('扩展启动模板必须且只能包含一个用户脚本标记');
if (manifest.manifest_version !== 3 || manifest.content_scripts?.[0]?.js?.join(',') !== 'content.js') throw new Error('Manifest V3 内容脚本配置无效');

await rm(unpacked, { recursive: true, force: true });
await mkdir(unpacked, { recursive: true });
await writeFile(join(unpacked, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(join(unpacked, 'content.js'), bootstrap.replace(marker, () => userscript));
const fixedTime = new Date('1980-01-01T00:00:00Z');
await Promise.all(['manifest.json', 'content.js'].map((file) => utimes(join(unpacked, file), fixedTime, fixedTime)));

const archiveName = `gcores-custom-playlists-v${version}-chrome-edge.zip`;
const archive = join(dist, archiveName);
await rm(archive, { force: true });
const zipped = spawnSync('zip', ['-X', '-q', '-r', archive, 'manifest.json', 'content.js'], { cwd: unpacked, encoding: 'utf8', env: { ...process.env, TZ: 'UTC' } });
if (zipped.status !== 0) throw new Error(zipped.stderr || 'zip 打包失败');

const digest = createHash('sha256').update(await readFile(archive)).digest('hex');
await writeFile(`${archive}.sha256`, `${digest}  ${archiveName}\n`);
console.log(JSON.stringify({ version, unpacked, archive, sha256: digest }, null, 2));
