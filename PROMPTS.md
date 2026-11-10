# PASS PROBE — 10-PHASE DEVELOPMENT PROMPTS

## How to use

Execute exactly one phase at a time.

After each phase:

1. Review the changes.
2. Run the tests/build requested by the phase.
3. Fix issues before moving forward.
4. Commit the work.
5. Start the next phase.

Do not skip phases.

---

# PHASE 1 — PROJECT FOUNDATION

## Prompt

Read:

- GEMINI.md
- AGENTS.md
- DETAILS.md
- .agents/rules/pass-probe.md

Create the Pass Probe project foundation.

Tasks:

1. Inspect the existing workspace.
2. Initialize a Vite React JavaScript application if the workspace is empty.
3. Configure the project for JavaScript, not TypeScript.
4. Create the recommended directory structure.
5. Configure basic CSS.
6. Create the application entry point.
7. Create a minimal Home page.
8. Verify the application starts.
9. Verify the production build.
10. Do not implement password-analysis logic yet.

Do not add unnecessary dependencies.

At completion report:

- files created
- dependencies added
- commands executed
- build result
- known issues

---

# PHASE 2 — ANALYSIS ENGINE

## Prompt

Implement the Pass Probe password analysis engine.

Read DETAILS.md before coding.

Create modular pure JavaScript functions for:

1. character analysis
2. length analysis
3. repeated-character detection
4. repeated-pattern detection
5. sequential-character detection
6. whitespace detection
7. common weak-pattern detection
8. character-pool calculation
9. entropy calculation

Requirements:

- functions must be deterministic
- functions must be independently testable
- no React dependency inside the analysis engine
- never return the raw password
- never log the password

Implement the documented entropy approximation.

Add unit tests for all core functions.

Run the tests.

Do not build the final UI yet.

---

# PHASE 3 — SCORING ENGINE

## Prompt

Implement the Pass Probe scoring and classification system.

Read:

- DETAILS.md
- existing analysis engine

Create a deterministic score from 0–100 using:

- password length
- character diversity
- estimated entropy
- repeated characters
- repeated patterns
- sequential patterns
- weak structures

Create strength classification:

Very Weak
Weak
Moderate
Strong
Very Strong

Create recommendation generation.

Requirements:

- scoring must be explainable
- avoid arbitrary random scoring
- handle edge cases
- never return the raw password
- keep scoring independent from React

Add comprehensive tests.

Test score boundary values.

Run the complete test suite.

---

# PHASE 4 — CORE REACT UI

## Prompt

Build the core Pass Probe React interface.

Read all project instructions first.

Create:

- application layout
- header
- password input
- show/hide button
- strength meter
- score display
- strength classification
- reset button

Connect the UI to the existing analysis engine.

Requirements:

- analyze while typing
- do not submit passwords
- do not store passwords
- do not log passwords
- do not send passwords anywhere

Use reusable React components.

Do not add advanced animations yet.

Verify functionality manually and through tests.

---

# PHASE 5 — ANALYSIS DASHBOARD

## Prompt

Extend the Pass Probe UI with detailed analysis results.

Add:

1. estimated entropy card
2. character analysis
3. pattern warnings
4. security recommendations
5. password length information
6. visual strength indicators

The UI should clearly explain why the password received its score.

Do not display the password anywhere except the password input.

Ensure the result object never contains the raw password.

Add appropriate tests.

Verify the complete application.

---

# PHASE 6 — UI/UX AND RESPONSIVENESS

## Prompt

Improve the Pass Probe interface to a professional final-year-project quality level.

Requirements:

- cybersecurity-themed design
- polished typography
- responsive layout
- mobile support
- tablet support
- desktop support
- subtle animations
- accessible buttons
- keyboard navigation
- visible focus states
- accessible labels
- responsive strength meter
- clean empty state

Do not overuse animations.

Do not introduce unnecessary UI libraries.

Check the application at multiple viewport sizes.

Fix visual issues you discover.

Do not change the underlying scoring algorithm unless a genuine defect is found.

---

# PHASE 7 — SECURITY HARDENING

## Prompt

Act as a cybersecurity engineer and perform a security review of Pass Probe.

Inspect the entire codebase.

Specifically search for:

- password logging
- LocalStorage usage
- SessionStorage usage
- cookie usage
- URL leakage
- query parameters containing passwords
- network requests containing passwords
- analytics leakage
- error messages exposing passwords
- accidental password persistence
- unsafe DOM manipulation
- unnecessary dependencies

Verify that password analysis remains entirely client-side.

Verify that result objects never contain the raw password.

Review dependencies for unnecessary packages.

Fix any discovered issues.

Create/update SECURITY.md documenting the security model.

Do not claim the application is completely secure.

Report:

- vulnerabilities found
- fixes applied
- remaining risks
- verification performed

---

# PHASE 8 — TESTING AND QUALITY ASSURANCE

## Prompt

Perform a complete QA pass for Pass Probe.

Test:

- empty password
- short passwords
- long passwords
- lowercase-only passwords
- uppercase-only passwords
- numbers-only passwords
- special-character passwords
- mixed passwords
- repeated characters
- sequential characters
- repeated patterns
- whitespace
- Unicode
- score boundaries
- entropy calculations
- strength classification
- recommendations
- show/hide functionality
- reset functionality
- responsive behavior

Run:

- unit tests
- production build
- linting if configured

Fix actual defects.

Do not change behavior simply to make tests pass.

Verify that no password values are logged.

Provide a QA summary with actual results.

---

# PHASE 9 — DOCUMENTATION AND RESUME PREPARATION

## Prompt

Prepare Pass Probe for final-year project demonstration and resume usage.

Create/update:

- README.md
- ARCHITECTURE.md
- SECURITY.md
- TESTING.md
- PROJECT_RULES.md

README must contain:

- project overview
- problem statement
- objectives
- features
- architecture
- technology stack
- installation
- development commands
- security model
- entropy explanation
- scoring explanation
- testing
- future enhancements

Also create RESUME.md containing:

1. one-line project description
2. three resume bullet points
3. technology list
4. interview explanation
5. project contribution explanation

Do not claim metrics that were not measured.

Do not invent accuracy percentages.

---

# PHASE 10 — FINAL RELEASE REVIEW

## Prompt

Perform the final Pass Probe release review.

Read:

- GEMINI.md
- AGENTS.md
- DETAILS.md
- ARCHITECTURE.md
- SECURITY.md
- TESTING.md
- README.md
- RESUME.md

Review the complete codebase.

Verify:

1. application starts
2. production build succeeds
3. tests pass
4. password is never transmitted
5. password is never persisted
6. password is never logged
7. entropy calculation works
8. scoring is deterministic
9. recommendations work
10. responsive UI works
11. accessibility basics are satisfied
12. no unnecessary dependencies exist
13. no placeholder functionality remains
14. no broken links/routes exist
15. documentation matches implementation

Fix genuine issues.

Do not introduce new features.

Do not redesign the application.

Do not make unsupported security claims.

Finally provide:

### RELEASE STATUS

PASS / FAIL

### FEATURES VERIFIED

List verified features.

### TESTS

List actual test results.

### BUILD

Report actual build result.

### SECURITY

Report actual security verification.

### REMAINING ISSUES

List any unresolved issues.

### PROJECT READY

State whether Pass Probe is ready for:

- GitHub
- resume
- final-year demonstration
- interview