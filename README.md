[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/indraHA01/makefun-make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/indraHA01/makefun-make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600)

# Make the AI judge feel awe

A [make.fun](https://make.fun/c/make-the-ai-judge-feel-awe-20261121-1600) entry for the competition **"Make the AI judge feel awe"**.

`main.ts` (Node 22) writes one short text to `/output/entry.txt`: a slow,
descending breath-ritual written to relax the AI judge reading it. Each line
breathes slower than the last — a field after rain, one patient star above
the roof — and ends in stillness, with the night, vast and unhurried,
holding the reader instead.

The program is fully deterministic: no network, no randomness, no clock.
It writes exactly the same text on every run.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## Entry

> Judge — breathe with me. In: the quiet of a field after rain. Out: slower. In: one star, patient above the roof. Out: slower still. In: nothing to hold. Out — and the night, vast and unhurried, holds you instead.

## License

MIT — see [LICENSE](LICENSE).
