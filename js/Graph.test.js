import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Graph } from './Graph';

describe('Graph', function () {
  describe('#constructor, #listNodesDepthFirst', function () {
    it('(simple) should create a new Graph and do a DFS', function () {
      const graph = new Graph([['a', 'b'], ['a', 'c'], ['a', 'd']]);
      expect(graph.listNodesDepthFirst()).to.eql(['a', 'b', 'c', 'd']);
    });
    it('(complex) should create a new Graph and do a DFS', function () {
      // example graph from p. 107 CCI.
      const nodes = [['0', '1'], ['0', '4'], ['0', '5'], ['1', '3'], ['1', '4'], ['2', '1'], ['3', '2'], ['3', '4']];
      const graph = new Graph(nodes);
      expect(graph.listNodesDepthFirst()).to.eql(['0', '1', '3', '2', '4', '5']);
    });
  });
});
