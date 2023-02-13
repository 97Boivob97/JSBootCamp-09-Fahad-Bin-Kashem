# Exercise-1 (what will be the output and explain)
>  ```js
> let  num = 1; 
> while (num <= 10) {
> console.log(num);
> num += 2;
> }
 # Explanation:
 the output will be 1,3,5,7,9. the loop will start num = 1 and it will run upto num <=10 in the while loop the condition is satisfied when num=1 then the output we get is 1 then num+=2 now num = 3 again the loop will run and the condition will be satisfiy it will give us output respecrivly 1 3 5 7 9 because num is increasing by 2 after loop runs one time. now num + = 2 = 9+2==11, which is does not satisfy the condtion becuase 11 is not less or equal 10. so the loop will break now.
 # Exercise-2(what will be the output and explain)
>  ```js
> let  num = 1;
> while (num <= 20) {
> if (num % 4 === 0) {
> console.log(num);
> }
> num++;
> }
# Explanation:
 the output will be : 4,8,12,16,20 here the variable num is initialzied with 1 and the loop will run until num <=20 and num will increased by 1 after every iteration. if(num % 4 == 0) means this condition will be satisfy when num is divisible by 4 (remainder = 0). from 1-20 4,8,12,16 and 20 are divisible by 4 so 4,8,12,16,20 will be printed. then num++ so num = 21 now which is not satisfy the condition num<=20 so the loop will break.
# Exercise-3(what will be the output and why?)
>```js
> let  num = 100;
> while(num < 150) {
> console.log(num + 1);
> num--;
> }
# Explanation:
 here num is initialized by 100 and the loop will run until num<150 and num is decreasing by 1 after every iteration. it will display num+1 here num is 100 and it will decreased by 1 after every iteration so the output will be 101,100,99,...and so on here we can see that after every iteration the output is decreasing so num will never reache 150 and the condition will never get false. so, infinity loop occurs here.
# Exercise-6(what will be the output and Let's explain) . Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”. 
> ```js
> function fizzBuzz(num){
> //code 
> }
> fizzBuzz(100)
> function  fizzBuzz(num) {
> for (let  i = 1; i <= num; i++) {
> if (i%3===0&&i%5==0) {
>console.log("FizzBuzz");
>} else  if (i % 3 === 0) {
>console.log("Fizz");
>} else  if (i % 5 === 0) {
>console.log("Buzz");
>} else {
>console.log(i);
>}
>}
>}
>fizzBuzz(100);
# Explanation:
In this function there is a loop which will repeat 100 times. The loop will start from 1 and run untill 100 and print every number from 1 to 10. But it will print Fizz for multiples of three. It means when the number is divisible by 3 it will print Fizz. When the number is divisible by 5 it will print Buzz and when the number is divisible by both 3 and 5 it will print FizzBuzz.

