/**
 * @note problem 2635
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) =>
  arr.reduce((mapped_array, element, index) => {
    mapped_array.push(fn(element, index));
    return mapped_array;
  }, []);

/**
 * @note problem 2634
 *
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) =>
  arr.reduce((filtered_array, element, index) => {
    if (fn(element, index)) filtered_array.push(element);
    return filtered_array;
  }, []);

/**
 * @note problem 2626
 *
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = (nums, fn, init) => {
  nums.forEach((element) => {
    init = fn(init, element);
  });
  return init;
};
