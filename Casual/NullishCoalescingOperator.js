// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';
let a, b = null;
a = "user";
b = "nickname";

// if var declared and we want to check whether it we use //! "??"
let result = (a !== null && a !== undefined) ? a : b;
console.log(result);

// * else 
// ! Notice that 0, false and "" are likely not ignored by ?? it the same values as other 
// ! only undefined and null are counted as "UNDEFINED" 

// * one more example 
result =  0 ?? b;
console.log(result);

result =  0 || b;
console.log(result);

// * one more example 
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0

//! Priority 
//? the priority of the ?? operator (nullish coalescing operator) is 3 
//* so the operator acts before ? and =

let heightPriority = null;
let widthPriority = null;

let area = (heightPriority ?? 100) * (widthPriority ?? 50);
console.log(area); // 5000


//! IF WE USE NO Brackets 
// without brackets
// * let area = height ?? 100 * width ?? 50;

// this will work like this as operator * has higher priority
// * let area = height ?? (100 * width) ?? 50;


// ? USING THE ?? WITH || AND && operators
// * if we using the operator ?? without brackets it is forbidden 
// let x = 1 && 2 ?? 3; // error

// * correct 
let x = (1 && 2) ?? 3;  // result 2 
console.log(x);