# 项目状态

- 截止：2026-08-20 / v0.5.1
- 当前实际阶段：完成
- 当前需求基线：`docs/00-prd/PRD.md`（已确认、已实现）

## 已完成

- 核心用户脚本功能与真实页面验证。
- 源码迁移和哈希校验。
- README 所需四张真实截图。
- MIT 与第三方许可文件。
- 官方全屏时间轴时刻评论弹幕（REQ-DANMAKU-001）。

## 进行中

- 无。

## 阻塞

- 无。

## 风险

- 依赖机核页面 DOM 和非公开 API，后续站点升级可能需要兼容调整。

## 下一步

- 进入维护阶段；根据机核页面或 API 变化处理兼容问题。

## 当前任务、追踪与验收链接

- [TASK-001](docs/04-tasks/TASK-001-initialize-project.md)
- [TASK-002](docs/04-tasks/TASK-002-refresh-user-screenshot.md)
- [TASK-003](docs/04-tasks/TASK-003-timeline-danmaku.md)
- [TASK-004](docs/04-tasks/TASK-004-split-mini-player-links.md)
- [验收标准](docs/02-acceptance/acceptance-criteria.md)

## 最近验证结果

- 用户脚本迁移前后 SHA-256 均为 `622bc534a6fb18e9e57810ed48c349e4339de97c0a653f6f39fe2c789af5e8e0`。
- 目标目录中的用户脚本语法检查与内置自检已通过。
- 本地 Markdown 链接和五张截图路径已验证。
- 截图：五张均来自真实机核页面，登录头像已隐藏。
- GitHub 仓库 `bilisheep/gcores-custom-playlists` 已公开创建，默认分支为 `main`。
- README 安装链接和仓库主页均返回 HTTP 200。
- 用户批量加入截图已重新生成：公开用户头像、名称和按钮可见，当前登录头像及个人搜索内容未进入截图。
- 时间轴弹幕实测：98 条时刻评论加载成功；75 秒触发、暂停冻结、seek 清空、向后重播、开关持久化、减少动态效果、退出卸载和 React 重绘重挂均通过。
- 底部播放器入口已拆分：封面在新标签打开节目详情，标题打开播单管理；空播单、键盘焦点和移动端布局验证通过。
