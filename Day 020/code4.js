// Get the maximum number from the array
const numbers = [1, 2, 3, 4];
function getMax(array) {
  let maximum = array[0];
  for (let i = maximum; i < array.length; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
}

const max = getMax(numbers);

console.log(max);
