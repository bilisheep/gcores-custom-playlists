# 项目总体设计

## 设计目标、优先级与明确取舍

优先保证单一业务源码、无服务器、权限不绕过和数据不丢失。项目使用独立 `HTMLAudioElement`，不耦合机核私有 Redux/React 状态；代价是需要自行管理队列、授权地址、断点和两种本地存储适配。

## 系统组成与边界

- 页面适配层：MutationObserver 扫描机核 SPA 页面，挂载卡片和用户页入口。
- 播单状态层：Tampermonkey `GM_*` 或扩展 `chrome.storage.local` 兼容桥存储版本化播单、断点、音量和跨标签播放信号；两者互不迁移。
- 数据访问层：只读调用机核节目详情、搜索和受保护媒体授权接口。
- 播放层：单一 `Audio` 实例负责载入、播放、跳转、错误和 Media Session。
- UI 层：Shadow DOM 隔离底部播放器和二维码界面；本地播单库与详情作为官方 `/albums` 主内容区的普通 DOM sibling。
- 时间轴弹幕层：挂载到官方 `.playerFullscreenTimelineBody`，读取官方 `<audio>` 的播放事件和 `currentTime`，只在全屏时间轴生命周期内存在。
- 专辑导入层：识别 `/albums/{id}` 和 `content-type=radio`，分页读取官方已发布音频关系，完整成功后写入当前播单。
- 官方播单页集成层：在 `/albums` 的 `.labelFilters ul` 首位挂载“我的”，并在本地路由下以独立 sibling 容器替换主内容展示；官方 filter 页面不改动原列表、分页或接口。
- 分发层：Manifest V3、存储兼容桥和 Node 标准库构建脚本将同一用户脚本生成 Chromium 内容脚本；Chrome/Edge 共用一个 ZIP。

## 功能模块划分与协作

卡片/用户页入口获取节目元数据 → 去重并写入播单 → 播放器按播单 cursor 选择节目 → 解析普通或授权媒体地址 → 播放并定期保存进度。分享模块仅序列化名称和 ID，导入后重新查询元数据。

弹幕模块从时间轴路由取得节目 ID → 分页读取 `filter[timed]=1` 评论 → 以 `radio-timestamp` 排序 → 监听官方音频进度跨越 → 分配空闲轨道并创建 CSS/WAAPI 动画。暂停/继续直接控制已有动画；seek 清空节点并重建触发游标。

底部播放器左侧遵循一对一交互映射：封面是指向 `/radios/{id}` 的节目详情链接；标题与播单副标题进入当前显示或播放所属本地播单的 `/albums?gcpl={playlistId}` 完整详情页。空播单没有节目详情链接，但标题区域仍进入当前播单详情。

底部播放器采用两行网格：主行是节目入口、传输控制和音量图标，第二行是时间文本与原生 range 进度。竖直音量弹层使用原生 range、垂直 writing-mode 和浏览器自带 Pointer/键盘行为，音量 input 实时生效、change 时写入 GM 存储；进度 input 实时 seek，change 时保存。未加载状态显示播单 cursor 但禁用进度，不创建额外音频实例。

播单 `items` 始终保存规范/手动顺序，`direction` 只接受 `asc` 或 `desc`。`orderedItems(list)` 为渲染、播放、上一期/下一期和分享提供可见顺序；倒序通过派生反向数组实现，不修改事实源。移动按钮把可见方向偏移映射回规范数组。

播单新增可选 `cover` data URL。`normalizeState()` 只接受受限长度的 JPEG/PNG/WebP 图片 data URL，旧数据和无封面数据归一化为空字符串。播单库优先展示自定义封面，其次展示当前可见首期节目封面，最后展示已有音乐占位图；封面字段不进入分享载荷。

`/albums` 无 `filter` 和无 `gcpl` 时为本地库；脚本等待 1.5 秒让 React hydration 完成，再在官方“机核 / 入驻”之前加入“我的”并标记 active，隐藏官方结果 sibling 与分页但不删除或搬移 React 节点，再插入 `gcpl-page-root`。本地库复用官方 `row-cols-*`、`coverShowcase`、`albumGolden`、封面和标题结构，额外 CSS 只提供本地标识、节目数和封面操作。`filter=gcores|join` 时移除脚本内容并恢复官方节点。

