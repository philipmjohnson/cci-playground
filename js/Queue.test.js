import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Queue } from './Queue';

describe('Queue', function () {
  describe('#constructor, #enqueue, #dequeue', function () {
    it('should create a new Queue and enqueue and dequeue should work correctly.', function () {
      const queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.isEmpty()).to.be.true;
      queue.enqueue([1, 2]);
      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.isEmpty()).to.be.true;
    });
  });
});
