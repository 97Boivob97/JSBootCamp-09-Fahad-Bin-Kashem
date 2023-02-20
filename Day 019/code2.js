// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
function myFunction(a, b) {
  if (a > b) {
    time = a.getTime() - b.getTime();
    days = time / (1000 * 3600 * 24);
    return days;
  } else {
    time = b.getTime() - a.getTime();
    days = time / (1000 * 3600 * 24);
    return days;
  }
}
console.log(myFunction(new Date("2020-06-11"), new Date("2020-06-01")));
console.log(myFunction(new Date("2000-01-01"), new Date("2020-06-01")));
