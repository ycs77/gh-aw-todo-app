## ADDED Requirements

### Requirement: Delete command shall remove an existing todo by id

The system SHALL accept a `delete` command with a numeric `id`, remove exactly one matching todo item from persistence, and keep all remaining todo items unchanged.

#### Scenario: Delete command succeeds with an existing id

- **WHEN** a user runs the delete command with an id that exists
- **THEN** the system removes exactly one matching todo item and persists the updated list

#### Scenario: Delete command rejects an invalid id input

- **WHEN** a user runs the delete command with a non-numeric or missing id
- **THEN** the system reports invalid id input semantics and exits with a failure status

#### Scenario: Delete command fails when id does not exist

- **WHEN** a user runs the delete command with an id that does not exist
- **THEN** the system reports that the target todo cannot be found and exits with a failure status
