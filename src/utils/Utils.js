// Utils.js : useful Utils 

/**
 * Returns the maximum value in an array of objects
 * the default key is specified as score
 * 
 * @param {Array} arr 
 * @param {String} key 
 */
export const maxObjArray = (arr, key = 'score') => (
  Math.max.apply(
    Math,
    arr.map(session => (session['score']))
  )
)

/**
 * Compare two dates (Timestamp) 
 * date1 earlier or older than date2
 * 
 * @param {Int} date1 
 * @param {Int} date2 
 */
export const isEarlyThan = (date1, date2) => (
  new Date(date1) > new Date(date2)
)