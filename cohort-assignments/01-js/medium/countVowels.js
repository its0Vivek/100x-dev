/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let counts = 0;
  let Strings = str.toLowerCase().split("")
  Strings.forEach(letter => {
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
      counts++
  });
  return counts

}

module.exports = countVowels;