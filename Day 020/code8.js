// count the occurrence of numbers
//result will be number of occurrence

const numbers = [1, 2, 3, 1];
function countOccurrences(arr, value) {
  let count = 0;
  for (let data of arr) {
    if (data === value) {
      count++;
    }
  }
  return count;
}

const count = countOccurrences(numbers, 1);

console.log(count); //2
