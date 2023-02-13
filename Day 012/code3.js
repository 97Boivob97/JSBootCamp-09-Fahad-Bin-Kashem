/*
Exercise-3(what will be the output and why?)
let num = 100;
while(num < 150) {
console.log(num + 1);
num--;
}
*/

/*
here num is initialized by 100 and the loop will run until num<150 and num is decreasing by 1 after every iteration.
it will display num+1
here num is 100 and it will decreased by 1 after every iteration so the output will be 101,100,99,...and so on
here we can see that after every iteration the output is decreasing so num will never reache 150 and the condition will never get false.
so, infinity loop occurs here.
*/

let num = 100;
while (num < 150) {
  console.log(num + 1);
  num--;
}
