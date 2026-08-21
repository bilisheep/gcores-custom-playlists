# 项目状态

- 截止：2026-08-21 / v0.7.0
- 当前实际阶段：维护
- 当前需求基线：`docs/00-prd/PRD.md`（v0.7 已验收）

## 已完成

- 核心用户脚本功能与真实页面验证。
- 源码迁移和哈希校验。
- README 七张真实页面截图，登录头像已隐藏。
- MIT 与第三方许可文件。
- 官方全屏时间轴时刻评论弹幕（REQ-DANMAKU-001）。
- 底栏可拖动进度与弹出式竖直音量（TASK-005）。
- 音频专辑一键加入与播单正序/倒序（TASK-006）。
- 官方播单页“我的”本地分类、完整详情与自定义封面（TASK-008）。

## 进行中

- 无。

## 阻塞

- 无。

## 风险

- 依赖机核页面 DOM 和非公开 API，后续站点升级可能需要兼容调整。
- 多张本地封面会占用 Tampermonkey 存储，因此必须统一裁切压缩并限制体积。
- `/albums` 集成依赖机核 React hydration 时机；当前 1.5 秒保护已实测通过，极慢首屏仍是低风险兼容点。

## 下一步

- 维护机核 `/albums` DOM 与 hydration 兼容性；按需评估稳定页面就绪信号。

## 当前任务、追踪与验收链接

- [TASK-001](docs/04-tasks/TASK-001-initialize-project.md)
- [TASK-002](docs/04-tasks/TASK-002-refresh-user-screenshot.md)
- [TASK-003](docs/04-tasks/TASK-003-timeline-danmaku.md)
- [TASK-004](docs/04-tasks/TASK-004-split-mini-player-links.md)
- [TASK-005](docs/04-tasks/TASK-005-mini-progress-volume.md)
- [TASK-006](docs/04-tasks/TASK-006-album-import-order.md)
- [TASK-007](docs/04-tasks/TASK-007-sidebar-library-cover.md)
- [TASK-008](docs/04-tasks/TASK-008-official-albums-local.md)
- [验收标准](docs/02-acceptance/acceptance-criteria.md)

## 最近验证结果

- 用户脚本迁移前后 SHA-256 均为 `622bc534a6fb18e9e57810ed48c349e4339de97c0a653f6f39fe2c789af5e8e0`。
- 目标目录中的用户脚本语法检查与内置自检已通过。
- 本地 Markdown 链接和七张截图路径已验证。
- 截图：七张均来自真实机核页面，登录头像及通知数量已隐藏；“我的”播单页和完整详情页已更新为 v0.7.0。
- GitHub 仓库 `bilisheep/gcores-custom-playlists` 已公开创建，默认分支为 `main`。
- README 安装链接和仓库主页均返回 HTTP 200。
- 用户批量加入截图已重新生成：公开用户头像、名称和按钮可见，当前登录头像及个人搜索内容未进入截图。
- 时间轴弹幕实测：98 条时刻评论加载成功；75 秒触发、暂停冻结、seek 清空、向后重播、开关持久化、减少动态效果、退出卸载和 React 重绘重挂均通过。
- 底部播放器入口已拆分：封面在新标签打开节目详情，标题进入所属本地播单完整详情；空播单、键盘焦点和移动端布局验证通过。
- 底栏实测：未加载断点正确显示并禁用；加载后进度可拖动并保存；竖直音量、键盘、Esc、外部关闭、跨标签同步和拖动中重绘恢复均通过。
- 专辑实测：230 为 10 期且重复加入 0 期；342 为 27 期，首尾 ID `217132` / `211278`；分页 500 时零写入；混合专辑 306 不显示按钮。
- 排序实测：正序 A/B/C、倒序 C/B/A；切换方向不改变当前节目或断点，倒序移动、下一期和异常 cursor 回退通过。
- 本地播单页实测：顶部顺序为“我的 / 机核 / 入驻”，“我的”默认显示；本地卡片与完整详情复用官方主内容区，官方筛选和分页可完整恢复；返回、刷新和无效 ID 回退通过。
- 本地封面实测：有效图片输出 320×320 JPEG；非图片和 9 MiB 文件零写入；更换、移除、首期自动封面、跨标签状态同步及二维码排除封面通过。
- React hydration 实测：立即挂载可复现官方 418/425；加入 1.5 秒保护后同场景无控制台错误。
