
    // Mock browser window scope for node/js evaluation
    global.window = global;
    require('./src/utils/constants.js');
    require('./src/engine/rules.js');
    require('./src/engine/patternDetector.js');
    require('./src/engine/entropy.js');
    require('./src/engine/scoring.js');
    require('./src/engine/analyzePassword.js');

    const analyzer = window.PassProbeAnalyzer;

    // Test cases
    const tests = [
      { name: 'Empty Password', input: '', expScore: 0, expCategory: 'Very Weak' },
      { name: 'Very Short Password', input: '123', expMaxScore: 19, expCategory: 'Very Weak' },
      { name: 'Lowercase Only', input: 'abcdefgh', expHasLower: true, expHasUpper: false },
      { name: 'Sequential Numbers', input: '12345678', expSeq: true },
      { name: 'Repeated Chars', input: 'aaaaaaa', expRep: true },
      { name: 'Mixed Complex', input: 'P@ssw0rd!probe2026', expMinEntropy: 60, expCategory: 'Very Strong' }
    ];

    let passed = 0;
    tests.forEach((t, i) => {
      const res = analyzer.analyzePassword(t.input);
      let ok = true;
      if (t.expScore !== undefined && res.score !== t.expScore) ok = false;
      if (t.expMaxScore !== undefined && res.score > t.expMaxScore) ok = false;
      if (t.expCategory !== undefined && res.strength !== t.expCategory) ok = false;
      if (t.expHasLower !== undefined && res.characterTypes.lowercase !== t.expHasLower) ok = false;
      if (t.expSeq !== undefined && res.patterns.sequentialCharacters !== t.expSeq) ok = false;
      if (t.expRep !== undefined && res.patterns.repeatedCharacters !== t.expRep) ok = false;
      if (t.expMinEntropy !== undefined && res.entropy < t.expMinEntropy) ok = false;

      if (ok) {
        console.log(`[PASS] Test ${i+1}: ${t.name} -> Score: ${res.score}, Strength: ${res.strength}, Entropy: ${res.entropy} bits`);
        passed++;
      } else {
        console.error(`[FAIL] Test ${i+1}: ${t.name}`, res);
      }
    });

    if (passed === tests.length) {
      console.log(`ALL ${passed} ENGINE TESTS PASSED SUCCESSFULLY!`);
    } else {
      process.exit(1);
    }
    