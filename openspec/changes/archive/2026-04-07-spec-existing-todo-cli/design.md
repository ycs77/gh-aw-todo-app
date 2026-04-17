## Context

此變更的目標不是新增功能，而是把既有待辦 CLI 的行為正式化為可追溯規格。現有功能分散於三層：CLI 介面（`cli.js`）、核心邏輯（`src/todo.js`）、儲存層（`src/storage.js`）。目前行為主要由程式碼隱含，缺少跨層一致的需求描述，導致後續重構時容易出現「函式正確但 CLI 行為偏移」或「測試覆蓋與需求邊界不一致」的風險。

## Goals / Non-Goals

**Goals:**

- 建立單一 capability 規格，涵蓋 `add`、`list`、`done` 的既有行為。
- 將 CLI 的輸入輸出要求定義為「語意與格式契約」，避免綁定文案字串。
- 將邏輯層行為定義為可直接對應 unit test 的需求（新增項目、列出項目、標記完成與錯誤案例）。
- 定義儲存層最小契約（不存在檔案時讀取為空、可正確持久化與還原資料）。

**Non-Goals:**

- 不新增新指令或新欄位。
- 不規範 JSON pretty-print 細節（如縮排空白數）。
- 不要求 CLI 層必須有 unit test；CLI 僅需在 spec 中有驗收情境。

## Decisions

### Decision: Use one capability to capture the current end-to-end behavior

以 `todo-cli-behavior` 單一 capability 管理既有功能，避免把同一流程拆成多份規格造成重複與維護成本。此能力下以 requirement 分層描述 CLI、邏輯與儲存契約。

### Decision: Separate CLI acceptance scenarios from unit-test scope

規格層保留 CLI 驗收情境，確保命令列互動契約可被追溯；測試策略則明確限定 unit test 只覆蓋邏輯層。如此可同時維持需求完整性與測試執行效率。

### Decision: Specify message semantics instead of exact localized wording

CLI 規格只要求訊息需傳達必要資訊（例如缺參數、無效 id、找不到 id、成功顯示目標 id），不要求精確文案。此作法保留文案迭代彈性，同時防止行為退化。

## Risks / Trade-offs

- [Risk] CLI 文案未鎖定可能讓不同開發者輸出不一致 → Mitigation：在 scenario 中定義必須出現的語意元素與格式要點（含 id 呈現）。
- [Risk] 單一 capability 可能變大 → Mitigation：僅納入既有指令，新增指令時另立 capability 或在同能力下擴充分明 requirement。
- [Risk] CLI 未做 unit test 可能漏掉整合問題 → Mitigation：在 spec 增加 CLI 驗收情境，並在後續需要時補整合測試，不影響本次範圍。
