const Heap = require('./Heap');

/**
 * Binary Max Heap
 */
class MinHeap extends Heap {
  /**
   * @param {Array.<*>} a 
   * @param {number} i 
   * @param {number} j 
   */
  compare(a, i, j) {
    return this.comparator.greater(this.a, i, j);
  }

  /**
   * @returns {number}
   * @throws {Error}
   */
  min() {
    return this.root();
  }

  /**
   * Remove and return the min element in heap.
   * @returns {number}
   */
  delMin() {
    return this.delRoot();
  }

  // Iterates over items in heap in ascending order 
  [Symbol.iterator]() {
    // create a copy of heap
    const copy = new MinHeap();

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
          value: copy.delMin(),
          done: false,
        };
      }
    }
  }
}

(function run() {
  const minHeap = new MinHeap();
  
  minHeap.insert(2);
  minHeap.insert(1);
  minHeap.insert(3);

  console.log('minSoFar', minHeap.min());
  console.log('elements in ascending order', ...minHeap);

  minHeap.insert(7);
  minHeap.insert(9);


  console.log('remove min',   minHeap.delMin());
  console.log('minSoFar', minHeap.min());
  console.log('elements in ascending order', ...minHeap);

  minHeap.insert(15);
  minHeap.insert(12);
  minHeap.insert(6);

  console.log('minSoFar', minHeap.min());
  console.log('elements on minHeap in ascending order', ...minHeap);
})();