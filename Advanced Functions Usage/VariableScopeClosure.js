'use strict';
// https://javascript.info/closure

// if var is declared in a block it is visible only inside this block :
{
    let message = "Hello" ; 
    console.log(message); // Hello  
}

// console.log(message); // undefined (Error)


// * in this way we can isolate the code so that he done his part of code : 
console.log('---------------------');
{
    let message = "Hello";
    console.log(message); // Hello  
}

{ 
    let message = "Goodbye";
    console.log(message); // Goodbye 
}

// ! without blocks there will be an error that there a double declaration 

// * For :  if , for , while variables declared in { } also visible there only 
if (true) { 
    let message = "Hello (in if)";
    console.log(message); // Hello (in if)
}

// console.log(message); // undefined (Error)

// * Nested functions : 
console.log('---------------------');

function sayHiBye(firstName, lastName) {
    
    function makeFullName() {
        return firstName + " " + lastName;
    }

    console.log("Hi, " + makeFullName());
    console.log("Bye, " + makeFullName());
}

sayHiBye("Nick", "Shkitak");
console.log('---------------------');

function makeCounter() {
    let counter = 0;
    return function() {
        return counter++;
    };
}

let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1 
console.log(counter()); // 2

// ? lexical environment topic 

// * Trash collector : 
function functionF() {
    let value = 123; 

    function g() {
        debugger;
    }

    return g;
}

let f = functionF; // in that case value will be removed with a trash collector
// this is the way of optimization for JS code : 
// V8 tries to optimize the code so that in that case : value == undefined => true 
f();