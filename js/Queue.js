/**
 * A generic Queue data structure.
 */

export class Queue {
  /**
   * Create a new Queue instance, optionally initialized with a list of elements.
   * @param initialList An array of elements that initializes the Queue.
   */
  constructor(initialList) {
    this.elements = initialList || [];
    }

  /**
   * Add a new element (or array of elements) to the end of the queue.
   * @returns the element (or array of elements).
   */
  enqueue(element) {
    if (Array.isArray(element)) {
      this.elements = this.elements.concat(element);
    } else {
      this.elements.push(element);
    }
    return element;
  }

  /**
   * Removes and returns the front element of the queue, if there is at least one element.
   * Otherwise, return null.
   */
  dequeue() {
    if (this.elements.length > 0) {
      return this.elements.splice(0, 1)[0];
    }
    return null;
  }

  /**
   * Returns true if the queue is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return (this.elements.length === 0);
  }
}
