// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? UNARY NEGATION
let x = 1;
x = -x;
console.log(x); // -1;

// ? BASIC MATH OPERATOR
// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **

// ? OPERANTS WITH STRINGS
let example = "my" + " string"; // => "my string"

// ! IF WE USING '+' OPERANT WITH STIRNG => NUMBERS CONVERT TO STRING
console.log('1' + 2); // 12
console.log(2 + '1'); // 21 

// ! WARNING
console.log(2 + 2 + '1'); // 41

// ! HOWEVER
console.log('1' + 2 + 2); // 122

// ! IF WE USING '-' or '/' OPERANT WITH STRING => STRING CONVERTS TO NUMBER
console.log('6' - 2); // 4
console.log('12' / '4'); // 3

// ? NUMERIC CONVERSION, UNARY +
let y = 1;
console.log(+1); // 1 (nothings changes)

let stringY = "1235";
console.log(+stringY); // 1235 (number)
console.log(+true); // 1
console.log(+""); // 0

let apples = "2";
let oranges = "3";

console.log(apples + oranges); // 23
console.log(+apples + +oranges); // 5

// ? ASSIGNMENT = RETURNS VALUES 
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);
console.log(a); // 3
console.log(c); // 0

a = b = c = 2 + 2;
console.log('-----------------');
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

// ? INCREMENT (POSTFIX, PREFIX)
// ! WE CAN USE INCREMENT FOR VARIABLES ONLY

let counter = 1;
let prefix = ++counter;
let postfix = counter++;

console.log(prefix); // 2
console.log(postfix); // 1

// ? BITWISE OPERATORS 
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

// ? COMMA
// let commaA = (1 + 2, 3 + 4);
// let commaB = 1 + 2, 3 + 4;

// console.log(commaA); // 7 (the result of 3 + 4) as the last
// console.log(commaB); // a = 3, and the rest is ignored. It’s like (a = 1 + 2), 3 + 4.