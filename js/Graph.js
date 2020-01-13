/**
 * A generic Graph data structure.
 * Constructor takes a list of adjacency pairs: [['a', 'b'], ['a', 'c']...]
 */

/** A element of a Graph */
export class Node {
  constructor(name) {
    this.name = name;
    this.adjacents = [];
    this.visited = false;
  }
}

export class Visitor {
  constructor() {
    this.nodesVisited = [];
  }

  visit(node) {
    this.nodesVisited.push(node.name);
  }
}

/** The Graph data structure. */
export class Graph {
  constructor(nodePairs) {
    this.firstNode = null; // keep a pointer to first node
    this.nodeMap = {}; // key is node name, value is Node instance.
    nodePairs.forEach(nodePair => this.addNodes(nodePair));
    }

  addNodes(nodePair) {
    let node1 = this.nodeMap[nodePair[0]];
    let node2 = this.nodeMap[nodePair[1]];
    if (!node1) {
      node1 = new Node(nodePair[0]);
      if (!this.firstNode) { this.firstNode = node1; }
      this.nodeMap[nodePair[0]] = node1;
    }
    if (!node2) {
      node2 = new Node(nodePair[1]);
      this.nodeMap[nodePair[1]] = node2;
    }
    node1.adjacents.push(node2);
  }

  listNodesDepthFirst() {
    const visitor = new Visitor();
    this.traverseDepthFirst(this.firstNode, visitor);
    return visitor.nodesVisited;
  }

  traverseDepthFirst(node, visitor) {
    if (!node.visited) {
      visitor.visit(node);
      node.visited = true;
      for (let i = 0; i < node.adjacents.length; i++) {
        if (!node.adjacents[i].visited) {
          this.traverseDepthFirst(node.adjacents[i], visitor);
        }
      }
    }
  }
}
