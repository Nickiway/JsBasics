'use strict';
// https://javascript.info/function-object

// * function type = Object
function sayHi() {
    console.log("Hello");
}

// * name property of the function : 
console.log(sayHi.name); // sayHI

// expression also works : 
let sayHello = function() {
    console.log("Hello");
};

console.log(sayHello.name); // sayHello

// ! this 'name' is called : @CONTEXTUAL NAME@ 
// there is sometimes the ways when it's impossible to get the name : 

let arr = [function() {}];

console.log(arr[0].name); // <empty string>

// * length property : 
// it counts the number of arguments in the function :
function one(params) {
    return params;
}

function two(params, param) {
    return params;
}

function many(params, param, ...many) {
    return params;
}

console.log('------------------');
console.log(one.length); // 1
console.log(two.length); // 2
console.log(many.length); // 2 

// length property is used usually for introspection in function that operates on other function

// * For instance, in the code below the ask function accepts a question to ask and an arbitrary number of handler functions to call.

// Once a user provides their answer, the function calls the handlers. We can pass two kinds of handlers:

// A zero-argument function, which is only called when the user gives a positive answer.
// A function with arguments, which is called in either case and returns an answer.
// To call handler the right way, we examine the handler.length property.


// function ask(question, ...handlers) {
//     let isYes = confirm(question);

//     for (let handler of handlers) {
//         if (handler.length == 0) {
//             if (isYes) handler();
//         }  else {
//             handler(isYes);
//         }
//     }
// }

// ask("Question?", () => alert('You said yes'), result => alert(result));

// * Custom properties : 
function sayBye() {
    console.log("Bye");
    sayBye.counter++; 
}

sayBye.counter = 0; // custom property  

console.log('------------------');
sayBye(); // Bye
sayBye(); // Bye

console.log(sayBye.counter); // 2

// * named function expression  : (NFE)
// casual function expression :
let printHi = function() {
    console.log("Hi");
}

// named : 
let printBye = function Bye() {
    console.log("Bye");
}

// advantages : 
// * Є дві важливі особливості назви func, через які воно дається:

// Вона дозволяє функції посилатися на себе.
// Вона не доступна за межами функції.

let printHello = function func(who) {
    if (who) {
        console.log(`Hello, ${who}`);
    } else {
        func("Guest")
    }
}

console.log('------------------');
printHello() // Hello, Guest;

// * We can do also such a thing as well but in some cases 
// let sayHi = function(who) {
//     if (who) {
//       alert(`Привіт, ${who}`);
//     } else {
//       sayHi("Гість");
//     }
//   };


// However there are some risks of changin the outer function  :
// let sayHi = function(who) {
//     if (who) {
//       alert(`Hello, ${who}`);
//     } else {
//       sayHi("Guest"); // Помилка: sayHi не є функцією
//     }
//   };
  
//   let welcome = sayHi;
//   sayHi = null;
  
//   welcome(); // Помилка, вкладений виклик sayHi більше не працює!

// ! NFE (named function expression) WORKS WITH EXPRESSIONS ONLY , NOT DECLARATIONS ! 