//Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b) {
  let array = a.split("");
  for (let value = array.length - 3; value >= 1; value = value - 3) {
    array.splice(value, 0, b);
  }
  return array.join("");
}
console.log(myFunction("1234567", "."));
console.log(myFunction("abcde", "$"));
console.log(myFunction("zxyzxyzxyzxyzxyz", "w"));
