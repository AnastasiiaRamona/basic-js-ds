const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }

  getUnderlyingList() {
    let current = this.head;
    let result = { value: null, next: null };
    let currentNode = result;

    while (current < this.tail) {
      currentNode.value = this.elements[current];
      if (current + 1 < this.tail) {
        currentNode.next = { value: null, next: null };
        currentNode = currentNode.next;
      }
      current++;
    }

    return JSON.parse(JSON.stringify(result));
  }

  enqueue(value) {
    this.elements[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
}

module.exports = {
  Queue
};
