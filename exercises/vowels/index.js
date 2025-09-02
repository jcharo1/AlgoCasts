// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let output = 0;

  for (let x of str.toLowerCase().split("")) {
    console.log("x:", x);
    console.log("isVowel(x):", isVowel(x));
    console.log("output:", output);
    output += isVowel(x);
  }

  function isVowel(letter) {
    return letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
      ? 1
      : 0;
  }
  return output;
}

module.exports = vowels;
