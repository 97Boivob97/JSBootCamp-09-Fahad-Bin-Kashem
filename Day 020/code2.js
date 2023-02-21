//Must result a array including all elements in the defined range

function arrayFromRange(num1, num2) {
  let i;
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      console.log(i);
    }
  } else {
    for (i = num2; i <= num1; i++) {
      console.log(i);
    }
  }
}
const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne);
const rangeTwo = arrayFromRange(10, 5);
console.log(rangeTwo);
