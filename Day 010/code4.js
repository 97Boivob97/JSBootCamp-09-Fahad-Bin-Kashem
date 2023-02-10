/*
Q4: 
let var1;
const var2 = """";
const var3 = 1;
const secretmessage = "secret";
if(var1){
    console.log("first");
}
else if(var1 || var2){
    console.log("second");
}
else if(var1 || var3){
    console.log("third");
}
else{
    console.log("fourth");
}
What should the above code console.log? Why? 
What is the value of var1 when it is initialized? 
Is the value of var1 a "truthy" value? Why? 
Is the value of var2 a  "truthy" value? Why? 
Is the value of var3 a "truthy" value? Why?
*/
// solution:
let var1;
const var2 = "";
const var3 = 1;
const secretmessage = "secret";
if (var1) {
  console.log("first");
} else if (var1 || var2) {
  console.log("second");
} else if (var1 || var3) {
  console.log("third");
} else {
  console.log("fourth");
}
/*
What should the above code console.log? Why? 
Ans : Avobe code console.log = third.Because var1 is false and var3 is true.
We know that in or operation if there is one statement is true, the outpute will be true.
What is the value of var1 when it is initialized? 
Ans: The value of var1 is undefined when it is initialized.
Is the value of var1 a "truthy" value? Why? 
Ans: No, the value of var1 is falsy value because var1 is undefined.
Is the value of var2 a  "truthy" value? Why? 
Ans: No, the value of var2 is falsy value because var2 is initialized with quotetin.
Is the value of var3 a "truthy" value? Why?
,Ans : Yes, the value of var3 is a truthy value because,
the value of var3 is not under the falsy value (undefined,!,NaN,"",0,null,false)
Thus 1 is a truthy value.

*/
