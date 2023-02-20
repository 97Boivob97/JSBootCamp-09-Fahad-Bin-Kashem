// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
function myFunction(a, b) {
  let difTime = Math.abs(a.valueOf() - b.valueOf());
  let days = difTime / (24 * 60 * 60 * 1000);
  let hours = (days % 1) * 24;
  let minutes = (hours % 1) * 60;
  let seconds = (minutes % 1) * 60;
  days = Math.floor(days);
  hours = Math.floor(hours);
  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  return (
    "{ " +
    "hrs: " +
    hours +
    ", " +
    "min: " +
    minutes +
    ", " +
    "sec: " +
    seconds +
    " }"
  );
}

console.log(
  myFunction(new Date("2000/01/01 08:00:00"), new Date("2000/01/01 08:45:10"))
);
console.log(
  myFunction(new Date("2000/01/01 09:50:23"), new Date("2000/01/01 08:00:00"))
);
console.log(
  myFunction(new Date("2000/01/01 11:04:12"), new Date("2000/01/01 08:00:00"))
);
