// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  //   const strReversed = str.split("").reduce((rev, char) => char + rev, "");
  //   return str === strReversed;
  console.log(str);
  return str.split("").every((char, i) => {
    console.log("char:", char);
    console.log("str-1:", str[str.length - i - 1]);
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
