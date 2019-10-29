class Comparator {
  /**
   * @param {function(a: *, b: *): boolean} [compareFn] compare values a and b
   */
  constructor(compareFn) {
    this.compare = compareFn || Comparator.defaultCompareFn;
  }

  /**
   * Returns 0 if a and b are equal, -1 if a < b else 1.
   * @param {string | number} a
   * @param {string | number} b
   * @returns {number}
   */
  static defaultCompareFn(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  /**
   * @param {Array<*>} a
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  equal(a, i, j) {
    return this.compare(a[i], a[j]) === 0;
  }

  /**
   * @param {Array.<*>} a
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  less(a, i, j) {
    return this.compare(a[i], a[j]) < 0;
  }

  /**
   * @param {Array<*>} a
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  greater(a, i, j) {
    return this.compare(a[i], a[j]) > 0;
  }

  /**
   * @param {Array<*>} a
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  lessThanOrEqual(a, i, j) {
    return this.less(a, i, j) || this.equal(a, i, j);
  }

  /**
   * @param {Array<*>} a
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  greaterThanOrEqual(a, i, j) {
    return this.greater(a, i, j) || this.equal(a, i, j);
  }
}

module.exports = Comparator;
