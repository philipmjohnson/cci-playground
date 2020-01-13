import { Queue } from './Queue';

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

/** The visit() method is called each time a traversal algorithm visits a node. */
export class Visitor {
  constructor() {
    this.nodesVisited = [];
  }

  visit(node) {
    node.visited = true;
    this.nodesVisited.push(node.name);
  }
}

/** The Graph data structure. */
export class Graph {
  /**
   * Create a new Graph instance, initialized with the graph layout.
   * @param nodePairs An array of array pairs, each pair consisting of two strings indicating the node name.
   */
  constructor(nodePairs) {
    this.firstNode = null; // keep a pointer to first node
    this.nodeMap = {}; // key is node name, value is Node instance.
    nodePairs.forEach(nodePair => this.addNodes(nodePair));
    }

  /**
   * initialize the graph data structure with nodes and a connection between them.
   */
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

  /**
   * Returns the node associated with nodeName, or null if not found.
   * @param nodeName The node name.
   * @returns A node, or null.
   */
  getNode(nodeName) {
    return this.nodeMap[nodeName];
  }

  /**
   * Implement depth first traversal, returning a list of the node names visited.
   * @returns {Array}
   */
  listNodesDepthFirst() {
    const visitor = new Visitor();
    this.traverseDepthFirst(this.firstNode, visitor);
    return visitor.nodesVisited;
  }

  /**
   * Implement depth first traversal, returning a list of the node names visited.
   * @returns {Array}
   */
  listNodesBreadthFirst() {
    const visitor = new Visitor();
    this.traverseBreadthFirst(this.firstNode, visitor);
    return visitor.nodesVisited;
  }

  /**
   * Traverse this graph in depth first order.
   * @param node The first node to be visited
   * @param visitor An instance of the Visitor class; calls its visit() method with the node being visited.
   */
  traverseDepthFirst(node, visitor) {
    if (!node.visited) {
      visitor.visit(node);
      for (let i = 0; i < node.adjacents.length; i++) {
        if (!node.adjacents[i].visited) {
          this.traverseDepthFirst(node.adjacents[i], visitor);
        }
      }
    }
  }

  traverseBreadthFirst(root, visitor) {
    const queue = new Queue();
    visitor.visit(root);
    queue.enqueue(root.adjacents);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (!node.visited) {
        visitor.visit(node);
        queue.enqueue(node.adjacents);
      }
    }
  }
}
