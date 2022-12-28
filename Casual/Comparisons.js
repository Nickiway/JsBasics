// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? NUMBER COMPARISON
console.log(2 > 1 ); // true
console.log(2 == 1 ); // false
console.log(2 != 1 ); // true

let result = 5 > 4;
console.log(result); // true

// ? STRING COMPARISON
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true

// ! THE ALGORITHM TO COMPARE TWO STRINGS IS SIMPLE:

// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// 3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// 4. Repeat until the end of either string.
// 5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// ? COMPARISON DIFFERENT TYPES
console.log('2' > 1); // true string '2' becomes a number 2
console.log('01' == 1); // true string '01' becomes a number 1

console.log(true == 1); // true, true becomes a number 1
console.log(false == 0); // true, false becomes a number 0

// ? FUNNY CONSEQUENCE 
let a = 0;
console.log( Boolean(a) ); // false

let b = "0";
console.log( Boolean(b) ); // true
console.log(a == b); // true! because b is converted to int

console.log(b == a);

// ! OPERATOR '==' CONVERTS TO NUMBER and in case 0 == false ? => __true__
// ? TO COMPARE WITH WITH A TYPE WE USE ===
console.log(0 == false); // true, false converted to 0
console.log(0 === false); // false, different types 

// ! WARNING 
console.log(null == undefined); // true 
console.log(null === undefined); // false, different  types

// ? FUNNY CONSEQUENCE
// when we compare null with 0
console.log(null > 0); // false 
console.log(null == 0); // false 
console.log(null >= 0); // true

//* the reason is that >, < operators converts null as 0, when == can return true 
//* when null == undefined or null == null

// undefined shouldn't compare with other values
console.log(undefined > 0); // false (converted to NaN as Number())
console.log(undefined < 0); // false (converted to NaN as Number())
console.log(undefined == 0); // false because only equals null, undefined

// TODO: SMALL EXERCISE
let exercise = 5 > 4 // true;
exercise = "apple" > "pineapple" // false (more letters in pineapple)
exercise = "2" > "12" // converted to int => false
exercise = undefined == null // true
exercise = undefined === null // false
exercise = null == "\n0\n" // false (converted not to a Number, specific convertion and can be equal undefined only)
exercise = null === +"\n0\n" // false
