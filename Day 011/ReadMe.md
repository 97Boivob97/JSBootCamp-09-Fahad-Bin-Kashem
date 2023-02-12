# Loop
 ## Why loop is important?
> -> loop is important for avoid repeating.
> loop are majorly two types:
> (1) **While** (2) **For**
 ## While Loop:
> how to write: while(condition){
> statements;
> }
> ## Example:
> ```js
> 
> let count = 0
> while(count<7){
> const real_Count = count+1
> console.log(`I love Bangladesh ${real_Count<2?'time': 'times'}`)
> }
> //output: 
> I love Bangladesh 1 time
> I love Bangladesh 2 times
> I love Bangladesh 3 times
> I love Bangladesh 4 times
> I love Bangladesh 5 times
> I love Bangladesh 6 times
> I love Bangladesh 7 times
> //
 ## What is Infinite Loop:
> When the condition is never false. infinite loop occurs.
> ## Example:
> ```js
> let count = 0;
> while(count<7){
> console.log(count)
> count--
> }
## For Loop:
> how to write: for(init;condition;step){
> statement
> }
> ## Examples:
> ```js
> for(let count = 0;count<7;count++){
> console.log(count);
> }
> // output: 0 1 2 3 4 5 6 //
 ## Use of break and continue
> **Continue** is use for to avoid a step in the loop and **break** is use for stop the loop
> ## Exampel:
> ```js
> for(int i = 0; i<5; i++){
>  if(i===3){
> continue
> }
> console.log(i)
> }
> // output : 0 1 2 4 
> here you can see that 3 has been avoided.//
> for(int j = 0;j<5;j++){
> if(j= =3){
> break
> }
> console.log(j)
> }
> // output : 0 1 2 
> here you can see that when j is 3 the loop is over.
> //


