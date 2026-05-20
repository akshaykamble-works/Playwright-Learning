// REVERSE A NUMBER input: 5678 → output: 8765
let number = 5678;
let reversedNumber = 0;
let temp = number;

while (temp > 0) {
    let lastDigit = temp % 10; // Get the last digit
    reversedNumber = (reversedNumber * 10) + lastDigit; // Append the last digit to the reversed number
    temp = Math.floor(temp / 10); // Remove the last digit from temp
}

console.log("Original number:", number); // Output: Original number: 5678
console.log("Reversed number:", reversedNumber); // Output: Reversed number: 8765
/*

LOGIC:
Step 1:
Get last digit using % 10
5678 % 10 = 8
567 % 10 = 7
56 % 10 = 6
5 % 10 = 5

Step 2:
Build reverse number
FORMULA:
revnum = revnum * 10 + digit
WHY revnum * 10 ?
To shift existing digits to left side
Example:
0 * 10 + 8 = 8
8 * 10 + 7 = 87
87 * 10 + 6 = 876
876 * 10 + 5 = 8765

Step 3:
Remove last digit from original number
*/