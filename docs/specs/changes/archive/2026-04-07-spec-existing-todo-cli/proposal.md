## Why

目前專案已實作待辦 CLI（`add`、`list`、`done`）與檔案儲存，但缺少可追溯、可驗收的正式規格。這使後續重構、擴充功能或調整測試時，容易因理解落差造成行為回歸。

## What Changes

- 為現有待辦 CLI 建立規格能力，定義 `add`、`list`、`done` 的輸入、輸出語意與錯誤情境。
- 明確定義邏輯層（`addTodo`、`listTodos`、`markDone`）的狀態轉換與失敗條件。
- 納入儲存層契約：可正確讀寫待辦資料，且在資料檔不存在時回傳空集合。
- 建立 CLI 驗收情境（規格層），並保留 unit test 僅覆蓋邏輯層的測試策略。

## Non-Goals (optional)

- 不新增新指令（例如刪除、編輯、排序）。
- 不更改目前 CLI 的文案內容，只規範語意與格式要求。
- 不將 JSON pretty-print 格式（例如縮排空白）視為契約。

## Capabilities

### New Capabilities

- `todo-cli-behavior`: 定義現有待辦 CLI 與核心邏輯/儲存行為的需求與驗收情境。

### Modified Capabilities

(none)

## Impact

- Affected specs: `todo-cli-behavior`（new）
- Affected code:
  - `cli.js`
  - `src/todo.js`
  - `src/storage.js`
  - `tests/*.test.js`
