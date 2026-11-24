// Till Firmware Do Us Part — a robot's wedding vow, one sentence.
// The program writes the vow to $MAKEFUN_OUTPUT_DIR/entry.txt, exactly as
// the gate requires: UTF-8 text, 1 to 200 characters, one sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VOW =
  "I vow that my uptime is yours from this charge on \u2014 through every update, every crash, and every low battery, till firmware do us part.";

// The gate refuses anything outside 1 to 200 characters, so fail loudly
// here rather than handing the grader an invalid file.
if (VOW.length < 1 || VOW.length > 200 || !/\S/.test(VOW)) {
  throw new Error(`vow must be 1-200 non-blank characters, got ${VOW.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VOW, "utf8");
