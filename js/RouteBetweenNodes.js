import { Queue } from './Queue';

/**
 * CCI: 4.1 Route Between Nodes.
 * Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
 */

/**
 * Do a BFS starting from node1, returning true if node2 is encountered.
 * @param graph The Graph.
 * @param node1Name The name of the first node.
 * @param node2Name The name of the second node.
 * @returns {boolean} True if node2 is encountered, otherwise false.
 */
export function routeBetweenNodes(graph, node1Name, node2Name) {
  const queue = new Queue();
  const node1 = graph.getNode(node1Name);
  node1.visited = true;
  queue.enqueue(node1.adjacents);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    if (node.name === node2Name) {
      return true;
    }
    node.visited = true;
    queue.enqueue(node.adjacents);
  }
  return false;
}
