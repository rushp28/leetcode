/**
 * @note problem 2723
 *
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
  const [result1, result2] = await Promise.all([promise1, promise2]);
  return result1 + result2;
};

/**
 * @note problem 2621
 *
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}
