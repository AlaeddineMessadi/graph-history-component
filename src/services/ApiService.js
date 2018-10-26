/**
 * The api result provide by the server ( data provide from the exercise)
 */
export const HISTORY = {
  history: [
    {
      "score": 4583,
      "date": 1538410833
    },
    {
      "score": 2300,
      "date": 1538410833
    },
    {
      "score": 749,
      "date": 1538410833
    },
    {
      "score": 1406,
      "date": 1539172190
    },
    {
      "score": 8381,
      "date": 1539172190
    }
  ]
};

/**
 * Simulate an api get request
 * get a response after 5 seconds (example)
 */
export const apiGet = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(HISTORY), 5000);
});
