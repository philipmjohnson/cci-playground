/**
 * CCI 1.3 Urlify
 * Replace all spaces in a string with %20.
 * Pass in a string with space at the end and an int indicating 'true' length of string.
 * Example: urlify('Mr John Smith    ', 13) => 'Mr%20John%20Smith'
 */

/* eslint no-param-reassign: 0 */

export function urlify(str, trueLength) {
  const strArray = str.split('');
  let endIndex = str.length - 1;
  for (let i = trueLength - 1; i > 0; i--) {
    if (strArray[i] !== ' ') {
      strArray[endIndex--] = strArray[i];
    } else {
      strArray[endIndex--] = '0';
      strArray[endIndex--] = '2';
      strArray[endIndex--] = '%';
    }
  }
  return strArray.join('');
}
