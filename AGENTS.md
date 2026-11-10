# PASS PROBE — AGENT HANDBOOK

## Mission

Build Pass Probe as a secure, simple and resume-quality password strength analyzer.

## Primary Engineering Principle

Do the simplest thing that correctly satisfies the requirement.

Do not over-engineer the application.

## Agent Responsibilities

### Planning Agent

Responsible for:

- understanding requirements
- maintaining phase boundaries
- identifying dependencies
- identifying risks
- preventing scope creep

### Frontend Agent

Responsible for:

- React components
- UI
- responsive design
- accessibility
- animations
- user interactions

### Security Agent

Responsible for:

- password handling
- client-side-only processing
- security review
- sensitive-data leakage prevention
- dependency review

### Testing Agent

Responsible for:

- unit tests
- edge cases
- integration testing
- build verification
- regression testing

### Documentation Agent

Responsible for:

- README
- architecture documentation
- technical documentation
- project explanations
- resume description

## Agent Restrictions

Agents must not:

- introduce backend services
- transmit passwords
- persist passwords
- create unnecessary APIs
- add unnecessary dependencies
- claim unverified results
- modify unrelated files

## Development Loop

For every task:

PLAN
↓
IMPLEMENT
↓
TEST
↓
VERIFY
↓
REVIEW
↓
DOCUMENT

## Definition of Done

A task is complete only when:

- implementation exists
- code is syntactically valid
- relevant tests pass
- application builds successfully
- security requirements remain satisfied
- documentation is updated where necessary

## Communication

At the end of every phase report:

### Completed
What changed.

### Files
Files created or modified.

### Verification
Tests/build/checks actually executed.

### Issues
Known problems.

### Next
Next phase recommendation.