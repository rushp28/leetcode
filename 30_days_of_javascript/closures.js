/**
 * @note problem 2667
 * 
 * @return {Function}
 */
const createHelloWorld = () => () => {
    return "Hello World";
};

/**
 * @note problem 2620
 * 
 * @param {number} n
 * @return {Function}
 */
const createCounterP2620 = (n) => () => {
    return n++;
};

/**
 * @note problem 2704
 * 
 * @param {string} val
 * @return {Object}
 */
const expect = val => ({
    toBe: expectedVal => {
        if (val === expectedVal) return true;
        throw "Not Equal"; 
    },
    notToBe: expectedVal => {
        if (val !== expectedVal) return true;
        throw "Equal";
    }
});

/**
 * @note problem 2665
 * 
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = init => {
  let val = init;
  return {
      increment: () => ++val,
      decrement: () => --val,
      reset: () => (val = init)
  };
};