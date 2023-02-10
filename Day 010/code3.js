/*
Q3: Use both if and switch statement (6)
====================================================
age: less then 10
output: stay home under your mom supervision
age: more and equal then 10 and less then 15
output: Try to gain knowledge from outside of home
age: more then and equal to 15 and less than 18
output: prepare to cast vote
age: more or equal then 18
output: cast you vote
age: unknown
output: You are out of range
*/
// solution:
// using if statement
age = 18;
if (age < 10) {
  console.log("stay home under your mom supervision");
} else if (age >= 10 && age < 15) {
  console.log("Try to gain knowledge from outside of home");
} else if (age >= 15 && age < 18) {
  console.log("prepare to cast vote");
} else if (age >= 18) {
  console.log("cast you vote");
} else {
  console.log("You are out of range");
}
// using switch statement
switch (age) {
  case 9:
    console.log("stay home under your mom supervision");
    break;
  case 12:
    console.log("Try to gain knowledge from outside of home");
    break;
  case 16:
    console.log("prepare to cast vote");
    break;
  case 18:
    console.log("cast you vote");
    break;
  default:
    console.log("You are out of range");
}
