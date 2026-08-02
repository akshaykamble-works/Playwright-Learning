/*
Object in JavaScript is a non-primitive data type that represents a collection of related data and functionality.
Objects are used to store key-value pairs, where keys are strings (or Symbols) and values can be any data type including other objects.
Example:
let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
*/

let details={
    name:"Akshay",
    age:20,
    contact: 1234567890,
    address:"Latur",
    info:function(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        console.log("Contact: "+this.contact);
        console.log("Address: "+this.address);
        console.log("Gender: "+this.gender);
        console.log("Info: "+this.info);
    }
   
};
console.log(details);
console.log(details.name);// accessing name property of details object
// manipulating object properties
details.age=21; // updating age property
console.log(details.age);

details.contact=9876543210; // updating contact property
console.log(details.contact);

details.gender="Male"; // adding new property
console.log(details.gender);