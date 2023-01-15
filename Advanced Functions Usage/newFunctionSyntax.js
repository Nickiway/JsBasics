'use strict';
// https://javascript.info/new-function

// there is a one more way to create a function : 

// syntax : 
// * let func = new Function([arg1, arg2, ... argN], functionBody);

// example : 
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1, 2)); // 3

// without arguments : 
let sayHi = new Function('console.log("Hello world")');
sayHi(); // Hello world 

// ! Closure
// the function created by this method reference its [[Environment]] to the global and in that case has
// access only to global variables (not outer)