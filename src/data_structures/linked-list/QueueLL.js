const Node = require('./LinkedListNode');

/**
 * Queue implementation using linked list.
 */
class QueueLL {
  constructor() {
    this.first = null;
    this.last = null;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  enqueue(item) {
    const oldLast = this.last;
    this.last = new Node(item);

    if (this.isEmpty()) {
      this.first = this.last;
    } else {
      oldLast.next = this.last;
    }

    this.n+=1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue underflow');
    }

    const item = this.first;
    this.first = this.first.next;
    item.next = null;
    this.n-=1;

    if (this.isEmpty()) {
      this.last = null;
    }

    return item;
  }

  [Symbol.iterator]() {
    const {first} = this;
    let current = first;

    return {
      next() {
        if (current === null) {
          return {done: true}; // end of iteration
        }

        const value = current.data;
        current = current.next;

        return {
          value,
          done: false,
        };
      }
    }
  }
}

(function run() {
  const queue = new QueueLL();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log('queue => ', ...queue);
  queue.dequeue();
  queue.dequeue();
  console.log('queue => ', ...queue);
})();