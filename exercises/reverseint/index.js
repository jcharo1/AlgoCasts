// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const str = n.toString().split("").reverse();
  if (Math.sign(n) === -1) {
    return parseInt("-" + str.slice(0, str.length).join(""));
  }

  return parseInt(str.join(""));
}

module.exports = reverseInt;
