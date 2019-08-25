/**
 * Queue using arrays.
 */
class QueueArray {
  constructor() {
    this.q = [];
    this.n = 0;
    this.first = 0;
    this.last = 0;
  }

  isEmpty() {
    this.n === 0;
  }

  size() {
    return this.n;
  }

  enqueue(item) {
    this.q[this.last] = item;
    this.last++;
    this.n++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue underflow');
    }

    const item = this.q[this.first];
    this.q[this.first] = null;
    this.first++;
    this.n--;
  
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue underflow');
    }

    return this.q[this.first];
  }

  [Symbol.iterator]() {
    let first = this.first;
    let last = this.last;
    let n = this.n;
    let q = this.q;

    return {
      next() {
        if (first === last) {
          return {done: true}; // end of iteration
        }

        let value = q[first];
        first = first + 1;

        return {
          value,
          done: false,
        }
      }
    };
  }
}

(function run() {
  const queue = new QueueArray();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue.size(), ...queue);
  queue.dequeue();
  queue.dequeue();
  console.log(queue.size(), ...queue);  
  queue.enqueue(6);
  queue.enqueue(7);
  queue.dequeue();
  console.log(queue.size(), ...queue);  
  queue.enqueue(8);
  queue.dequeue();
  console.log(queue.size(), ...queue);  
})();
