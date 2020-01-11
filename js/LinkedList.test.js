import { describe, it } from 'mocha';
import { expect } from 'chai';
import { LinkedList } from './LinkedList';

describe('LinkedList', function () {
  describe('#constructor, #length', function () {
    it('should create a new Linked List and calculate its length', function () {
      const list = new LinkedList([1, 2, 3]);
      expect(list.length()).to.equal(3);
    });
  });
});
