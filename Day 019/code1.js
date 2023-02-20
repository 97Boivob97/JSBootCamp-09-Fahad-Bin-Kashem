// Write a function that takes two date instances as arguments
// It should return true if the dates are equal
// It should return false otherwise
function myFunction(a, b) {
  if (a == b) {
    return true;
  } else {
    return false;
  }
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:00"))
);
console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2001/01/01 08:00:00"), new Date("2000/01/01 08:00:00"))
);
