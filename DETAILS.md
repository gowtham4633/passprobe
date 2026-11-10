# PASS PROBE — WORKSPACE RULES

## Project Identity

Project name: Pass Probe

Project type: Password Strength Analyzer

Primary purpose: Analyze password strength entirely within the user's browser.

## Technology Rules

Use:

- React.js
- JavaScript ES6+
- Vite
- CSS3

Do not use TypeScript.

Do not introduce a backend.

Do not introduce a database.

Do not introduce a password-analysis API.

## Security Rules

The password is sensitive user input.

NEVER:

- send the password over HTTP
- store the password in LocalStorage
- store the password in SessionStorage
- store the password in cookies
- persist the password
- place the password in URL parameters
- place the password in browser history
- log the password
- print the password to the console
- include the password in error messages
- send the password to analytics
- send the password to external services

Password analysis must happen entirely in browser memory.

Clear password-related state when the user resets the analyzer.

## Analysis Rules

Use:

1. Rule-based analysis
2. Estimated entropy analysis
3. Pattern analysis
4. Deterministic scoring

Analyze:

- length
- uppercase
- lowercase
- digits
- special characters
- repeated characters
- repeated sequences
- sequential characters
- common weak patterns
- character diversity
- whitespace

## Entropy Rules

Use a documented approximation:

Entropy = length × log2(character pool size)

Character pool size must be based on the character classes actually present.

Do not describe entropy as an absolute measurement of real-world password security.

## UI Rules

The UI must be:

- responsive
- accessible
- keyboard friendly
- professional
- cybersecurity themed
- visually clean
- performant

Avoid excessive animation.

Do not expose the password outside the password input.

## Code Rules

Use:

- reusable React components
- small functions
- descriptive names
- separation of UI and analysis logic
- pure functions for analysis where possible
- minimal dependencies

Do not create huge components.

Do not duplicate analysis logic.

Do not mix API concerns with UI concerns.

## Testing Rules

Every core analysis function must be testable independently.

Tests must verify:

- expected results
- edge cases
- deterministic scoring
- entropy calculations
- pattern detection
- empty input handling

Never log real passwords during tests.

## Agent Rules

Before implementing a feature:

1. Understand the requirement.
2. Inspect relevant files.
3. Identify dependencies.
4. Plan the smallest appropriate change.

After implementation:

1. Run tests.
2. Check build.
3. Inspect changed files.
4. Fix errors.
5. Report actual results.

Never claim a test passed unless it was actually executed.

Never invent implementation details.

Never add unrelated functionality.

If requirements conflict, prioritize security and explicit project requirements.