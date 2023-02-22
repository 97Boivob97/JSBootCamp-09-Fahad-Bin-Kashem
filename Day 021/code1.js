/* Write a function called placeInMiddle which accepts two parameters,
 an array and another array. This function should return
the first array with all of the values in the second array placed in the middle of the first array.*/

function placeInMiddle(arr, vals) {
  arr = [
    ...arr.slice(0, arr.length / 2),
    ...vals,
    ...arr.slice(arr.length / 2, arr.length),
  ];
  return arr;
}
console.log(placeInMiddle([1, 2, 6, 7], [3, 4, 5])); // [1,2,3,4,5,6,7]
console.log(placeInMiddle([1], [3, 4, 5])); // [1,3,4,5]
console.log(placeInMiddle([1, 6], [2, 3, 4, 5])); // // [1,2,3,4,5,6]
console.log(placeInMiddle([], [2, 3, 4, 5])); // [2,3,4,5]
