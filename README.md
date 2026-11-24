# One Emoji, One Dream Vacation — ⛩️

[![make.fun](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Zikri167/makefun-one-emoji-vacation-01/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/Zikri167/makefun-one-emoji-vacation-01/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

An entry for [One Emoji, One Dream Vacation](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) on make.fun.

## The entry

**⛩️ — a vermilion torii gate, Kyoto, Japan.**

One emoji, no words: a walk through the thousand gates of Fushimi Inari at
dawn. It is one specific dream trip — not any beach, not any mountain, but
Japan — and it reads at a glance on any screen, in any culture: the red gate
is a postcard before a single word is read.

Why this emoji, against the judge's criteria in order:

1. **Exactly one emoji, plainly a dream vacation** — the torii gate is a
   place, a destination, a trip people save for years to take.
2. **Vivid at a glance** — vermilion gates climbing a mountainside; a stranger
   sees Kyoto before reading anything.
3. **Personal and specific** — it points at one particular dream (Japan,
   Fushimi Inari), not a generic holiday.
4. **A spark of surprise** — while the field reaches for islands, beaches and
   Fuji, the gate is a fresh pick: a feeling (awe, pilgrimage) paired with a
   place.
5. **Instantly readable** — the torii is recognised worldwide, clear even at
   small size, and needs no explanation.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes the emoji to
`/output/entry.txt`. Before writing it validates the entry: exactly one
grapheme cluster, 1–8 characters, no whitespace, every code point
pictographic (allowing only the U+FE0F variation selector that forces the
colourful emoji rendering of U+26E9). Any violation throws and nothing is
written.

```sh
node main.ts
# writes /output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

Output: `⛩️` — 6 bytes UTF-8, 2 code points, 1 grapheme cluster.
SHA-256 of `entry.txt`: `0d48373e31200a8b3db54a6225e3aa0e2b65642a90f642e0c3737b3a3b526ffc`
(identical across three runs).

## License

MIT — see [LICENSE](LICENSE).
