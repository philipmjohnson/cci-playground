import { describe, it } from 'mocha';
import { expect } from 'chai';
import { CountMap, palperm } from './PalindromePermutation';

describe('PalindromePermutation', function () {
  describe('CountMap', function () {
    it('CountMap should work', function () {
      const countMap = new CountMap();
      expect(countMap.totalOdds()).to.equal(0);
      countMap.add('a');
      expect(countMap.totalOdds()).to.equal(1);
      countMap.add('a');
      expect(countMap.totalOdds()).to.equal(0);
      countMap.add('b');
      expect(countMap.totalOdds()).to.equal(1);
      countMap.add('c');
      expect(countMap.totalOdds()).to.equal(2);
      countMap.add('d');
      expect(countMap.totalOdds()).to.equal(3);
      countMap.add('d');
      expect(countMap.totalOdds()).to.equal(2);

    });
  });
  describe('palperm', function () {
    it('xyzyx should be a palperm', function () {
      expect(palperm('xyzyx')).to.be.true;
    });
    it('xyyyy should be a palperm', function () {
      expect(palperm('xyyyy')).to.be.true;
    });
    it('xyz should not be a palperm', function () {
      expect(palperm('xyz')).to.be.false;
    });
  });
});
