// what are the difference between rest(...) and spread(...) operator.

/*Both spread and rest operators have the same syntax in JavaScript but they perform different functionalities.
 The spread operator in JavaScript expands values in arrays and strings into individual elements whereas,
 the rest operator puts the values of user-specified data into a JavaScript array.
 Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.
 Spread syntax "expands" an array into its elements, 
 while rest syntax collects multiple elements and "condenses" them into a single element.*/

// rest:
const profile = ["Fahad", 25, true, "programmer"];
const [name, ...rest] = profile;
console.log(name);
console.log(rest);
// spread

const prof = {
  firstName: "Fahad",
  lastName: "Bin Kashem",
  title: "Mr",
  fullname() {
    return this.title + " " + this.firstName + " " + this.lastName;
  },
};
const homeProf = {
  address: "Dhaka",
  ...prof,
};
console.log(homeProf);
