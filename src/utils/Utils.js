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