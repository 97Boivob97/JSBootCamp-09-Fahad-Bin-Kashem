let people = ["samim", "Anis", "Adnan", "Karim"];
// Using a loop, iterate through this array and console.log all of the people one by one.
for (let value of people) {
  console.log(value);
}
// Write the command to remove "samim" from the array.
people.shift();
console.log(people);
// Write the command to remove "Karim" from the array.
people.pop();
console.log(people);
// Write the command to add "Ifat" to the front of the array.
people.unshift("Ifat");
console.log(people);
// Write the command to add your name to the end of the array.
people.push("Fahad");
console.log(people);
//Using a loop, iterate through this array and after console.logging "Anis", exit from the loop.
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Adnan") {
    break;
  }
  console.log(people[i]);
}
// Write the command to make a copy of the array using slice. The copy should NOT include "Anis" or "Ifat".
console.log(people.slice(1, 4));
//Write the command that gi(ves the indexOf where "Anis" is located.
console.log(people.indexOf("Anis"));
// Write the command that gives the indexOf where "Foo" is located
console.log(people.indexOf("Foo"));
/* Redefine the people variable with the value you started with. 
Using the splice command, remove "Adnan" from the array and add "Elizabeth" and "Bob".
 Your array 1.should look like this when you are done ["samim", "Anis", "Elizabeth", "Bob", "Karim"].
 */
let peopleNew = ["samim", "Anis", "Adnan", "Karim"];
console.log(peopleNew.splice(2, 1, "Elizabeth", "Bob"));
console.log(peopleNew);
// Create a new variable called withMiraz and set it equal to the people array 1.concatenated with the string of "Miraz".
let withMiraz = ["samim", "Anis", "Adnan", "Karim"];
withMiraz = withMiraz.concat("Miraz");
console.log(withMiraz);
