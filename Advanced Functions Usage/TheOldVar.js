'use strict';
// https://uk.javascript.info/var

// ! var has no lexical environment :
// it can be function-scoped and global-scoped
if(true) {
    var name = "nick";
}
console.log(name); // nick

// * however in function it has 
function printName() {
    var name = "John";
}

console.log(name); // nick

// * var tolerates redeclaration : 
var age = 10;
var age = 14;

console.log(age); // 14

// * in let case :
// let age = 15 // Error 

// * Var can be declared before their use : 
function printSurname() {
    surname = "Shkitak";

    console.log(surname);

    var surname;
}

printSurname(); // Shkitak

// var wheb declared go first 
// ! however the = is at the given priority : 
function f() {
    console.log(printed);
    var printed = "Name";
}
f(); // undefined

// *  SAME AS :
// function f() {
//     var printed; 
//     console.log(printed); // undefined
//     printed = "Name";
// }
