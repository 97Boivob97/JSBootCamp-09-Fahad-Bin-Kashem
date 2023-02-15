//Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str) {
  return String.fromCharCode(str.charCodeAt(0) + 1);
}
const correctWord = (str) => {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    word += myFunction(str[i]);
  }
  return word;
};

console.log(correctWord("bnchmf"));
console.log(correctWord("bgddrd"));
console.log(correctWord("sdrshmf"));
