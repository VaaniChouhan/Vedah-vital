import { readFileSync, readdirSync } from "fs";
import { join } from "path";

const DIST = join(process.cwd(), "dist", "assets");

let files;
try {
  files = readdirSync(DIST);
} catch {
  console.error("ERROR: dist/assets not found. Run npm run build first.");
  process.exit(1);
}

const jsFiles = files.filter((f) => f.endsWith(".js"));
const expectedChunks = ["vendor", "framer", "react-dom"];
const found = [];
const missing = [];

for (const chunk of expectedChunks) {
  const match = jsFiles.find((f) => f.toLowerCase().includes(chunk));
  if (match) {
    const size = readFileSync(join(DIST, match)).length;
    found.push({ chunk, file: match, sizeKB: (size / 1024).toFixed(1) });
  } else {
    missing.push(chunk);
  }
}

console.log("\n=== Bundle Chunk Verification ===");
for (const c of found) {
  console.log("  [OK] " + c.chunk + " => " + c.file + " (" + c.sizeKB + " KB)");
}
if (missing.length) {
  console.warn("  [WARN] Expected chunks not found: " + missing.join(", "));
  process.exit(1);
} else {
  console.log("  All expected chunks present.\n");
}
