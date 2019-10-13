/**
 * Queue using resizing arrays.
 * This implementation uses a resizing array, which double the underlying array
 * when it is full and halves the underlying array when it is one-quarter full.
 * The enqueue and dequeue operations take constant amortized time.
 * NOTE: JS arrays are dynamic and doesn't need resizing. However, just for fun to understand how it works behind the scenes, let's limit the size of array and resize it explicitly
 * performant manner.
 */
class ResizingQueueArray {
  constructor() {
    this._length = 2;
    this.q = new Array(this._length); // fixed length illusion
    this.first = 0;
    this.last = 0;
    this.n = 0;
  }

  get length() {
    return this._length;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  resize(capacity) {
    const normalizedCapacity = Math.floor(capacity);
    const temp = new Array(normalizedCapacity); // length illusion

    for (let i = 0; i < this.n; i += 1) {
      const index = (i + this.first) % this._length;
      temp[i] = this.q[index];
    }

    this.q = temp;
    this._length = capacity;
    this.first = 0;
    this.last = this.n;

    console.log('queue: %s with items: %d resized to:', this.q, this.n, this.length);
  }

  enqueue(item) {
    if (this.n === this.length) {
      this.resize(2 * this.length);
    } 

    this.q[this.last] = item;
    this.last += 1;

    if (this.last === this.length) {
      this.last = 0; // wrap around
    }

    this.n += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue underflow');
    }

    const item = this.q[this.first];
    this.q[this.first] = null;
    this.first += 1;
    this.n -= 1;

    if (this.isEmpty()) {
      this.first = 0; // wrap around
    }

    if (this.n > 0 && this.n === Math.floor(this.length / 4)) {
      this.resize(this.length / 2);
    }

    return item;
  }

  [Symbol.iterator]() {
    let i = 0;
    const {first, n, length, q} = this;

    return {
      next() {
        if (i === n) {
          return {done: true}; // end of iteration
        }

        const index = (first + i) % length;
        i += 1;

        return {
          value: q[index],
          done: false,
        };
      }
    };
  }
}

(function run() {
  const queue = new ResizingQueueArray();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log('queue =>', ...queue);
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  queue.dequeue();
  console.log('queue =>', ...queue);
  queue.enqueue(6);
  queue.enqueue(7);
  console.log('queue =>', ...queue);
})();

