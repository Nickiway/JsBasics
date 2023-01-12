'use strict';
// https://uk.javascript.info/rest-parameters-spread

// * Rest parametrs ...
// if we want to find a sum of all numbers and their amount is not fixed : 

function summary(...numbers) {
    let sum = 0;

    for (let number of numbers)  sum += number;

    return sum;
}

console.log(summary(1, 3 ,4 , 5 , 6)); // 19
console.log(summary(1, 3 , 6)); // 10
console.log('--------------------');

// we can also set first required values : 
function printWorkers(surname, name, ...details) {
    console.log(surname + " " + name);
    for (let detail of details) {
        console.log(detail);
    }
}

printWorkers("Nick", "Shkitak", "New", "Strange");

// ! THE REST PARAMETRS MUST BE AT THE END !

// arguments : 
// arguments - is the array-like iterable object that has all arguments of the funciton  :
function printArguments() {
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);        
    }
}
console.log('--------------------');
printArguments(1,2,3);

// ! ARROW FUNCTIONS DO NOT HAVE arguments
function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
  }
  
console.log('--------------------');
f(1); // 1 (must be undefined)

// * Spread Syntax ...
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 0];

// console.log(Math.max(arr)); // Error (list of numbers is waited)
console.log('--------------------');

// to fix this we can use spread syntax : 
console.log(Math.max(...arr)); // 5

// * we can do also multiple spread syntax : 
console.log(Math.max(...arr, ...arr2)); // 9

// or combine with primitives : 
console.log(Math.max(...arr, 100, ...arr2, 25)); // 100

// * also spread syntax can be used for merging array  :
let merge = [0, ...arr, ...arr2];

console.log(merge); // 0, 1 - 9 , 0

// spread syntax can be used as well for any iterable like string : 
let string  = "String";
let stringArray = Array.from(string);

console.log(...string); // string by letters 
console.log(stringArray); // converted to string 

// this can be used for copying array / object : 
let arrayCopy = [...arr];
console.log(arrayCopy); // same as arr
console.log(arrayCopy == arr); // false as not same reference

let object = { 
    name : "nick",
    age : 10,
}

let objectCopy = {...object};
console.log(objectCopy); // name , age 
console.log(objectCopy == object); // false as not same reference

// * Just in case how to compare array 
// let array = [1, 2, 3];
// let array2 = [1, 2, 3];
// console.log(JSON.stringify(array2) == JSON.stringify(array)); // true