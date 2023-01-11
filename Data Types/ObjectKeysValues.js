'use strict';
// https://javascript.info/keys-values-entries

// ! command list : 
// * can be used by SET, MAP, ARRAY : 
// map.keys();
// map.values();
// map.entries();


let array = [1, 2, 3, 4, 5, 6]; 
for (let key of array.keys()) {
    console.log(key); // 0 - 5 
}

// * Object.keys, values, entries() :
// the similar methods can be used for objects : 

// ! commands list : 
// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
    name : "John",
    age : 14,
    surname : "Jackson",
    city : "Warsaw" 
}

console.log("----------------");
for (let objKeys of Object.keys(user)) {
    console.log(objKeys); // keys of object 
}

// ! Map function (return array) :
let fruitPrice = {
    banana : 1,
    apple : 2,
    orange : 3,
}

console.log("----------------");
console.log(fruitPrice); // standart 

let doublePrice = Object.fromEntries(
    Object.entries(fruitPrice).map(fruit => [fruit[0], fruit[1] ** 2])
);

console.log("----------------");
console.log(doublePrice); // doubled