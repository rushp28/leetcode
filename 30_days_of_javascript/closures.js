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
const expect = (val) => ({
  toBe: (expectedValue) => {
    if (val === expectedValue) return true;
    throw "Not Equal";
  },
  notToBe: (expectedValue) => {
    if (val !== expectedValue) return true;
    throw "Equal";
  },
});

/**
 * @note problem 2665
 *
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};
