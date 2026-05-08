/*
Data Types in Typescript

1. Primitive Data Types
   - string
   - number
   - boolean
   - null
   - undefined
   - symbol
   - bigint

2. Non-Primitive Data Types
   - array
   - object
   - function

Primitive data types are immutable and stored by value, while non-primitive data types are mutable and stored by reference.

Example of Primitive Data Types:

let name: string = 'Akshay';
let age: number = 25;
let isStudent: boolean = true;
let address: null = null;
let phoneNumber: undefined = undefined;
let uniqueId: symbol = Symbol('id');
let bigNumber: bigint = 9007199254740991n;

Example of Non-Primitive Data Types:

// Array
let numbers: number[] = [1, 2, 3, 4, 5];

// Object
let person: { name: string; age: number } = {
    name: 'Akshay',
    age: 25
};

// Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet('Akshay')); // Output: Hello, Akshay!

Understanding data types is
crucial for writing efficient and error-free code in TypeScript, as it allows you to define the structure of your data and catch potential errors during development.


*/
console.log('This is primitive data type example');
let userName:string ='Ranjeet';
console.log('Name is :',userName);
let userAge:number = 30;
console.log('Age is :',userAge);
let isStudent:boolean = false;
console.log('Is Student :', isStudent);
let userAddress:null = null;
console.log('Address is :', userAddress);
let userPhoneNumber:undefined = undefined;
console.log('Phone Number is :', userPhoneNumber);
let uniqueId:symbol = Symbol('id');
console.log('Unique ID is :', uniqueId);
let bigNumber:bigint = 9007199254740991n;
console.log('Big Number is :',  bigNumber);
console.log('End of primitive data type example');
console.log('-----------------------------');
console.log('This is non primitive data type example');

console.log('Non primitive data type example');
// Array
let numbers: number[] = [10, 22, 43, 64, 95];
console.log('Numbers Array :', numbers);
console.log('Printing numbers using for loop :');
for(let i=0; i<numbers.length; i++){
console.log('Number at index', i, ':', numbers[i]);
}

// Object
let personDetails: { 
    name: string; age: number 
} = {
    name: 'Ranjeet',
    age: 30
};
console.log('Person Object :', personDetails);
console.log('Name from Person Object :', personDetails.name);
console.log('Age from Person Object :', personDetails.age);

// Function
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet('Ranjeet')); // Output: Hello, Ranjeet!
console.log('End of non primitive data type example');

let fruits: string[]=['Apple', 'Banana', 'Cherry','Banana','Blueberry'];
console.log('Length of Fruits Array :', fruits.length);
for(let i=0;i<fruits.length;i++){
    console.log('Fruit at index', i, ':', fruits[i]);
}
console.log('--------Tyepof operator example---------');
console.log(typeof fruits); // Output: object
console.log(typeof personDetails); // Output: object
console.log(typeof greet); // Output: function  
console.log(typeof userName); // Output: string
console.log(typeof userAge); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof userAddress); // Output: object (null is considered an object in JavaScript)
console.log(typeof userPhoneNumber); // Output: undefined
console.log(typeof uniqueId); // Output: symbol
console.log(typeof bigNumber); // Output: bigint    