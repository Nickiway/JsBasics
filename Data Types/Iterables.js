'use strict';
// https://javascript.info/iterable 

// * Symbol.iterator :
let range = {
    from : 1,
    to : 5,
}

// way to get the value
for (let item in range) {
    console.log(range[item]);
}

// ! we can not use forOf :
// for (let item of range) {
//     console.log(item); // Error as item is not iterable 
// }

// To make the range object iterable (and thus let for..of work) we need to add a method to the object named Symbol.iterator (a special built-in symbol just for that).

// 1 When for..of starts, it calls that method once (or errors if not found). The method must return an iterator – an object with the method next.
// 2 Onward, for..of works only with that returned object.
// 3 When for..of wants the next value, it calls next() on that object.
// 4 The result of next() must have the form {done: Boolean, value: any}, where done=true means that the loop is finished, otherwise value is the next value.


// * create an iterate protocol 
range[Symbol.iterator] = function() {
    return {
        current : this.from,
        last : this.to,

        next() {
            if(this.current <= this.last) {
                return { done : false, value : this.current++};
            } else {
                return { done : true};
            }
        }
    };
};
console.log("----------------");
for (let item of range) {
    console.log(item); //1, 2, 3, 4,5 
}

// * Calling an iterator explicity : 
let string = "Hello world !";
let iterator = string[Symbol.iterator]();

console.log("----------------");
stop : while(true) {
    let result = iterator.next();
    if (result.done) {
        break stop;
    } else  {
        console.log(result.value);
    }
}

// * Array.from 
// this method is used to convert iterable object or array-like into real array : 
let arrayLike = {
    0 : "Hello",
    1 : "World",
    length : 2,
}

// console.log(arrayLike.push(" :) !")); // error as not an array (array-like)
let array = Array.from(arrayLike); // check if is it array-like or iterable 
// if true => creates new array and copy all items to it 

array.push(" :) !"); // Works
console.log(array);; // Works

// full syntax of method : 
// Array.from(obj[, mapFn, thisArg]);
// mapFn is a function that can be used on objects before copying them to new array 

