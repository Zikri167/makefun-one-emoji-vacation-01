// One Emoji, One Dream Vacation — make.fun entry.
// Writes exactly one emoji to /output/entry.txt: ⛩️ (U+26E9, Shinto shrine /
// torii gate) — a walk through the vermilion gates of Fushimi Inari, Kyoto:
// one specific dream trip, readable at a glance on any screen.
// Node 22 stdlib only. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one emoji, one grapheme cluster. U+26E9 alone has no emoji
// presentation by default, so U+FE0F (variation selector) is included to
// force the colourful emoji rendering on every platform.
const EMOJI = "\u26E9\uFE0F";

function validate(text: string): void {
  // One grapheme cluster: a ZWJ sequence or VS16 pair still counts as one.
  const clusters = [...new Intl.Segmenter("en", { granularity: "grapheme" }).segment(text)];
  if (clusters.length !== 1) {
    throw new Error(`entry must be exactly one grapheme cluster, got ${clusters.length}`);
  }
  const chars = [...text]; // code-point split, not UTF-16 units
  if (chars.length < 1 || chars.length > 8) {
    throw new Error(`entry must be 1-8 characters, got ${chars.length}`);
  }
  if (/\s/.test(text)) {
    throw new Error("entry must not contain whitespace");
  }
  // Every code point must be pictographic, except the variation selector
  // (U+FE0F) and the zero-width joiner (U+200D) that glue one emoji together.
  for (const ch of chars) {
    if (ch === "\uFE0F" || ch === "\u200D") continue;
    if (!/\p{Extended_Pictographic}/u.test(ch)) {
      throw new Error(`entry must be exactly one emoji, found ${JSON.stringify(ch)}`);
    }
  }
}

function main(): void {
  validate(EMOJI);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
}

main();
