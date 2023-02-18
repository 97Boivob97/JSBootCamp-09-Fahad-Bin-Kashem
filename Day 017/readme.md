# What is the value of the keyword this in the following example
>  ```js
>  const data = this;
>console.log(data);
The value of the keyword **this**  = {} it means empty value.
>```js
# What does this function output? Why?
>```js
>function logThis(){
>return this;
>}
>logThis();
We will not get any specific output as it is an window object.
 # What does this function output? Why?
> ```js
>const  instructor = {
>firstName:  'Adnan',
>sayHi(){
>console.log("Hello! " + this.firstName);
>}
>}
>instructor.sayHi()
The function output is : Hello! Adnan.
Inside the console.log the the term is  **"Hello! " + this.firstName** So it will print Hello! first then this.firstName, here this referce to the object which is instructor so it meanse instructor.firstname which is Adnan, so finally  The function output is  Hello! Adnan.
#  What does this function output? Why?
> ```js
>const instructor = {
>firstName: 'Adnan',
>info: {
>catOwner: true,
>boatOwner: false
>},
>displayInfo: function(){
>console.log("Cat owner? "+ '-' + this.catOwner);
>}
>}
>instructor.displayInfo() // ?
The function output will be Cat owner? -undefined. this.catOwner here this indicates the object which is instructor then this.catOwner means instructor.catOwner so the function is finding exacly a key which is catOwner but there is no key as catOwner that is why it gives the output undefined.

# Bind this to get correct output ex: "Cat owner?-true "*/
>```js
>const instructor = {
>firstName: 'Adnan',
>info: {
>catOwner: true,
>boatOwner: false
>},
>displayInfo: function(){
>console.log("Cat owner? "+ '-' + this.info.catOwner);
>}
>}
>instructor.displayInfo() 
# What does this function output? Why? 
>```js
>const  instructor = {
>firstName:  "Adnan",
>info: {
>catOwner:  true,
>boatOwner:  false,
>displayLocation:  function () {
>return  `Residing ${this.data.location}`;
>},
>data: {
>location:  "Dhaka",
>},
>},
>};
>instructor.info.displayLocation();
The output is Residing Dhaka. **`Residing ${this.data.location}**,
after printing Residing here this indicates the object which is instructor, then this.data it will check if there is a key named data
then this.data.location means is there any key named location inside data so the function has found data.location which is equal to Dhaka. Thus, after printing Residing it will print Dhaka.
So, The output is Residing Dhaka.

 # What does this function output? Why?
>```js
>const  instructor = {
>firstName:  "Adnan",
>info: {
>catOwner:  true,
>boatOwner:  false,
>displayLocation:  function () {
>return  `Residing ${this.data.location}`;
>},
>data: {
>location:  "Dhaka",
>logLocation: this.displayLocation
>},
>},
>};
>instructor.info.data.logLocation()
> // Why might we be getting an error here?
We will not get any output  because after finding data.loglocation , loglocation = this.displayLocation.
We know, this will refer to the object which is data here but there is no key name as displaylocation. On the other hand loglocation is not a function so we will get an error.
 # What are the ways to deep or shallow copy for array and object
The way for deep copy is JSON.stringify and the ways for shallow copy is assign and spread operator.
# What are the mutable and immutable data in Javascript?
Mutable data are those data which we can modify on the other hand there are some data we can not modify they are immutable data. Complex data types are mutable and primitive data types are immutable
# Explain pass by value vs pass by reference with example
> ```js
> // pass by value
>const  a1 = 10;
>function  f1(num) {
>let  a2 = num;
>a2 = 20;
>return  a2;
>}
>console.log(f1(a1)); //20
>console.log(a1)  //10
here a1 = 10 then a1 has been passed in the function named f1 which has a parameter num which will take the value of a1 so num = 10. Now a2 = num so a2 = 10 but in the next line a2= 20 so console.log(f1(a1)) will give us 20 but console.log(a1) will give us 10. So here the value of a1  has been copied but not modify.
> ```js
> // pass by reference
>const  ob = {
>age :  30
>}
>function  f2(num){
>let  ob1 = num
>ob1.age = 40
>return  ob1
>}
>console.log(f2(ob)) //40 
>console.log(ob) //40
In the case of pass by reference the value does not copied, the object does. Age is initialized by 30 ,  function  f2(num) this function takes the value of age where num = 30 . Now ob1 = num so ob1 = 30. Then  ob1.age = 40, here the object or key has been copied which is age now the value of age has been changed 40 from 30.

