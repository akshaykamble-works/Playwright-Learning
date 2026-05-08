/** Logical Operators in TypeScript 
 * Logical operators are used to combine multiple conditions in TypeScript. They allow you to
 * perform logical operations on boolean values and return a boolean result.
 * The main logical operators in TypeScript are:

1. AND (&&): Returns true if both operands are true, otherwise returns false.
2. OR (||): Returns true if at least one of the operands is true, otherwise returns false.
3. NOT (!): Returns true if the operand is false, and false if the operand is true.
*/
console.log('This is logical operator example');
let a: boolean = true;
let b: boolean = false;

console.log('a AND b:', a && b); // Output: false
console.log('a OR b:', a || b);  // Output: true
console.log('NOT a:', !a);        // Output: false
console.log('NOT b:', !b);        // Output: true

console.log('End of logical operator example');

console.log('-----------------------------');
let x: number = 10;
let y: number = 20;

console.log('x > 5 AND y < 30:', x > 5 && y < 30); // Output: true
console.log('x < 5 OR y > 15:', x < 5 || y > 15);   // Output: true
console.log('NOT (x > 15):', !(x > 15));            // Output: true
console.log('NOT (y < 10):', !(y < 10));            // Output: true

console.log('End of logical operator example');
console.log('-----------------------------');
//In TypeScript, the logical operators &&, ||, and ! can also be used with non-boolean values.
// In such cases, they follow the concept of "truthy" and "falsy" values.   
let str: string = "Hello";
let num: number = 0;

console.log('str AND num:', str && num); // Output: 0 (num is falsy)
console.log('str OR num:', str || num);  // Output: "Hello" (str is truthy)
console.log('NOT str:', !str);            // Output: false (str is truthy)
console.log('NOT num:', !num);            // Output: true (num is falsy)

console.log('End of logical operator example');
console.log('-----------------------------');
console.log('Ternary Operator in TypeScript');
// The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.
let age: number = 19;
let canVote: string = age >= 18 ? "Yes" : "No";
console.log('Can vote:', canVote); // Output: Yes

age = 16;
canVote = age >= 18 ? "Yes" : "No";
console.log('Can vote:', canVote); // Output: No

console.log('End of ternary operator example');
console.log('-----------------------------');
let score: number = 85;
let grade: string = score >= 90 ? "A" :
                    score >= 80 ? "B" :
                    score >= 70 ? "C" :
                    score >= 60 ? "D" : "F";
console.log('Grade:', grade); // Output: B

console.log('End of ternary operator example');
console.log('-----------------------------');
console.log('Arthametic Operators in TypeScript');
let num1: number = 10;
let num2: number = 5;

console.log('num1 + num2:', num1 + num2); // Output: 15
console.log('num1 - num2:', num1 - num2); // Output: 5
console.log('num1 * num2:', num1 * num2); // Output: 50
console.log('num1 / num2:', num1 / num2); // Output: 2
console.log('num1 % num2:', num1 % num2); // Output: 0

console.log('End of arthametic operator example');
console.log('-----------------------------');

console.log('Comparison Operators in TypeScript');
let a1: number = 10;
let b1: number = 20;

console.log('a1 == b1:', a1 == b1);   // Output: false
console.log('a1 != b1:', a1 != b1);   // Output: true
console.log('a1 > b1:', a1 > b1);     // Output: false
console.log('a1 < b1:', a1 < b1);     // Output: true
console.log('a1 >= b1:', a1 >= b1);   // Output: false
console.log('a1 <= b1:', a1 <= b1);   // Output: true

console.log('End of comparison operator example');
console.log('-----------------------------');
console.log('Assignment Operators in TypeScript');
let c: number = 10;
console.log('Initial value of c:', c); // Output: 10

c += 5; // c = c + 5
console.log('After c += 5:', c); // Output: 15

c -= 3; // c = c - 3
console.log('After c -= 3:', c); // Output: 12

c *= 2; // c = c * 2
console.log('After c *= 2:', c); // Output: 24

c /= 4; // c = c / 4
console.log('After c /= 4:', c); // Output: 6

c %= 4; // c = c % 4
console.log('After c %= 4:', c); // Output: 2

console.log('End of assignment operator example');
console.log('-----------------------------');
console.log('Increment and Decrement Operators in TypeScript'); 
let d: number = 5;
console.log('Initial value of d:', d); // Output: 5

d++; // Post-increment: d = d + 1
console.log('After d++:', d); // Output: 6

++d; // Pre-increment: d = d + 1
console.log('After ++d:', d); // Output: 7

d--; // Post-decrement: d = d - 1
console.log('After d--:', d); // Output: 6

--d; // Pre-decrement: d = d - 1
console.log('After --d:', d); // Output: 5

console.log('End of increment and decrement operator example');
console.log('-----------------------------');
console.log('Bitwise Operators in TypeScript');
let e: number = 5;  // In binary: 0101
let f: number = 3;  // In binary: 0011

console.log('e & f (AND):', e & f);   // Output: 1 (In binary: 0001)
console.log('e | f (OR):', e | f);    // Output: 7 (In binary: 0111)
console.log('e ^ f (XOR):', e ^ f);   // Output: 6 (In binary: 0110)
console.log('~e (NOT):', ~e);         // Output: -6 (In binary: 1010)
console.log('e << 1 (Left Shift):', e << 1); // Output: 10 (In binary: 1010)
console.log('e >> 1 (Right Shift):', e >> 1); // Output: 2 (In binary: 0010)

console.log('End of bitwise operator example');
console.log('-----------------------------');
console.log('Typeof Operator in TypeScript');
let g: number = 42;
let h: string = "Hello";
let i: boolean = true;

console.log('Type of g:', typeof g); // Output: number
console.log('Type of h:', typeof h); // Output: string
console.log('Type of i:', typeof i); // Output: boolean

console.log('End of typeof operator example');
console.log('-----------------------------');
console.log('== and === Operators in TypeScript');
let numA: number = 10;
let numB: string = "10";

console.log('numA == numB:', numA == numB);   // Output: true (type coercion)
console.log('numA === numB:', numA === numB); // Output: false (no type coercion)

console.log('End of equality operator example');
console.log('-----------------------------');