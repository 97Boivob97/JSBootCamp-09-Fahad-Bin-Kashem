// Sum up all the numbers in between passed arguments
function showNumber(num1, num2) {
  let i,
    sum = 0;
  if (num1 < num2) {
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
    //console.log(sum);
    return sum;
  } else {
    for (i = num2; i <= num1; i++) {
      sum += i;
    }
    return sum;
  }
}
console.log(showNumber(2, 4)); //9
console.log(showNumber(5, 2)); //14
