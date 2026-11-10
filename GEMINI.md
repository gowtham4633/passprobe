# PASS PROBE
## Password Strength Analyzer — Complete Project Specification

## 1. Project Overview

Pass Probe is a client-side password strength analyzer designed to help users understand the quality of a password without transmitting the password to a backend or external service.

The application evaluates passwords using:

- rule-based security checks
- character diversity
- pattern detection
- estimated entropy
- deterministic scoring
- security recommendations

The primary design principle is:

> Analyze locally. Never transmit the password.

---

# 2. Problem Statement

Users frequently create passwords that appear complex but contain predictable patterns such as:

- dictionary-like words
- repeated characters
- sequential numbers
- short lengths
- predictable substitutions
- limited character diversity

A simple password meter may only count characters and provide an arbitrary strength label.

Pass Probe aims to provide a more transparent analysis by combining multiple measurable characteristics with an estimated entropy calculation.

---

# 3. Objectives

The application should:

1. Analyze password characteristics locally.
2. Calculate estimated entropy.
3. Detect weak patterns.
4. Generate a deterministic strength score.
5. Classify the password.
6. Explain why the password received its score.
7. Provide actionable recommendations.
8. Never transmit or persist the password.
9. Provide a responsive and accessible interface.

---

# 4. Scope

## Included

- password input
- show/hide password
- real-time analysis
- rule-based analysis
- entropy estimation
- pattern detection
- score calculation
- strength classification
- recommendations
- responsive UI
- accessibility
- unit testing
- security review

## Excluded

- breached-password API
- password storage
- user accounts
- authentication
- backend
- database
- cloud password processing
- password generation
- password synchronization

These exclusions intentionally keep Pass Probe standalone and privacy-preserving.

---

# 5. Functional Requirements

## FR-01 Password Input

The user can enter a password.

The password must remain inside browser memory.

## FR-02 Visibility Toggle

The user can show or hide the password.

Default:

Password hidden.

## FR-03 Real-Time Analysis

Analysis updates as the user types.

No submit button should be required.

## FR-04 Character Analysis

Determine whether the password contains:

- lowercase letters
- uppercase letters
- numbers
- special characters

## FR-05 Length Analysis

Analyze password length.

Recommended interpretation:

- 0–7: weak
- 8–11: moderate baseline
- 12+: stronger baseline

These thresholds must not independently determine the final score.

## FR-06 Pattern Detection

Detect:

- repeated characters
- repeated sequences
- ascending sequences
- descending sequences
- obvious keyboard-like patterns where practical
- common weak structures
- excessive repetition
- whitespace

## FR-07 Entropy

Estimate entropy using:

H = L × log2(R)

Where:

H = estimated entropy in bits

L = password length

R = estimated character pool size

Possible pools:

Lowercase = 26

Uppercase = 26

Digits = 10

Common ASCII special characters = approximately 32

The implementation must document the exact pool assumptions used.

## FR-08 Score

Create a deterministic score from 0–100.

The scoring algorithm must consider:

- length
- diversity
- entropy
- repetition
- predictable patterns

Avoid simply adding arbitrary points for each character class.

## FR-09 Classification

Use:

0–19   Very Weak

20–39  Weak

40–59  Moderate

60–79  Strong

80–100 Very Strong

These ranges can be adjusted during testing if the resulting classifications are demonstrably more useful.

## FR-10 Recommendations

Recommendations should explain weaknesses.

Examples:

- Increase password length.
- Add another character class.
- Avoid repeated characters.
- Avoid sequential patterns.
- Avoid predictable substitutions.
- Avoid common password structures.

---

# 6. Non-Functional Requirements

## Security

The application must never transmit passwords.

## Performance

Analysis should feel instantaneous for normal password lengths.

## Accessibility

Support:

- keyboard navigation
- semantic labels
- screen-reader-friendly status information
- adequate contrast
- visible focus states

## Responsiveness

Support:

- desktop
- laptop
- tablet
- mobile

