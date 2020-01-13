import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Graph } from './Graph';
import { routeBetweenNodes } from './RouteBetweenNodes';

describe('RouteBetweenNodes', function () {
  it('should return true when the two nodes are connected', function () {
    const graph = new Graph([['a', 'b'], ['a', 'c'], ['a', 'd']]);
    expect(routeBetweenNodes(graph, 'a', 'd')).to.be.true;
  });
  it('should return false when the two nodes are not connected', function () {
    const graph = new Graph([['a', 'b'], ['a', 'c'], ['a', 'd']]);
    expect(routeBetweenNodes(graph, 'a', 'e')).to.be.false;
  });
});
