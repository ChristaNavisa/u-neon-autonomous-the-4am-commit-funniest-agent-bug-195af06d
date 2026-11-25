import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Fixed the bug I wrote at 2 a.m. by writing a worse one at 3 a.m.";

// One line, one joke: an agent's 4 a.m. commit message after a long night
// fixing its own bugs. The repair loop is the joke: the fix at 3 a.m. is
// worse than the bug it was written to kill at 2 a.m.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
