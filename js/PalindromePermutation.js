/**
 * CCI 1.4 Palindrome Permutation
 * Determine if a string is a permutation of a palindrome.
 * Example: palperm('xyzyx') => true
 * Example: palperm('xxyyz') => true
 * Example: palperm('xxyyy') => true
 * Example: palperm('xyz') => false
 */

export class CountMap {
  constructor() {
    this.counts = {};
  }

  add(char) {
    this.counts[char] = (this.counts[char] === undefined) ? this.counts[char] = 1 : this.counts[char] + 1;
  }

  totalOdds() {
    let totalOdds = 0;
    for (const key of Object.keys(this.counts)) {
      if (this.counts[key] === 1) {
        totalOdds++;
      }
    }
    return totalOdds;
  }
}

export function palperm(str) {
  const countMap = new CountMap();
  for (let i = 0; i < str.length; i++) {
    countMap.add(str[i]);
  }
  return (countMap.totalOdds() === (str.length % 2));
}
