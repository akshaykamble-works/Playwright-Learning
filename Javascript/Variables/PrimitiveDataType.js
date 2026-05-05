// Primitive Datatype in javascript
/*
All primitive datatype are immutable in nature once value is created in memeory it cannot change.
when you reassign a variable it new value is created.

1) Number:
    Used to store numeric data.
2) String:
    Used to store text data.
3) Boolean:
    Used to store true or false values.
4) Undefined:
    Used to store undefined values.
5) Null:
    Used to store null values.
6) Symbol:
    Used to create unique identifiers.
7) BigInt:
    Used to store large integers.
*/
console.log('Number primitive datatype example');
// Number primitive datatype.
let num = 10;
console.log("Number value is:",num); // Output: 10
num = 20;
console.log("Number value is:",num); // Output: 20

// Real Life Example
let price = 100;
let quantity=3;
let discount=30;
let total_Bill=price*quantity;
console.log("Total Bill is:",total_Bill);
total_Bill_AfterDiscount=total_Bill-discount;
console.log("Total Bill after discount is:", total_Bill_AfterDiscount);   

// String primitive datatype.
console.log("String datatype example:");
let str = "Hello";
console.log("String value is:",str); // Output: Hello
str = "World";
console.log("String value is:",str); // Output: World
console.log("Length of the string is:", str.length);
console.log("Character at index 0 is:", str.charAt(0));
console.log("Index of character l is:", str.indexOf('l'));
console.log("Substring from index 0 to 3 is:", str.substring(0, 3));
console.log("Replace l with L:", str.replace('l', 'L'));
console.log("Convert to uppercase:", str.toUpperCase());
console.log("Convert to lowercase:", str.toLowerCase());
console.log("String concatenation:", str.concat(" ", "World"));
console.log("Split string into array:", str.split(''));
console.log("Join array into string:", str.split('').join(''));
console.log("Check if string starts with H:", str.startsWith('H'));
console.log("Check if string ends with d:", str.endsWith('d'));
console.log("Trim whitespace:", str.trim());
console.log("Check if string includes World:", str.includes('World'));
console.log("Repeat string 3 times:", str.repeat(3));
console.log("Check if string is empty:", str === '');
console.log("Check if string is not empty:", str !== '');


// Boolean primitive datatype.
console.log("Boolean datatype example:");
let bool = true;
console.log("Boolean value is:",bool); // Output: true
bool = false;
console.log("Boolean value is:",bool); // Output: false

// Undefined primitive datatype.
console.log('Undefined primitive datatype example');
let undef;
console.log("Undefined value is:",undef); // Output: undefined

console.log('Null primitive datatype');
// Null primitive datatype.
let nul = null;
console.log("Null value is:",nul); // Output: null

// Symbol primitive datatype.
console.log('Symbol primitive datatype');
let sym = Symbol('foo');
console.log("Symbol value is:",sym); // Output: Symbol(foo)

// BigInt primitive datatype.
console.log('BigInt primitive datatype');
let bigInt = 1234567890123456789012345678901234567890n;
console.log("BigInt value is:",bigInt); // Output: 1234567890123456789012345678901234567890n

console.log('Typeof operator');
console.log("Type of num is:", typeof num);
// Typeof method is used to check the datatype of the variable.
console.log("Type of str is:", typeof str);
console.log("Type of bool is:", typeof bool);
console.log("Type of undef is:", typeof undef);
console.log("Type of nul is:", typeof nul);
console.log("Type of sym is:", typeof sym);
console.log("Type of bigInt is:", typeof bigInt);
