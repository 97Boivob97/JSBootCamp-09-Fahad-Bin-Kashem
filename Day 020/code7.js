// count the truthy value and return
const array = [0, null, undefined, "", 2, 3];
function countTruthy(arr) {
  let count = 0;

  for (let item of arr) {
    if (item) {
      count++;
    }
  }

  return count;
}

console.log(countTruthy(array)); //2
