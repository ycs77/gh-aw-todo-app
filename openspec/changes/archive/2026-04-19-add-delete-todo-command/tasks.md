## 1. Todo domain behavior

- [x] 1.1 在 `src/todo.js` 新增刪除函式，實作 **Delete command shall remove an existing todo by id** 的核心資料邏輯
- [x] 1.2 補上 `src/todo.js` 的刪除失敗路徑（找不到 id 時拋出明確錯誤）

## 2. CLI command integration

- [x] 2.1 在 `cli.js` 新增 `delete <id>` command 分支，沿用既有 id 驗證與錯誤輸出模式
- [x] 2.2 更新 `cli.js` 的用法說明，加入 `delete` 指令

## 3. Test coverage

- [x] 3.1 更新 `tests/todo.test.js`，新增刪除成功、不改動原陣列、找不到 id 失敗等單元測試
- [x] 3.2 確保測試覆蓋 `delete` 指令規格中的輸入與錯誤語意
