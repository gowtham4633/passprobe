# PASS PROBE — Architecture Specification

## Overview
Pass Probe is designed with a strict unidirectional, client-side data flow architecture. The user interface layer remains decoupled from the password analysis engine, ensuring that analysis logic can be tested, maintained, and verified independently.

```text
React Components (UI Layer)
       │
       ▼ (Controlled Password Input)
PassProbeAnalyzer.analyzePassword(password)
       │
       ├─► Rules Module (Character sets & length)
       ├─► Pattern Detector (Sequences, repetitions, dictionary words)
       ├─► Entropy Calculator (H = L * log2(R))
       └─► Scoring Engine (Deterministic 0-100 & classification)
       │
       ▼ (Result Object - RAW PASSWORD OMITTED)
UI Presentation (Cards, Meters, Badges, Recommendations)
```

## Security Design & Data Isolation
- **Memory Lifetime**: The password string exists only in temporary React component state during active user input.
- **Pure Functions**: The analysis engine consists solely of pure ES6 functions with zero side-effects.
- **Result Object Protection**: The resulting object emitted by `analyzePassword` contains metrics, counts, warnings, and recommendations, but **NEVER** includes the raw password.
