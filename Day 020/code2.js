//Must result a array including all elements in the defined range

function arrayFromRange(num1, num2) {
  let i;
  let arr = [];
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      arr.push(i);
    }
    return arr;
  } else {
    for (i = num2; i <= num1; i++) {
      arr.push(i);
    }
    return arr;
  }
}
const rangeOne = arrayFromRange(1, 10);
console.log(rangeOne); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const rangeTwo = arrayFromRange(10, 5);
console.log(rangeTwo); // [ 5, 6, 7, 8, 9, 10]
