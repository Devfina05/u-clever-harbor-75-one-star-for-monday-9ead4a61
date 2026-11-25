// One Star for Monday entry (Node 22, standard library only):
// writes one line — a one-star review of Monday as if it were a
// restaurant, 25 words or fewer — to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The craft: a real one-star restaurant review shape — cold coffee,
// lukewarm ambition, a meeting that could have been an email — and the
// waiter is time itself, which never showed up. 23 words, short enough to
// screenshot into the group chat.
// Verified by running the program: the output is one line, 25 words by
// whitespace split (the two standalone em-dashes count) and 137 characters,
// inside the at-most-25-words and 1-to-180-character gates.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'One star. Monday served cold coffee, lukewarm ambition, and a meeting that could have been an email. The waiter — time — never showed up.',
);
