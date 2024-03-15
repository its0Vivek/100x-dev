/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const palind = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let outputP = true;
  for (let i = 0; i < palind.length / 2; i++) {
    if (palind[i] !== palind[palind.length - 1 - i]) {
      outputP = false;
      break;
    }
  }
  return outputP;
}

module.exports = isPalindrome;
