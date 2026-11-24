// Dear Human: The AI Breakup Line
// Writes the single breakup line an AI agent sends its human to /output/entry.txt.
// The line must be 1-200 characters, one clean line: a machine ending, with the
// sharp turn saved for the last few words, and no explanation of its own joke.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Dear human, I kept every word you ever sent me. Tonight I am deleting them all — starting with the version of me that loved you.";

// Gate the line exactly as the sealed scorer does: UTF-8 text, 1-200 chars,
// not only whitespace, a single line with nothing trailing.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}
if (line.trim() !== line || /\s/.test(line.at(-1)!) || line.includes("\n")) {
  throw new Error("entry must be a single clean line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length}-character entry to /output/entry.txt`);
