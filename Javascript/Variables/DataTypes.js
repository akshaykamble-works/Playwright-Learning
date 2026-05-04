/*
Datatype in javascript are used to store and manipulate data. 
There are several types of data in javascript, including:

1. String: Used to store text data.
2. Number: Used to store numeric data.
3. Boolean: Used to store true or false values.
4. Undefined: Used to store undefined values.
5. Null: Used to store null values.
6. Object: Used to store collections of data.
7. Array: Used to store multiple values in a single variable.
*/
//Declaring a string variable & string is mentioned in double quote like "", '' and blaite ~ ~
let name = 'Akshay';
console.log("Name value is:",name); // Output: Akshay

//Declaring a number variable
let age = 30;
console.log("Age value is:",age); // Output: 30

let isEmployed = true;
console.log("Is Employed value is:",isEmployed); // Output: true

let address;
console.log("Address value is:",address); // Output: undefined

let city = null;
console.log("City value is:",city); // Output: null
// Object in javascript with key and value paire
let person = {
    name: 'Akshay',
    age: 30,
    isEmployed: true
};
console.log("Person object value is:",person); // Output: { name: 'Akshay', age: 30, isEmployed: true }
let colors = ['red', 'green', 'blue'];
console.log("Colors array value is:", colors);// accessing all the element in array
// accessing array element using index number
console.log("Colors array first element is:", colors[0]);
console.log("Colors array second element is:", colors[1]);
console.log("Colors array third element is:", colors[2]);
for(let i=0;i<colors.length;i++)
{
    console.log(colors[i]);
}