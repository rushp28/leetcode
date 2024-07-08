/**
 * @note problem 2629
 *
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => (x) => {
  functions
    .slice()
    .reverse()
    .forEach((elementFunction) => {
      x = elementFunction(x);
    });
  return x;
};

/**
 * @note problem 2703
 *
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = (...args) => {
  return args.length;
};

/**
 * @note problem 2666
 *
 * @param {Function} fn
 * @return {Function}
 */
const once = (fn) => {
  let calledOnce = false;
  return (...args) => {
    if (!calledOnce) {
      calledOnce = true;
      return fn(...args);
    }
  };
};

/**
 * @note problem 2623
 *
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = args.join("-");
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
