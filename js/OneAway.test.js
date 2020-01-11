import { describe, it } from 'mocha';
import { expect } from 'chai';
import { insertp, removep, replacep } from './OneAway';

describe('OneAway', function () {
  describe('insertp', function () {
    it('pale -> pales is true', function () {
      expect(insertp('pale', 'pales')).to.be.true;
    });
    it('pale -> pasle is true', function () {
      expect(insertp('pale', 'pasle')).to.be.true;
    });
    it('pale -> spale is true', function () {
      expect(insertp('pale', 'spale')).to.be.true;
    });
    it('pale -> passs is false', function () {
      expect(insertp('pale', 'passs')).to.be.false;
    });
  });
  describe('removep', function () {
    it('pale -> pal is true', function () {
      expect(removep('pale', 'pal')).to.be.true;
    });
    it('pale -> ple is true', function () {
      expect(removep('pale', 'ple')).to.be.true;
    });
    it('pale -> pad is false', function () {
      expect(removep('pale', 'pad')).to.be.false;
    });
  });
  describe('replacep', function () {
    it('pale -> pald is true', function () {
      expect(replacep('pale', 'pald')).to.be.true;
    });
    it('pale -> pade is true', function () {
      expect(replacep('pale', 'pade')).to.be.true;
    });
    it('pale -> rade is false', function () {
      expect(replacep('pale', 'rade')).to.be.false;
    });
  });
});
