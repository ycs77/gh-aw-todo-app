## Why

目前 CLI 只有新增、列出、完成待辦事項，缺少刪除功能。當使用者輸入錯誤或任務不再需要時，無法移除資料，會讓待辦清單持續累積無效項目。

## What Changes

- 新增 `delete` command，支援以 `id` 刪除單一 Todo。
- 新增刪除失敗情境的明確錯誤行為（無效 `id`、找不到 `id`）。
- 更新 CLI 用法說明，讓 `delete` 指令可被發現與使用。
- 新增/更新測試以覆蓋刪除成功與失敗情境。

## Non-Goals (optional)

- 不支援一次刪除多個 `id`。
- 不支援依標題或關鍵字刪除。
- 不在刪除後重排既有 Todo 的 `id`。

## Capabilities

### New Capabilities

(none)

### Modified Capabilities

- `todo-cli-behavior`: 擴充 CLI 行為，加入 `delete` 指令與對應輸入/錯誤語意。

## Impact

- Affected specs: `todo-cli-behavior`
- Affected code: `cli.js`, `src/todo.js`, `tests/todo.test.js`
