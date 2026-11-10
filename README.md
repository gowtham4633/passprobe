# PASS PROBE — Password Strength Analyzer

Pass Probe is a secure, client-side, privacy-first password strength analyzer built with **React.js**, **JavaScript (ES6+)**, **CSS3**, and **Vite**. It provides real-time password strength evaluation, character set analysis, sequential & repeating pattern detection, and estimated logarithmic entropy calculations without ever storing, logging, or transmitting the user's password.

> **Core Security Principle**: Analyze locally. Never transmit or persist the password.

---

## Features

- 🔒 **Zero Data Transmission**: Analysis runs 100% in browser memory. No backend server, database, cookies, LocalStorage, or external APIs are used.
- ⚡ **Real-Time Analysis**: Direct evaluation on every keystroke without requiring a submit button.
- 🧮 **Logarithmic Entropy Estimation**: Calculates entropy in bits using \( H = L \times \log_2(R) \) based on detected character pools.
- 🎯 **Deterministic Scoring (0–100)**: Evaluates length, diversity, repetitions, sequences, and weak patterns to categorize strength into 5 clear tiers (*Very Weak*, *Weak*, *Moderate*, *Strong*, *Very Strong*).
- 🛡️ **Pattern Alert Engine**: Detects ascending/descending character sequences (e.g. `abc`, `123`), repeated sub-sequences, character spam, and common dictionary words.
- 👁️ **Visibility Toggle & Memory Flush**: Includes password show/hide button and a 1-click **Clear** button to purge state from memory.
- 🎨 **Modern Dark Cybersecurity Theme**: Styled with a dark glassmorphism aesthetic, responsive CSS grid/flexbox layout, and screen-reader accessibility tags.

---

## Project Structure

```text
PassProbe/
├── index.html                   # HTML template with React, Babel, and Google Fonts
├── package.json                 # Project specification and metadata
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Header logo, title, and privacy badge
│   │   ├── PasswordInput.jsx    # Secure controlled input with show/hide & clear actions
│   │   ├── StrengthMeter.jsx    # Dynamic category-colored progress bar
│   │   ├── ScoreCard.jsx        # 0–100 numerical score presentation
│   │   ├── EntropyCard.jsx      # Estimated entropy in bits with formula details
│   │   ├── CharacterAnalysis.jsx# Character class checklist (a-z, A-Z, 0-9, special)
│   │   ├── PatternWarnings.jsx  # Security warnings for weak structures/sequences
│   │   └── RecommendationList.jsx # Actionable security recommendations
│   ├── engine/
│   │   ├── rules.js             # Character class & length metrics
│   │   ├── patternDetector.js   # Sequence, repetition, and weak pattern detectors
│   │   ├── entropy.js           # Character pool detection & log2 entropy formula
│   │   ├── scoring.js           # Deterministic 0-100 score calculator & categories
│   │   └── analyzePassword.js   # Pure orchestrator returning structured result object
│   ├── pages/
│   │   └── Home.jsx             # Main application container
│   ├── utils/
│   │   └── constants.js         # Pool sizes, regexes, and weak dictionary patterns
│   ├── styles/
│   │   ├── global.css           # CSS design system variables & reset
│   │   ├── home.css             # Page container layout & animations
│   │   └── components.css       # Styled cards, inputs, meters & responsive styles
│   ├── App.jsx                  # Root React component
│   └── main.jsx                 # React DOM mount point
├── AGENTS.md                    # Agent handbook & workflow guidelines
├── DETAILS.md                   # Workspace security & engineering rules
├── GEMINI.md                    # Password Strength Analyzer complete specification
└── README.md                    # Project documentation
```

---

## Technical Specifications & Formulae

### 1. Entropy Calculation
Estimated entropy \( H \) in bits is computed as:
\[ H = L \times \log_2(R) \]
Where:
- \( L \) = Password Length
- \( R \) = Character Pool Size based on active sets:
  - Lowercase (`a-z`): 26
  - Uppercase (`A-Z`): 26
  - Digits (`0-9`): 10
  - Special (`!@#$%^&*...`): 32

### 2. Strength Classification
| Score Range | Category | Color Theme |
| :--- | :--- | :--- |
| **0 – 19** | Very Weak | Red (`#ff4757`) |
| **20 – 39** | Weak | Orange (`#ff7f50`) |
| **40 – 59** | Moderate | Yellow (`#eccc68`) |
| **60 – 79** | Strong | Green (`#2ed573`) |
| **80 – 100** | Very Strong | Neon Cyan (`#00f2fe`) |

---

## Security Verification & Test Suite

The analysis engine core functions are 100% pure and verified through automated test suites covering:
1. **Empty Password**: Evaluates to 0 score, 0 entropy, Very Weak category.
2. **Short Password (< 6 chars)**: Hard-capped to max 19 score (Very Weak).
3. **Sequential & Repeated Patterns**: Detects `123456`, `abc`, `aaaaa`, applying appropriate penalties.
4. **Complex Passwords**: Evaluates high-entropy strings (e.g. `P@ssw0rd!probe2026`) to 60+ bits and Very Strong classification.

---

## Running Locally

1. Clone or navigate to the repository directory:
   ```bash
   cd d:/project/PassProbe
   ```
2. Serve the static site using any HTTP server:
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

---

## License

MIT License — Privacy-first open-source security tool.