本地详情使用 `/albums?gcpl={playlistId}`，同样占 `.ah_section` 主内容区，并复用 albumDetail 的封面、标题、操作区和节目列表视觉；库到详情使用 History API，`popstate`、SPA 扫描和刷新均按 URL 恢复。ID 无效时 `replaceState` 回 `/albums`。固定 Shadow host 只保留底栏、音量和二维码等二级界面，不再承载播单库或管理详情。

图片选择复用隐藏的原生 file input、Object URL、Image 和 Canvas：限制原始文件为图片且不超过 8 MiB，按中心裁切为 320×320 JPEG，再限制 data URL 长度约 300 KiB。处理成功后重新读取 GM 状态并按 playlist ID 写入，避免覆盖跨标签页变化；失败只更新当前状态提示。

扩展构建先读取 Manifest、兼容桥和用户脚本，校验三者版本，再把业务脚本嵌入兼容桥的异步启动点。兼容桥等待 `chrome.storage.local.get(null)`，在内存中实现同步 `GM_getValue`，把 `GM_setValue` 异步写回存储，并用本地写入队列抑制同标签 `storage.onChanged` 回声；其他标签变化以 `remote=true` 通知现有监听器。Manifest 仅声明 `storage`、`unlimitedStorage` 和 `https://www.gcores.com/*` 内容脚本。

## 核心数据流

```text
机核页面/API → 节目元数据 → GM 播单存储 → 自定义播放器
GM 播单存储 → 分享编码 → 二维码/链接 → 校验与确认 → 机核 API → 新播单
GM 播单存储 → `/albums` 我的分类 → 本地卡片/详情 → CRUD、播放与封面更新
```

## 核心状态机与禁止流转

- 播放状态：空闲 → 加载 → 就绪/播放 → 暂停/结束；加载或媒体错误进入可重试状态。
- 请求以 `playbackRequest` 令牌失效旧响应，禁止旧请求覆盖新节目。
- 切换来源时先保存旧进度并清空媒体，禁止把旧媒体时间写入新节目。
- 弹幕状态：未挂载 → 加载评论 → 就绪 → 播放/暂停；路由或节目变化会使旧请求令牌失效并完全卸载。

## 权限、错误、配置、重试、幂等、超时、日志、审计和监控

- 同源请求携带现有登录 Cookie，但脚本不读取或持久化 Cookie。
- 会员音频仅使用机核返回的临时授权地址；失败后允许用户重试。
- 批量加入和分享导入按节目 ID 幂等；批量分页在全部成功后一次写入。
- 专辑页先读取专辑类型和免费属性，再选择对应内容关系；分页结果按接口顺序合并，校验 `record-count` 后原子写入。
- 播单封面只在当前 `GM_*` 或 `chrome.storage.local` 适配中持久化；设置、替换和移除均复用现有保存与跨标签同步，不上传图片、不修改机核账号数据。
- 官方结果只通过 `hidden` 临时隐藏；离开本地路由、React 换页或脚本失效时必须恢复，禁止清空官方 DOM。
- 项目无服务端日志或遥测；错误只在当前页面显示。
- 时刻评论只保存在当前页面内存中；分页任一请求失败时本次弹幕停用，不写入油猴或扩展的播单数据。

## 项目级不变量

- 一个标签页只有一个自定义音频实例。
- 同一播单内节目 ID 唯一。
- 分享数据不包含进度、账号或音频 URL。
- 自定义播放不得绕过机核的登录与购买权限。
- 弹幕层必须 `pointer-events:none`，不得阻挡时间轴、播放控制或评论操作。
- 播单封面不得进入二维码、分享链接或机核接口请求。
- 扩展生成目录和 ZIP 是构建产物，不是第二份业务源码；Release 不包含私钥、账号数据或 Tampermonkey 存储。

## 关联需求、模块设计与验收

设计覆盖当前 PRD；对应验收项见 `docs/02-acceptance/acceptance-criteria.md`。REQ-LIBRARY-001 / TASK-007 已被替代；REQ-CATALOG-001 对应 AC-CATALOG-001 和 TASK-008；REQ-EXTENSION-001 对应 AC-EXTENSION-001 和 TASK-009。
