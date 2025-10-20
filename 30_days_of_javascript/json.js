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
var chunk = function (arr, size){
  let array_chunks = [];

  while (arr.length > 0) {
    array_chunks.push(arr.splice(0, size));
  }

  return array_chunks;
};