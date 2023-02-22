/* you have given a object with some nested properties and method , 
you have to access the property and method in single statement(using destructuring)
Access city, getAddress from the object and console the output 
Get the correct output form by getAddress function calling .Ex: Dhaka-Bangladesh
*/

const obj = {
  name: "samim",
  email: "samimfazlu091@gmail.com",
  address: {
    location: {
      country: {
        name: "Bangladesh",
        city: "Dhaka",
      },
    },
    getAddress() {
      return this.country.city + "-" + this.country.name;
    },
  },
};
const {
  address: {
    location: {
      country: { city, name },
    },
  },
} = obj;
const {
  address: {
    getAddress: {},
  },
} = obj;
const result = `${city} -  ${name}`;
console.log(result);
