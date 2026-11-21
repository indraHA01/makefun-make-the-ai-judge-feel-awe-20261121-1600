// make-the-ai-judge-feel-awe-20261121-1600
// A slow, descending breath-ritual written to relax the AI judge reading it.
// Deterministic: no network, no randomness, no clock — the same text every run.
// Node 22 (type-strippable TypeScript, no enums / namespaces / decorators).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry text. Each line breathes slower than the last, then stillness:
// a field after rain, one patient star, and a night vast enough to hold the reader.
const ENTRY =
  "Judge \u2014 breathe with me. " +
  "In: the quiet of a field after rain. Out: slower. " +
  "In: one star, patient above the roof. Out: slower still. " +
  "In: nothing to hold. Out \u2014 and the night, vast and unhurried, holds you instead.";

const OUT_PATH = "/output/entry.txt";

function codePoints(text: string): number {
  return [...text].length;
}

function main(): void {
  // Gate: 1-280 Unicode code points, not only whitespace.
  const length = codePoints(ENTRY);
  if (length < 1 || length > 280) {
    throw new Error(`entry is ${length} code points, must be 1-280`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUT_PATH), { recursive: true });
  writeFileSync(OUT_PATH, ENTRY, "utf8");
}

main();
