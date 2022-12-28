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