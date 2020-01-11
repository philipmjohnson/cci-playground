import { describe, it } from 'mocha';
import { expect } from 'chai';
import { checkPermutation, CharCount } from './CheckPermutation';

describe('checkPermutation', function () {
  it('should return true for a permutation', function () {
    expect(checkPermutation('abcde', 'bcdea')).to.be.true;
  });
  it('should return false for a non-unique string', function () {
    expect(checkPermutation('abcdee', '')).to.be.false;
  });
  it('should return all character counts correctly', function () {
    const charCounter = new CharCount();
    expect(charCounter.isEmpty()).to.be.true;
    charCounter.incCharCount('a');
    expect(charCounter.isEmpty()).to.be.false;
    charCounter.incCharCount('a');
    charCounter.incCharCount('b');
    charCounter.incCharCount('c');
    expect(charCounter.isEmpty()).to.be.false;
    charCounter.decCharCount('a');
    charCounter.decCharCount('a');
    charCounter.decCharCount('b');
    charCounter.decCharCount('c');
    expect(charCounter.isEmpty()).to.be.true;
    charCounter.decCharCount('e');
    expect(charCounter.isEmpty()).to.be.false;
  });
});
