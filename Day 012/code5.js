/*
Exercise-5(Run loop and add $ in each repetition)-4
function repeat(num){
//code
}
repeat(3)
<!--
$
$$
$$$ -->;
repeat(5)
<!--
$
$$
$$$
$$$$
$$$$$ -->;
*/

function repeat(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      console.log("$\n");
    }
  }
}
repeat(3);

repeat(5);
