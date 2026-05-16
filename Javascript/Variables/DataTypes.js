/*

Data Types
1.1 What Are Data Types?
A data type tells JavaScript what kind of value a variable holds — is it a number, a piece of text,
true/false, or a complex object?
Think of data types like containers in real life:
• A bottle holds liquid (Number)
• A book holds text (String)
• A light switch is either ON or OFF (Boolean)
• An empty box is undefined or null
Every value in JavaScript has a data type.

JavaScript Data Types
├── Primitive Types (7 types) — simple, single values
│ ├── Number
│ ├── String
│ ├── Boolean
│ ├── Undefined
│ ├── Null
│ ├── BigInt
│ └── Symbol
│
└── Non-Primitive Types — collections / complex
├── Object
├── Array
└── Function
Simple rule:
• Primitive → stores one single value (a number, a word, true/false)
• Non-Primitive → stores a group of values (many items together)

3. Primitive Data Types
All primitive types are immutable — once a value is created in memory, it cannot be changed.
When you reassign a variable, a new value is created.
3.1 Number
The Number type represents all numeric values — whole numbers, decimals, positive, negative.
⚠ JavaScript has only ONE number type for everything. There is no separate int or float.
let age = 25;
let price = 19.99;
let temperature = -5;
let bigNum = 1000000;

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