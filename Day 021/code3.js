//Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

function sumEvenArgs() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sum = sum + arguments[i];
    }
  }
  return sum;
}
console.log(sumEvenArgs(1, 2, 3, 4));
console.log(sumEvenArgs(1, 2, 6));
console.log(sumEvenArgs(1, 2));
