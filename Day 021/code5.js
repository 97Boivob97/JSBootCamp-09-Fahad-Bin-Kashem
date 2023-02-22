//you have given a function sum with arr of number as arguments, you have to Sum up those Number and return the result
//you can check validation before summing up the number

function sum(...values) {
  const a = values;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
  }
  return sum;
}
console.log(sum([1, 2, 3, 4]));
