//Write a function calculateAverage and receives arr as arguments, you have to calculate the average and return the grade
/*Ex:
<60-F
60-69-D
70-79-c
80-89-B
>90-A*/
function calculateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let avg = sum / arr.length;
  if (avg < 60) {
    return "F";
  } else if (avg >= 60 && avg <= 69) {
    return "D";
  } else if (avg > 69 && avg <= 79) {
    return "C";
  } else if (avg > 79 && avg <= 89) {
    return "B";
  } else if (avg > 90) {
    return "A";
  }
}

console.log(calculateAverage([60, 70, 90, 50, 55]));
console.log(calculateAverage([83, 70, 90, 50, 55]));
