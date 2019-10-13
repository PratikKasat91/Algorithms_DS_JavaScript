/**
 * Stack Data Structure Using Arrays.
 */
class StackArray {
  constructor() {
    this.a = [];
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }
  
  size() {
    return this.n;
  }

  push(item) {
    this.a[this.n] = item; 
    this.n += 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }

    const item = this.a[this.n-1];
    this.a[this.n-1] = null;
    this.n -= 1;  
    return item;
  }

  peek() {
    return this.a[this.n-1];
  }

  [Symbol.iterator]() {
    const {a} = this;
    let index = this.n;

    return {
      next() {
        index -= 1;

        if (index < 0) {
          return {done: true}; // end of iteration
        }

        return {
          value: a[index],
          done: false,
        };
      }
    }
  }
}

(function run() {
  const stack = new StackArray();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  console.log(stack.size(), ...stack);
  stack.pop();
  stack.pop();
  console.log(stack.size(), ...stack);
})();