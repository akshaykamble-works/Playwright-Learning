/*

Big int in javascript is a primitive data type that can represent integers with arbitrary precision.
 used to store large integers that exceed the safe integer limit for the Number type (2^53 - 1).
 used for very long intergers value and at the end of the number we can use n to represent big int.
Example:
let bigIntValue = 1234567890123456789012345678901234567890n;
*/

let bigIntValue = 1234567890123456789012345678901234567890n; // big int
console.log(bigIntValue);
console.log(typeof bigIntValue);