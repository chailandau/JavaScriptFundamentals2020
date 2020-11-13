/**
 * Return the length of the longest word in the provided sentence.
 *
 * @param {array} arr
 * @returns {number}
 *
 * @example findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6
 * @example findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8
 */
let findLongestWordLength = (string) => {
  let array = string.split(" ");
  let longestWord = "";
  array.forEach( (word) => {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
    return word;
  });
  return longestWord.length;
};

/**
 * Find the missing letter in the passed letter range and return it
 * @param {string} letters
 * @returns {string} returns the missing letter from the string
 * @example
 *   fearNotLetter("abce") should return "d".
 *   fearNotLetter("abcdefghjklmno") should return "i".
 *   fearNotLetter("stvwx") should return "u".
 *   fearNotLetter("bcdf") should return "e".
 *   fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
 *
 */
function fearNotLetter(string) {

  for (let letter = 0; letter < string.length; letter++) {
    if (string === "abcdefghijklmnopqrstuvwxyz") {
      return undefined;
    } else if (string.charCodeAt(letter) - string.charCodeAt(letter-1) > 1) {
     return String.fromCharCode(string.charCodeAt(letter-1)+1);
   } 
 }
}

module.exports = {
  findLongestWordLength,
  fearNotLetter,
};
