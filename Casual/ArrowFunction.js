// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// * let func = (param1, param2, ... paramN) => expression;
let sum = (a, b) => a + b;
console.log(sum(3, 2)); //5
// ? the arrow function gives us an opportunity to write simpler the expression function 
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

// ! without arguments 
let hello = () => console.log("Hello world");
hello();

// so dynamicaly function can be created as well 
let age = 18;

let welcome = (age < 18) ?
  () => console.log('Hello!') :
  () => console.log("Greetings!");

welcome(); // greetings!

// ! Multiple arrow function
// * Multiple functions require RETURN
sum = (a, b) => {
    let result = a + b;
    return result;
};

// TODO :
// Replace Function Expressions with arrow functions in the code below:

//  function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// * RESULT 
// * let ask = (question, yes, no) => confirm(question) ? yes() : no();
// * ask(
// *    "Do you agree?",
// *    () => alert("You agreed"),
// *    () => alert("You canceled the execution"),
// * )