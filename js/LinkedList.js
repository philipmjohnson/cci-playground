
/** A element of a linked list. */
export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/** A Linked List data structure. */
export class LinkedList {
  constructor(elements) {
    this.head = null;
    if (elements) {
      this.head = new Node(elements[0]);
      let tailPtr = this.head;
      for (let i = 1; i < elements.length; i++) {
        const node = new Node(elements[i]);
        tailPtr.next = node;
        tailPtr = node;
      }
    }
  }

  length() {
    const counter = (node) => ((node === null) ? 0 : 1 + counter(node.next));
    return counter(this.head);
  }
}
