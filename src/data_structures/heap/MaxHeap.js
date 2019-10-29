const Heap = require('./Heap');

/**
 * Binary Max Heap
 */
class MaxHeap extends Heap {
  /**
   * @param {Array.<*>} a 
   * @param {number} i 
   * @param {number} j 
   */
  compare(a, i, j) {
    return this.comparator.less(this.a, i, j);
  }

  /**
   * @returns {number}
   * @throws {Error}
   */
  max() {
    return this.root();
  }

  /**
   * Remove and return the max element in heap.
   * @returns {number}
   */
  delMax() {
    return this.delRoot();
  }

  // Iterates over items in heap in descending order 
  [Symbol.iterator]() {
    // create a copy of heap
    const copy = new MaxHeap();

    // takes linear time since the elements are already heap ordered
    for (let i = 1; i <= this.n; i += 1) {
      copy.insert(this.a[i]);
    }

    return {
      next() {
        if (copy.isEmpty()) {
          return {
            done: true,
          };
        }

        return {
          value: copy.delMax(),
          done: false,
        };
      }
    }
  }
}

(function run() {
  const maxHeap = new MaxHeap();
  
  maxHeap.insert(2);
  maxHeap.insert(1);
  maxHeap.insert(3);

  console.log('maxSoFar', maxHeap.max());
  console.log('elements in descending order', ...maxHeap);

  maxHeap.insert(7);
  maxHeap.insert(9);


  console.log('remove max',   maxHeap.delMax());
  console.log('maxSoFar', maxHeap.max());
  console.log('elements in descending order', ...maxHeap);

  maxHeap.insert(6);
  maxHeap.insert(15);
  maxHeap.insert(12);

  console.log('maxSoFar', maxHeap.max());
  console.log('elements on maxHeap in descending order', ...maxHeap);
})();