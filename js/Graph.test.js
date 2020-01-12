import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Graph } from './Graph';

describe('Graph', function () {
  describe('#constructor, #listNodesDepthFirst', function () {
    it('should create a new Graph and do a DFS', function () {
      const graph = new Graph([['a', 'b'], ['a', 'c'], ['a', 'd']]);
      expect(graph.listNodesDepthFirst()).to.eql(['a', 'b', 'c', 'd']);
    });
  });
});
