// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? common creating a function :
 function sayHi(){
     console.log("Hi user");
 }

 // ? function expression 
 let sayHiExpression = function() {
     console.log("Hi user");
 }

 // to print out the code
 sayHi(); // hi user
 sayHiExpression(); // hi user

 console.log(sayHiExpression);

 // ! callback function 
 // * this name function can be set as a parametr of incoming function :

 function askQuestion(question, confirm, cancel) {
    !!question ? confirm() : cancel();
 }

let confirmQuestion = function() {
    console.log("Ok you can enter");
}

let cancelQuestion = function() {
    console.log("No you cannot enter");
}

// calling the function for a callback :
askQuestion("Hello would you like to enter the hall ? ", confirmQuestion, cancelQuestion);
// output : OK you can enter
// ? Also can be implemented as : 
askQuestion("Are you agreed ? ", 
function() {
    console.log("You are agreed");
}, 
function() {
    console.log("You are not agreed");
})
// output : you are agreed 


// ! DIFFERENCE BETWEEN FUNCTION EXPRESSION AND DECLARATION
// ? declaration can be called earlier than function declaring 
sayHi("John"); // Hello, John

function sayHi(name) {
    console.log( `Hello, ${name}` );
}

// ? however in function expression that won't work
sayHi("John"); // error!

let sayHiExpress = function(name) {  // (*) no magic any more
    console.log( `Hello, ${name}` );
};
// * function expression created when the execution reaches them 
// ! if we create a function in the block it is visible in this block only : 
let age = 18;

// conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }
// welcome() // error the welcome is not defined

// ! to make visible outside the block we can use the expression 
let welcomeFunction;
if (age < 16) {
    welcomeFunction = function(){
        console.log("Weclome young person!");
    }
} else {
    welcomeFunction = function(){
        console.log("Welcome mature person!");
    }
}
welcomeFunction(); // ok now