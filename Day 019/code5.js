//Generate a Random Number between two values
//Number must be a full Number (not fraction)
//endNum must be exclusive

function generateRandomNum(startNum, endNum) {
  return Math.floor(Math.random() * (endNum - startNum) + startNum);
}

console.log(generateRandomNum(5, 10));
