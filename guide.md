# PASS PROBE — Project Status & User Execution Guide

## 1. Project Status Overview

| Metric | Status |
| :--- | :--- |
| **Current Phase** | **Phase 5: Documentation & Final Delivery (COMPLETED)** |
| **Completion State** | **100% Fully Built & Verified** |
| **Architecture** | Client-side standalone React app (Zero backend, Zero APIs) |
| **Security Status** | 100% Privacy-Preserving (Local memory only, no storage/transmission) |

---

## 2. Project Architecture & Components Summary

Pass Probe evaluates passwords in real-time within browser memory using:
1. **Rule-Based Analysis**: Character class presence (a-z, A-Z, 0-9, special symbols, whitespace) & length metrics.
2. **Pattern Detection Engine**: Algorithmic detection of sequential characters (e.g., `123`, `abc`), repeating character sub-sequences, character spam, and common weak dictionary structures.
3. **Logarithmic Entropy Calculator**: Mathematical estimation using \( H = L \times \log_2(R) \) based on active pool size.
4. **Deterministic Scoring Engine**: 0–100 quality score mapping to 5 strength categories (*Very Weak*, *Weak*, *Moderate*, *Strong*, *Very Strong*).

---

## 3. How to Run the Project

### Prerequisite
All application source code, pure engine scripts, React components, and styling files are built into standard modern HTML5 ES6 modules. No external build tool setup or node module installation is required.

### Quick Start Guide

1. **Navigate to Project Directory**:
   Open your terminal (PowerShell, Command Prompt, or Bash) and navigate to the project directory:
   ```bash
   cd d:/project/PassProbe
   ```

2. **Start a Local HTTP Server**:
   You can serve the application using standard Python (which is preinstalled on your system):
   ```bash
   python -m http.server 8080
   ```
   *(Alternatively, if you use Node.js `npx http-server` or VS Code Live Server, you can point it to the project root directory).*

3. **Open Application in Browser**:
   Launch your web browser (Chrome, Edge, Firefox, Brave, Safari) and navigate to:
   ```text
   http://localhost:8080
   ```

---

## 4. Key UI Features & Interaction Guide

- **Real-Time Password Input**: Type or paste any string into the main password field. Real-time analysis updates instantly on every keypress without needing a submit button.
- **Show / Hide Password**: Click the **Show** button to toggle password visibility for inspection, or **Hide** to mask it.
- **Clear Memory Action**: Click the red **Clear** button next to the input to immediately wipe the password state from browser memory.
- **Strength Meter**: Observe the color-coded visual progress bar reflecting strength categories (*Very Weak* in Red to *Very Strong* in Glowing Cyan).
- **Entropy & Score Cards**: Inspect the estimated bits of entropy along with the character pool size \( R \) and password length \( L \).
- **Character Diversity Checklist**: Review green checkmarks indicating active character classes.
- **Pattern Alerts & Recommendations**: View warnings for sequential or repetitive patterns, and actionable advice to improve strength.

---

## 5. Security & Privacy Guarantees

- **No Server Transmission**: Passwords never leave your device.
- **No Local Persistence**: The application does not store input in `LocalStorage`, `SessionStorage`, or `Cookies`.
- **Pure Memory Lifespan**: Once the browser tab is closed or cleared, password data ceases to exist in memory.