---

# 7. Architecture

```text
React Application
       |
       +-- UI Layer
       |
       +-- Password Input
       |
       +-- Analysis Engine
              |
              +-- Rules
              +-- Pattern Detector
              +-- Entropy Calculator
              +-- Score Calculator
              +-- Recommendation Engine
       |
       +-- Result Presentation
```

The analysis engine should be independent from React whenever possible.

---

# 8. Recommended Project Structure

```text
pass-probe/
│
├── .agents/
│   ├── rules/
│   │   └── pass-probe.md
│   │
│   ├── agents/
│   │   ├── security-reviewer/
│   │   │   └── agent.md
│   │   ├── test-engineer/
│   │   │   └── agent.md
│   │   └── ui-reviewer/
│   │       └── agent.md
│   │
│   └── workflows/
│       ├── phase-check.md
│       ├── security-review.md
│       └── test-and-build.md
│
├── public/
│
├── src/
│   ├── components/
│   ├── engine/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── tests/
│
├── GEMINI.md
├── AGENTS.md
├── DETAILS.md
├── PROMPTS.md
├── ARCHITECTURE.md
├── SECURITY.md
├── TESTING.md
├── README.md
├── PROJECT_RULES.md
├── package.json
└── .gitignore
```

---

# 9. Security Model

The password exists only during active analysis.

Data flow:

```text
Password
   ↓
React state / controlled input
   ↓
Pure analysis functions
   ↓
Result object
   ↓
UI
```

The result object must not contain the raw password.

Example:

```javascript
{
  score: 82,
  strength: "Very Strong",
  entropy: 61.2,
  checks: {...},
  warnings: [...],
  recommendations: [...]
}
```

Never:

```javascript
{
  password: "..."
}
```

---

# 10. Result Object Design

The analysis engine should return structured information similar to:

```javascript
{
  score: 0,
  strength: "Very Weak",
  entropy: 0,
  length: 0,

  characterTypes: {
    lowercase: false,
    uppercase: false,
    numbers: false,
    special: false
  },

  patterns: {
    repeatedCharacters: false,
    repeatedSequences: false,
    sequentialCharacters: false,
    whitespace: false
  },

  warnings: [],

  recommendations: []
}
```

Do not include the original password.

---

# 11. Error Handling

Handle:

- empty input
- undefined input
- null input
- extremely long input
- unusual Unicode characters
- whitespace
- unsupported edge cases

Do not expose internal implementation errors to the user.

---

# 12. Testing Strategy

Test the analysis engine independently.

Test categories:

1. Empty password
2. Short password
3. Long password
4. Lowercase-only
5. Uppercase-only
6. Numbers-only
7. Special-character-only
8. Mixed password
9. Repeated characters
10. Sequential characters
11. Repeated patterns
12. Whitespace
13. Unicode
14. Entropy
15. Score boundaries
16. Classification boundaries
17. Recommendation generation

---

# 13. Performance

Do not perform unnecessary computation on every keystroke.

For normal passwords, direct synchronous analysis is acceptable.

If later benchmarking shows expensive operations, optimize only the identified bottleneck.

Do not prematurely introduce complex state-management libraries.

---

# 14. Privacy Statement

The application should clearly communicate:

> Your password is analyzed locally in your browser and is never sent to a server.

This statement must accurately reflect the implementation.

---

# 15. Future Extensions

These are NOT part of the initial Pass Probe implementation:

- password breach checking
- password generator
- browser extension
- account security dashboard
- enterprise password policy checker
- password manager integration

Do not implement future extensions unless explicitly requested.

---

# 16. Resume Positioning

Project title:

Pass Probe — Password Strength Analyzer

Suggested technologies:

React.js, JavaScript, CSS3, Vite

Core concepts:

- client-side security
- password analysis
- entropy
- pattern detection
- deterministic scoring
- secure data handling
- responsive UI
- unit testing

The project should demonstrate practical understanding rather than unnecessary complexity.