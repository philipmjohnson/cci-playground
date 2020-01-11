/**
 * CCI 1.2: Check Permutation
 * Given two strings, return true if one is a permutation of the other.
 * Assume ASCII.
 */

/**
 * Sort a string alphabetically.
 * Use this to solve problem by checking to see if the two strings, after sorting, are equal.
 */
// eslint-disable-next-line
function sortString(str) {
  return [...str].sort().join('');
}

/**
 * Maintain a hash of characters to their counts.
 * Build the counts while traversing str1, decrement while traversing str2.
 */
export class CharCount {
  constructor() {
    this.charMap = {};
  }

  incCharCount(char) {
    this.charMap[char] = (char in this.charMap) ? this.charMap[char] + 1 : 1;
  }

  decCharCount(char) {
    this.charMap[char] = (char in this.charMap) ? this.charMap[char] - 1 : -1;
  }

  isEmpty() {
    return Object.keys(this.charMap).every(key => this.charMap[key] === 0);
  }
}

export function checkPermutation(str1, str2) {
  const charCount = new CharCount();
  for (let i = 0; i < str1.length; i++) {
    charCount.incCharCount(str1[i]);
  }
  for (let i = 0; i < str2.length; i++) {
    charCount.decCharCount(str2[i]);
  }
  return charCount.isEmpty();
}
