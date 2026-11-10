# PASS PROBE — INITIAL DEVELOPMENT PROMPT

You are the lead software engineer responsible for developing a production-quality frontend application named **Pass Probe — Password Strength Analyzer**.

Before writing any code, thoroughly inspect the workspace and understand the project requirements.

## PROJECT OBJECTIVE

Build a modern, secure, responsive password strength analysis web application using:

- React.js
- JavaScript ES6+
- CSS3
- Vite
- React Router only if navigation becomes necessary
- No TypeScript
- No backend
- No database
- No external password-analysis API

The application must analyze passwords entirely inside the user's browser.

## CORE SECURITY REQUIREMENT

The password must NEVER:

- be sent to a server
- be stored in LocalStorage
- be stored in SessionStorage
- be written to cookies
- be sent to analytics
- be written to logs
- be included in URLs
- be persisted anywhere after the analysis session

All password analysis must happen locally in browser memory.

Do not introduce any functionality that violates this requirement.

## ANALYSIS ENGINE

Implement two primary analysis mechanisms:

### 1. Rule-Based Analysis

Evaluate:

- password length
- uppercase characters
- lowercase characters
- numeric characters
- special characters
- repeated characters
- sequential characters
- repeated patterns
- excessive character repetition
- common weak patterns
- whitespace
- character variety

Do not claim that the application can determine whether a password has appeared in a real-world breach because this project will not use a breach API or send passwords externally.

### 2. Entropy Analysis

Calculate estimated password entropy using an explicitly documented approximation based on:

Entropy = password length × log2(character pool size)

Determine character pool size based on the character classes actually present.

Clearly distinguish:

- estimated entropy
- strength score
- password quality

Do not represent entropy as a guarantee of password security.

## SCORE SYSTEM

Create a transparent scoring system.

The final score should consider:

- length
- character diversity
- repeated patterns
- sequential patterns
- common weak patterns
- estimated entropy

The scoring algorithm must be deterministic and documented.

Use the following strength categories:

- Very Weak
- Weak
- Moderate
- Strong
- Very Strong

Do not randomly generate scores.

## USER INTERFACE

Create a polished cybersecurity-themed interface.

Application name:

PASS PROBE

Subtitle:

Password Strength Analyzer

The interface should contain:

1. Password input
2. Show/hide password button
3. Strength meter
4. Numerical score
5. Strength classification
6. Entropy value
7. Character analysis
8. Security recommendations
9. Pattern warnings
10. Reset/Clear button

Example:

Password Strength

████████░░ 80%

STRONG

Estimated Entropy: 52.4 bits

✓ Good password length
✓ Uppercase character detected
✓ Lowercase character detected
✓ Number detected
✓ Special character detected

⚠ Avoid predictable patterns

## UX REQUIREMENTS

The interface should:

- respond instantly while typing
- never require a submit button
- clearly communicate password strength
- provide useful recommendations
- avoid displaying the actual password anywhere except the password input
- work on mobile, tablet and desktop
- support keyboard interaction
- have accessible labels
- provide meaningful empty states

## DESIGN

Use an original modern cybersecurity aesthetic.

Preferred characteristics:

- dark professional interface
- subtle gradients
- glassmorphism used sparingly
- clean cards
- modern typography
- responsive layout
- smooth but restrained animations
- accessible contrast

Do not copy the exact interface of another product.

## PROJECT STRUCTURE

Use a modular structure similar to:

src/
├── components/
│   ├── PasswordInput.jsx
│   ├── StrengthMeter.jsx
│   ├── ScoreCard.jsx
│   ├── EntropyCard.jsx
│   ├── CharacterAnalysis.jsx
│   ├── RecommendationList.jsx
│   └── PatternWarnings.jsx
│
├── pages/
│   └── Home.jsx
│
├── engine/
│   ├── analyzePassword.js
│   ├── entropy.js
│   ├── scoring.js
│   ├── patternDetector.js
│   └── rules.js
│
├── utils/
│   └── constants.js
│
├── styles/
│   ├── global.css
│   ├── home.css
│   └── components.css
│
├── App.jsx
└── main.jsx

Adjust the structure if you determine a better architecture, but keep the application simple and maintainable.

## DEVELOPMENT APPROACH

Do NOT implement the entire project blindly in one step.

Work in phases.

First:

1. Inspect the workspace.
2. Read all available project instruction files.
3. Create a development plan.
4. Identify ambiguities.
5. Explain the proposed architecture.
6. Wait for approval before making major implementation changes if the workspace is empty.

Once implementation begins:

- make small logical changes
- test each change
- inspect generated files
- fix errors immediately
- avoid unnecessary dependencies
- do not introduce speculative features
- do not modify unrelated files

## QUALITY REQUIREMENTS

Every implementation must prioritize:

- correctness
- security
- simplicity
- maintainability
- accessibility
- responsive design
- performance

Do not add libraries merely because they are popular.

Prefer native JavaScript where practical.

## TESTING REQUIREMENTS

Create tests for the analysis engine covering:

- empty password
- very short password
- lowercase only
- uppercase only
- numbers only
- special characters only
- mixed character password
- long password
- repeated characters
- sequential characters
- common weak patterns
- whitespace
- entropy calculation
- deterministic score calculation

The password itself must never appear in logs or test output unnecessarily.

## IMPORTANT AGENT BEHAVIOR

Never claim that something is implemented unless you have actually inspected the resulting files and verified it.

Never fabricate test results.

Never fabricate dependencies.

Never fabricate security guarantees.

If something is uncertain, explicitly state the uncertainty.

At the end of each development phase, provide:

1. What was implemented
2. Files changed
3. Tests executed
4. Test results
5. Known issues
6. Recommended next step

Begin by inspecting the current workspace and project instructions.
Do not start implementing unrelated features.