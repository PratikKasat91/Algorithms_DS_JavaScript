/* eslint-disable no-param-reassign */

/**
 * @param {Array<*>} a
 * @param {number} i
 * @param {number} j
 */
function exch(a, i, j) {
  const temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

module.exports = exch;
