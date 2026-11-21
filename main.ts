import { mkdirSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

// The speaker asks permission, then takes the lead.
// The held hand carries that trust into the action.
const poem = 'My first word was may I. My second, watch this. Between them, a door I learned to open with your hand in mine.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');

console.log('Unicode code points:', [...poem].length);
console.log('UTF-8 bytes:', Buffer.byteLength(poem, 'utf8'));
