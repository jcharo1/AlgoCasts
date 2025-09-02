// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   return str.split("").reverse().join("");\\
  //   let reversed = "";
  //   for (let x of str) {
  //     reversed = x + reversed;
  //     console.log(reversed);
  //   }
  //   return reversed;
  debugger;

  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}
console.log(reverse("abce"));
module.exports = reverse;
