/*
# Exercise-2(what will be the output and explain)
let num = 1
while(num <= 20) {
if(num % 4 === 0){
console.log(num);
}
num++;
}
*/

/*
explanation:
the output will be : 4,8,12,16,20
here the variable num is  initialzied with 1 and the loop will run until num <=20 and num will increased by 1 after every iteration.
if(num % 4 == 0) means this condition will be satisfy when num is divisible by 4 (remainder = 0).
from 1-20 4,8,12,16 and 20 are divisible by 4 so 4,8,12,16,20 will be printed.
then num++ so num = 21 now which is not satisfy the condition num<=20 so the loop will break.

*/

let num = 1;
while (num <= 20) {
  if (num % 4 === 0) {
    console.log(num);
  }
  num++;
}
