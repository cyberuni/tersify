---
'tersify': patch
---

Replace the CJS-only `is-buffer` dependency with an inlined duck-typed check.

`is-buffer@2` ships only CommonJS, which broke consumers importing the ESM build in strict ESM environments. The check is three lines and has no Node dependency, so it now lives in `src/isBuffer.ts` and works in both Node and the browser. `tersify` no longer has `is-buffer` as a runtime dependency.
