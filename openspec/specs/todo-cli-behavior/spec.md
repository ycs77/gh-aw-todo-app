## ADDED Requirements

### Requirement: Add command shall create a new pending todo

The system SHALL accept an `add` command with a non-empty title and create one new todo item with a numeric `id`, the provided `title`, `done: false`, and a valid ISO-8601 `createdAt` timestamp.

#### Scenario: Add command succeeds with a valid title

- **WHEN** a user runs the add command with a non-empty title
- **THEN** the system creates exactly one new todo item as pending and persists the updated list

#### Scenario: Add command rejects missing title

- **WHEN** a user runs the add command without a title
- **THEN** the system reports missing input semantics and exits with a failure status


<!-- @trace
source: spec-existing-todo-cli
updated: 2026-04-07
code:
  - .github/skills/spectra-propose/SKILL.md
  - .github/prompts/spectra-ingest.prompt.md
  - .github/prompts/spectra-propose.prompt.md
  - .github/skills/spectra-ask/SKILL.md
  - .github/skills/spectra-archive/SKILL.md
  - .github/prompts/spectra-ask.prompt.md
  - .github/prompts/spectra-apply.prompt.md
  - .github/prompts/spectra-archive.prompt.md
  - .github/prompts/spectra-audit.prompt.md
  - .github/prompts/spectra-discuss.prompt.md
  - .github/prompts/spectra-debug.prompt.md
tests:
  - tests/todo.test.js
  - tests/storage.test.js
-->

### Requirement: List command shall report current todo states

The system SHALL return all persisted todo items for the list command and SHALL present each item with its `id`, title, and completion state indicator.

#### Scenario: List command with no todos

- **WHEN** no todo items are stored
- **THEN** the system reports that no todo items exist

#### Scenario: List command with existing todos

- **WHEN** one or more todo items are stored
- **THEN** the system outputs each item with a state indicator that distinguishes done from not-done items


<!-- @trace
source: spec-existing-todo-cli
updated: 2026-04-07
code:
  - .github/skills/spectra-propose/SKILL.md
  - .github/prompts/spectra-ingest.prompt.md
  - .github/prompts/spectra-propose.prompt.md
  - .github/skills/spectra-ask/SKILL.md
  - .github/skills/spectra-archive/SKILL.md
  - .github/prompts/spectra-ask.prompt.md
  - .github/prompts/spectra-apply.prompt.md
  - .github/prompts/spectra-archive.prompt.md
  - .github/prompts/spectra-audit.prompt.md
  - .github/prompts/spectra-discuss.prompt.md
  - .github/prompts/spectra-debug.prompt.md
tests:
  - tests/todo.test.js
  - tests/storage.test.js
-->

### Requirement: Done command shall mark one target todo as completed

The system SHALL accept a numeric todo `id` for the done command, mark only the matching todo as completed, and preserve all non-target todo items unchanged.

#### Scenario: Done command succeeds for an existing id

- **WHEN** a user runs the done command with an existing numeric id
- **THEN** the matching todo is marked completed and the updated list is persisted

#### Scenario: Done command rejects non-numeric id

- **WHEN** a user runs the done command with a non-numeric id argument
- **THEN** the system reports invalid id semantics and exits with a failure status

#### Scenario: Done command rejects unknown id

- **WHEN** a user runs the done command with a numeric id that does not exist
- **THEN** the system reports not-found semantics that include the requested id and exits with a failure status


<!-- @trace
source: spec-existing-todo-cli
updated: 2026-04-07
code:
  - .github/skills/spectra-propose/SKILL.md
  - .github/prompts/spectra-ingest.prompt.md
  - .github/prompts/spectra-propose.prompt.md
  - .github/skills/spectra-ask/SKILL.md
  - .github/skills/spectra-archive/SKILL.md
  - .github/prompts/spectra-ask.prompt.md
  - .github/prompts/spectra-apply.prompt.md
  - .github/prompts/spectra-archive.prompt.md
  - .github/prompts/spectra-audit.prompt.md
  - .github/prompts/spectra-discuss.prompt.md
  - .github/prompts/spectra-debug.prompt.md
