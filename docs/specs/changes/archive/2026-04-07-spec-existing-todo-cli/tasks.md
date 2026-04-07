## 1. 規格與需求對齊

- [x] 1.1 依 **Decision: Use one capability to capture the current end-to-end behavior** 整理 `todo-cli-behavior` 單一能力下的需求邊界，對齊 **Requirement: Add command shall create a new pending todo** 與 **Requirement: List command shall report current todo states**。
- [x] 1.2 依 **Decision: Separate CLI acceptance scenarios from unit-test scope** 建立測試策略對照：CLI 僅維持驗收情境、unit test 聚焦 **Requirement: Done command shall mark one target todo as completed** 與邏輯層狀態轉換。
- [x] 1.3 依 **Decision: Specify message semantics instead of exact localized wording** 對齊 CLI 錯誤與成功訊息契約，只驗證語意與格式，不鎖定精確文案。

## 2. 實作與驗證

- [x] 2.1 更新或補齊邏輯層測試案例，覆蓋 **Requirement: Add command shall create a new pending todo**、**Requirement: List command shall report current todo states**、**Requirement: Done command shall mark one target todo as completed** 的成功與失敗情境。
- [x] 2.2 更新或補齊儲存層測試案例，覆蓋 **Requirement: Storage layer shall persist and restore todo data**（含「檔案不存在回傳空清單」與「save/load round-trip」）。
- [x] 2.3 以既有程式碼結構完成需求對齊後，執行測試並修正偏差，確認 CLI 行為與邏輯/儲存契約一致。
