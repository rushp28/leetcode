/**
 * @note problem 2635
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = (arr, fn) => arr.reduce((result, element, index) => {
    result.push(fn(element, index));
    return result;
}, []);


/**
 * @note problem 2634
 * 
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = (arr, fn) => arr.reduce((result, element, index) => {
    if (fn(element, index)) result.push(element);
    return result;
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