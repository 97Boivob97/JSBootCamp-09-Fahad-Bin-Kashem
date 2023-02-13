/*
Exercise-1(what will be the output and explain)
let num = 1;
while(num<= 10) {
console.log(num);
num += 2;
}
*/

/*
explanation:
the output will be 1,3,5,7,9
the loop will start num = 1 and it will run upto num <=10
in the while loop the condition is satisfied when num=1 then the output we get is 1
then num+=2 now num = 3
again the loop will run and the condition will be satisfiy it will give us output respecrivly 1 3 5 7 9 because
num is increasing by 2 after loop runs one time.
now num + = 2 = 9+2==11, which is does not satisfy the condtion becuase 11 is not less or equal 10.
so the loop will break now.
*/
let num = 1;
while (num <= 10) {
  console.log(num);
  num += 2;
}
