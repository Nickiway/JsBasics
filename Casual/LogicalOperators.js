// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? || OR operator

// * let result = a || b;
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false

// * using in if else :
if(1 || 0) { // work just like true || false
    console.log("Truthy !"); 
}

// * example 
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

// ? OR "||" finds the first truthy value 
// * let result = value1 || value2 || value3;
// The OR || operator does the following:

// 1. Evaluates operands from left to right.
// 2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// 3. If all operands have been evaluated (i.e. all were false), returns the last operand.

console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// * EXAMPLE GETTING THE FIRST NAME
let firstName = "";
let lastName = "";
let nickName = "Nickiway";

// returns Nickiway as it is the first true value
console.log(firstName || lastName || nickName || "Anonymous"); 

// * easier example 
let result = true || "not printed"; // stops on the first true 
result = false || "printed"; // passes first false => printed
console.log(result);

// ? && (AND)
// * result = a && b;
console.log(true || true); // true
console.log(false || true); // false
console.log(true || false); // false
console.log(false || false); // false

// ? AND “&&” FINDS THE FIRST FALSY VALUE
// * result = value1 && value2 && value3;
// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.

//! if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0 second operand is falthy (not the last value)
console.log( 1 && 5 ); // 5 (taking the last argument if everything is true)

//!  if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null (first falthy)
console.log( 0 && "no matter what" ); // 0 (first falthy)

console.log( 1 && 2 && null && 3 ); // null (null because falsy)
console.log( 1 && 2 && 3 ); // 3 (last value)

// ? !(NOT)
// * result = !value 
console.log(!true); // false 
console.log(!0); // false 

// ! A double NOT using to convert to ____BOOLEAN____
console.log(!!"non-empty string"); // true
console.log(!!null); // false

// * it same as :
console.log(Boolean("non-empty string")); // true
console.log(Boolean(null)); // false

// TODO:
console.log( null || 2 && 3 || 4 ); // return _3_ => null || 3 || 4
console.log( console.log(2) && console.log(3) ); // return undefined (false) as the function returns undefined

// however the command console.log(5) will run as it's checked because the 4 == true
console.log( console.log(5) && 4 ); // return undefined (false) as the function returns undefined