'use strict';
// https://javascript.info/settimeout-setinterval

// * setTimeout 
// Syntax : 
// let timerId = setTimeout(func|code, [delay],[arg1], [arg2], ... );

// func|code -> function or a string of code. String code can be passed but it's not recommended
// delay -> the delay before run (in milliseconds)
// [arg1], [arg2] -> arguments for the function

// example : 
function sayHi() {
    alert("Hello");
}

// ? setTimeout(sayHi, 1000); // in 1 second : 

// with arguments : 
let printPerson = function(name, surname) {
    alert(name + ' ' + surname);
}

// ? setTimeout(printPerson, 1000, 'Nick', 'Shkitak');

// if the first argument is a stirng   
// setTimeout("alert('Hello')", 1000);
// js will create a function 
// ! but it's not recommended

// better use arrow funcitons : 
// ? setTimeout(() => alert("Hello (arrow)"), 1000);

// pass a function : 
// * notice : 
// ? setTimeout(sayHi(), 1000); 
// this will not work as setTimeout expects a reference to a function
// but in that case the function runs and returns undefined (ex.) and as the result 
// it references to a function that do not exists 

// * canceling with clearTimeout()
let setTimeSayHi = setTimeout(sayHi, 1000); // creating a timeout

// alert(setTimeSayHi); // identifier of timer -> 1
clearTimeout(setTimeSayHi); // stoping timeout (identifiers remains)

// alert(setTimeSayHi); // identifier of timer -> 1

// * setInterval :
// syntax : 
// let timerId = setInterval(func|code, [delay],[arg1], [arg2], ... );
// all the arguments are the same  
// to stop futher calls use : // ! clearInterval(timerId);

let intervalHi = setInterval(() => alert("Hi"), 2000);
clearInterval(intervalHi); // stoping interval 

// nested intervals : 
// we can assign a new interval to a var : 
// this can be used for examp: when we are sending requests to server and every next request it makes time of interval doubled :

// let delay = 5000;

// let timerId = setTimeout(function request() {
//   ...send request...

//   if (request failed due to server overload) {
// *      increase the interval to the next run
//     delay *= 2;
//   }

//   timerId = setTimeout(request, delay);

// }, delay);

// * setInterval delay(time) = (time that is made for a function execution) + the remaining time 

// Zero-setTimeout() : 
// we can also set delay as 0 : 

// setTimeout(() => alert("Hello"), 0) // or setTimeout(() => alert("Hello"))
// so in that case the timeout will call all the time after completing the function 


// TODO : 
let counter = 0;
setInterval(() => {
    alert(counter++);
}, 1000);