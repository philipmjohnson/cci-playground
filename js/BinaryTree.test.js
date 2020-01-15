import { describe, it } from 'mocha';
import { expect } from 'chai';
import { BinaryTree, Node } from './BinaryTree';

describe('BinaryTree', function () {
  describe('#prettyprint', function () {
    it('should create a new Binary Tree and print it out', function () {
      const tree = new BinaryTree('a');
      const root = tree.rootNode;
      root.leftNode = new Node('b');
      root.leftNode.leftNode = new Node('d');
      root.leftNode.rightNode = new Node('e');
      root.rightNode = new Node('c');
      root.rightNode.leftNode = new Node('f');
      root.rightNode.rightNode = new Node('g');
      expect(tree.prettyprint()).to.eql('a\n  b\n    d\n    e\n  c\n    f\n    g\n');
    });
  });
});
