const { Comparator, exch } = require('../../utils');

/**
 * A generic parent class for binary heap implementation.
 */
class Heap {
  /**
   * @constructs Heap
   */
  constructor() {
    if (new.target === Heap) {
      throw new TypeError(
        'Cannot construct generic Heap. Call MinHeap or MaxHeap constructor'
      );
    }

    this.comparator = new Comparator();
    this.a = [];
    this.n = 0;
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return this.n === 0;
  }

  /**
   * @returns {number}
   */
  size() {
    return this.n;
  }

  /**
   * @returns {number}
   * @throws {Error}
   */
  root() {
    if (this.isEmpty()) {
      throw new Error('Heap underflow');
    }
    return this.a[1];
  }

  /**
   * @param {*} item
   */
  insert(item) {
    this.n += 1; // start storing elements from first index
    this.a[this.n] = item;
    this.swim(this.n);
  }

  /**
   * Promotion in heap
   * @param {number} k
   */
  swim(k) {
    while (k > 1 && this.compare(this.a, Math.floor(k / 2), k)) {
      exch(this.a, Math.floor(k / 2), k);
      k = Math.floor(k / 2); // eslint-disable-line no-param-reassign
    }
  }

  /**
   * Demotion in heap
   * @param {number} k
   */
  sink(k) {
    while (2 * k <= this.n) {
      let j = 2 * k;

      if (j < this.n && this.compare(this.a, j, j + 1)) {
        j += 1;
      }

      if (!this.compare(this.a, k, j)) {
        break;
      }

      exch(this.a, k, j);
      k = j; // eslint-disable-line no-param-reassign
    }
  }

  /**
   * Remove and return the root element in heap.
   * @returns {number}
   */
  delRoot() {
    if (this.isEmpty()) {
      throw new Error('Heap underflow');
    }

    const element = this.a[1];

    exch(this.a, 1, this.n); // exch root with last element
    this.n -= 1;
    this.sink(1);

    return element;
  }

  /**
   * @param {Array.<*>} a
   * @param {number} i
   * @param {number} j
   * @throws {Error}
   */
  // eslint-disable-next-line class-methods-use-this
  compare(a, i, j) {
    throw new Error(
      `Comparison for values: ${a[i]} and ${a[j]} must be implemented in the Child Class!`
    );
  }
}

module.exports = Heap;
