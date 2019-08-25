/**
 * Linked list node data structure
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Stack implementation using linked list.
 */
class StackLL {
  constructor() {
    this.first = null;
    this.n = 0;
  }

  isEmpty() {
    return this.first === null;
  }
  
  size() {
    return this.n;
  }

  push(item) {
    const oldFirst = this.first;
    this.first = new Node(item);
    this.first.next = oldFirst;
    this.n++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow');
    }

    const item = this.first;
    this.first = this.first.next;
    item.next = null;
    this.n--;
    return item;
  }

  peek() {
    return this.first;
  }

  [Symbol.iterator]() {
    let current = this.first;

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
  const stack = new StackLL();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);
  stack.push(5);
  console.log('stack => ', ...stack);
  stack.pop();
  stack.pop();
  console.log('stack => ', ...stack);
})();