/*
Exercise-4(what will be the output? it May require if condition inside loop)
Print out all even numbers between 1 and 100. Write two solutions: one with a while loop and
one with a for loop.
*/

// with while loop

let number = 1;
while (number <= 100) {
  if (number % 2 === 0) {
    console.log(number);
  }
  number++;
}
// for loop
for (let num = 1; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
  number++;
}
