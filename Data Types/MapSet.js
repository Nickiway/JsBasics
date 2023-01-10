'use strict';
// https://uk.javascript.info/map-set

// ! command list : 
// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.
 

let map = new Map(); // creating a map 
map.set('1', 'Hello ');
map.set(1, 'world !');

console.log(map.get('1') + map.get(1)); // Hello world !
console.log(map.size); // 2

// ! map[key] = value usage is not recommended as this 

// * we can use objects as a key  :
let user = {
    name : "Nick"
}
map.set(user , 123); 
console.log(map.get(user)); // 123
console.log(user.name); // Nick

// * Chaining
map.set('item', 'item')
.set('item2', 'item2')
.set(3, 'length');

console.log(map.get(3));

// * Iteration over map 
// ! command list : 
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap  = new Map([
    ['orange', 200],
    ['cucumber', 300],
    ['tomato', 400],
]);

console.log('----------------');
for (let keys of recipeMap.keys()) {
    console.log(keys); // keys
}

console.log('----------------');
for (let values of recipeMap.values()) {
    console.log(values); // values
}

console.log('----------------');
for (let entry of recipeMap) {
    console.log(entry); // [keys, value]
}


// * Map has a forEach method : 
// runs the function for each (key, value) pair
// recipeMap.forEach( (value, key, map) => {
//     alert(`${key}: ${value}`); // cucumber: 500 etc
//   });


// ! commands list : 
// Object.entries() - returns an array of key/value pairs for an object exactly in that format. to create a map
// Object.fromEntries() - returns an object from map

// * Map from Object (Object.entries) :
let customer = {
    name : "John", 
    balance : 1000, 
    bonus : false,
}

let customerMap = new Map(Object.entries(customer));
console.log(customerMap); // Map(3) { 'name' => 'John', 'balance' => 1000, 'bonus' => false }

// *  Object from Map (Object.fromEntries) :
let newCustomer = Object.fromEntries(customerMap);
console.log(newCustomer); // { name: 'John', balance: 1000, bonus: false }

// * Set 
// ! commands list :
// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.

let john = {name : "John"};
let ivan = {name : "Ivan"};
let mike = {name : "Mike"};

let set = new Set();
set.add(john);
set.add(ivan);
set.add(mike);
set.add(john);
set.add(ivan);

console.log(set.size); // 3 
console.log(set);

// * can be used forEach in iteration of set  :
// let set = new Set(["oranges", "apples", "bananas"]);

// for (let value of set) alert(value);

// ? the same with forEach:
// set.forEach((value, valueAgain, set) => {
//   alert(value);
// });

// ! commands list :
// set.keys() – returns an iterable object for values,
// set.values() – same as set.keys(), for compatibility with Map,
// set.entries() – returns an iterable object for entries [value, value], exists for compatibility with Map.

// TODO :
function unique(arr) {
    let set = new Set(arr);
    let result = []; 
    for (let setItem of set) {
        result.push(setItem);
    }
    return result;
}
  
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
  
console.log( unique(values) ); // Hare, Krishna, :-O