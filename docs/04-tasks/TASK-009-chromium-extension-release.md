# TASK-009: Chrome/Edge 扩展与 GitHub Release

- 状态：完成
- 目标与范围：从唯一用户脚本生成 Manifest V3 内容脚本和 Chrome/Edge 共用 ZIP；使用独立空 `chrome.storage.local`；发布 v0.8.0 GitHub Release、SHA-256 和安装说明。
- 非范围：Chrome Web Store、Edge Add-ons、Firefox/Safari 扩展、Tampermonkey 数据迁移、CRX、自动更新服务、后台页或弹窗。
- 关联需求、设计与 ADR：REQ-EXTENSION-001；`docs/01-design/project-design.md`；无 ADR。
- 实施步骤：增加 Manifest/存储桥/无依赖构建脚本；同步版本；生成白名单目录和 ZIP；验证 GM 语义与 Chrome 运行；记录 Edge 同源 MV3 兼容边界；更新 README、状态和协作约束；提交、打 tag 并发布 Release。
- 测试与验收：AC-EXTENSION-001；Node 语法/自检、Manifest Schema、版本一致、构建可重复、ZIP 白名单和哈希、首次空存储、持久化、多标签 remote、本地回声、Chrome 加载、Edge MV3 兼容检查、Release HTTP 200、工作区干净。
- 验证结果或阻塞/取消原因：用户已在 Chrome 151 开发者模式手动加载并确认通过；自动复验首次默认空播单、创建数据后刷新持久化、第二标签读取同一数据且无 GCPL 控制台错误。存储桥测试覆盖初始化缓冲/失败、clone、本地回声、远端变化、late echo、单写失败、恢复期间新写入和双 pending 逆序失败。Manifest 仅含 `storage`、`unlimitedStorage` 与机核 host；内容脚本由唯一用户脚本生成；ZIP 只有 `manifest.json` / `content.js`，三时区构建 SHA-256 均为 `bd4627f027af1bd99a6951f257ae9b0ac1033c4e77c6633728e0c2c663efda0b`。Edge 按用户要求不做真机测试，仅核对同一 Chromium MV3 Manifest/API。Node、自检、diff、Markdown 链接和独立审计通过，无高、中、低遗留。