tests:
  - tests/todo.test.js
  - tests/storage.test.js
-->

### Requirement: Storage layer shall persist and restore todo data

The storage layer SHALL return an empty list when the todo data file does not exist, SHALL deserialize stored todos on load, and SHALL write updated todo collections so subsequent reads return equivalent todo data.

#### Scenario: Load without existing data file

- **WHEN** the storage load operation is invoked and no todo data file exists
- **THEN** the operation returns an empty list

#### Scenario: Save then load round-trip

- **WHEN** a todo collection is saved and then loaded
- **THEN** the loaded collection is equivalent to the saved todo data

## Requirements


<!-- @trace
source: spec-existing-todo-cli
updated: 2026-04-07
code:
  - .github/skills/spectra-propose/SKILL.md
  - .github/prompts/spectra-ingest.prompt.md
  - .github/prompts/spectra-propose.prompt.md
  - .github/skills/spectra-ask/SKILL.md
  - .github/skills/spectra-archive/SKILL.md
  - .github/prompts/spectra-ask.prompt.md
  - .github/prompts/spectra-apply.prompt.md
  - .github/prompts/spectra-archive.prompt.md
  - .github/prompts/spectra-audit.prompt.md
  - .github/prompts/spectra-discuss.prompt.md
  - .github/prompts/spectra-debug.prompt.md
tests:
  - tests/todo.test.js
  - tests/storage.test.js
-->

### Requirement: Add command shall create a new pending todo

The system SHALL accept an `add` command with a non-empty title and create one new todo item with a numeric `id`, the provided `title`, `done: false`, and a valid ISO-8601 `createdAt` timestamp.

#### Scenario: Add command succeeds with a valid title

- **WHEN** a user runs the add command with a non-empty title
- **THEN** the system creates exactly one new todo item as pending and persists the updated list

#### Scenario: Add command rejects missing title

- **WHEN** a user runs the add command without a title
- **THEN** the system reports missing input semantics and exits with a failure status

---
### Requirement: List command shall report current todo states

The system SHALL return all persisted todo items for the list command and SHALL present each item with its `id`, title, and completion state indicator.

#### Scenario: List command with no todos

- **WHEN** no todo items are stored
- **THEN** the system reports that no todo items exist

#### Scenario: List command with existing todos

- **WHEN** one or more todo items are stored
- **THEN** the system outputs each item with a state indicator that distinguishes done from not-done items

---
### Requirement: Done command shall mark one target todo as completed

The system SHALL accept a numeric todo `id` for the done command, mark only the matching todo as completed, and preserve all non-target todo items unchanged.

#### Scenario: Done command succeeds for an existing id

- **WHEN** a user runs the done command with an existing numeric id
- **THEN** the matching todo is marked completed and the updated list is persisted

#### Scenario: Done command rejects non-numeric id

- **WHEN** a user runs the done command with a non-numeric id argument
- **THEN** the system reports invalid id semantics and exits with a failure status

#### Scenario: Done command rejects unknown id

- **WHEN** a user runs the done command with a numeric id that does not exist
- **THEN** the system reports not-found semantics that include the requested id and exits with a failure status

---
### Requirement: Storage layer shall persist and restore todo data

The storage layer SHALL return an empty list when the todo data file does not exist, SHALL deserialize stored todos on load, and SHALL write updated todo collections so subsequent reads return equivalent todo data.

#### Scenario: Load without existing data file

- **WHEN** the storage load operation is invoked and no todo data file exists
- **THEN** the operation returns an empty list

#### Scenario: Save then load round-trip

- **WHEN** a todo collection is saved and then loaded
- **THEN** the loaded collection is equivalent to the saved todo data