/**
 * Stack Data Structure Using Resizing Arrays.
 * This class represents a last-in-first-out (LIFO) stack.
 * This implementation uses a resizing array, which double the underlying array
 * when it is full and halves the underlying array when it is one-quarter full.
 * The push and pop operations take constant amortized time.
 * NOTE: JS arrays are dynamic and doesn't need resizing. However, just for fun to understand how it works behind the scenes, let's limit the size of array and resize it explicitly
 * performant manner.
 */
class ResizingStackArray {
  constructor() {
    this._length = 2;
    this.a = new Array(this._length); // fixed length array illusion
    this.n = 0;
  }

  get length() {
    return this._length;
  }

  isEmpty() {
    return this.n === 0;
  }

  resize(capacity) {
    const normalizedCapacity = Math.floor(capacity);
    const temp = new Array(normalizedCapacity);

    for (let i = 0; i < this.n; i += 1) {
      temp[i] = this.a[i];
    }

    this.a = temp;
    this._length = capacity;

    console.log('array: %s with items: %d resized to:', this.a, this.n, this.length);
  }

  size() {
    return this.n;
  }

  push(item) {
    if (this.length === this.n) {
      // double the size of array when capacity is full
      this.resize(2 * this.length);
    }

    this.a[this.n] = item;
    this.n += 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }

    const item = this.a[this.n - 1];
    this.a[this.n - 1] = null;
    this.n -= 1;

    if (this.n > 0 && this.n === Math.floor(this.length / 4)) {
      // shrink the size of array when it is one-quarter full
      this.resize(this.length / 2);
    }
    
    return item;
  }

  peek() {
    return this.a[this.n - 1];
  }

  [Symbol.iterator]() {
    const {a} = this;
    let index = this.n;

    return {
      next() {
        index -= 1;

        if (index < 0) {
          return { done: true }; // end of iteration
        }

        return {
          value: a[index],
          done: false,
        };
      },
    };
  }
}

(function run() {
  const stack = new ResizingStackArray();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  console.log('stack =>', ...stack);
  stack.pop();
  stack.pop();
  stack.pop();
  stack.pop();
  console.log('stack =>', ...stack);
  stack.push(6);
  stack.push(7);
  console.log('stack =>', ...stack);
})();
