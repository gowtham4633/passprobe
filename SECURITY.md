# PASS PROBE — Security Specification & Audit Checklist

## Security Policy & Principles

### 1. Zero Transmission Guarantee
Pass Probe is designed as an isolated, standalone application.
- No network requests are initiated during password analysis.
- No third-party analytics, tracking scripts, or telemetry libraries are loaded.

### 2. Zero Persistence Policy
- `LocalStorage`: NOT used.
- `SessionStorage`: NOT used.
- `Cookies`: NOT used.
- `IndexedDB` / `Service Workers`: NOT used.
- `URL Parameters` / `History State`: NOT used.

### 3. Memory Cleanup & Input Attributes
- The password field is configured with `autoComplete="off"`, `autoCorrect="off"`, `autoCapitalize="off"`, and `spellCheck="false"`.
- The user can click **Clear** at any time to immediately set input state to `""`.
