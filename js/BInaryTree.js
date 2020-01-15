/**
 * Provides a simple implementation of a binary tree.
 * The printer is the nicest feature for checking your work.
 * Assumes each node has a string called 'name'.
 */

export class Node {
  constructor(name) {
    this.name = name;
    this.leftNode = null;
    this.rightNode = null;
  }

}

export class BinaryTree {
  /**
   * Return the root node of a newly constructed binary tree.
   * @param rootNodeName The name of the root node.
   * @returns {Node} The new root Node.
   */
  constructor(rootNodeName) {
    this.rootNode = new Node(rootNodeName);
  }

  /**
   * Returns a string that when printed shows the tree in indented order.
   * @param node (Optional) defaults to the root node.
   * @param pad (Optional) defaults to the empty string
   * @returns {string} Displays the node names, one per line, indented to show parent and child nodes.
   */
  prettyprint(node = this.rootNode, pad = '') {
    if (node == null) {
      return '';
    }
    const newPad = `${pad}  `;
    // eslint-disable-next-line
    return pad + node.name + '\n' + this.prettyprint(node.leftNode, newPad) + this.prettyprint(node.rightNode, newPad);
  }
}
