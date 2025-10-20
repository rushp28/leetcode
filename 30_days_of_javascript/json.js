/**
 * @note problem 2727
 *
 * @param {Object|Array} obj
 * @return {boolean}
 */
const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * 2677
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const arr_chunks = [];
  for (let index = 0; index < arr.length; index += size) {
    arr_chunks.push(arr.slice(index, index + size));
  }
  return arr_chunks;
};

/**
 * 2619
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
  return this.length ? this[this.length - 1] : -1;
};