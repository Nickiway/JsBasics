'use strict';
// https://uk.javascript.info/weakmap-weakset

let user = {name : "John"};
let map = new Map([[
    user, 
    'Value'
]]);

console.log(map);

console.log(user.name); // John
user = null;

// console.log(user.name); // error (no such a property)
// ! but a trash collector can get this var as it still used as a key in map and can not be deleted : 
console.log(map);

// in that case WeakMap is created : 
user = {name : "John"};

let weakMap = new WeakMap();
weakMap.set(user, "Value");

console.log(weakMap.get(user)); // the object exists 
user = null; // setting null to delete an object 

console.log(weakMap.get(user)); // undefined , as an object has been deleted 

// ! WeakMap / WeakSet can get as a key only OBJECTS !!!

// ! commands list : 
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// * WeakMap does not support iteration and methods : keys(), values(), entries() !

// * WeakSet - same as WeakMap but SET
let visitedSet = new WeakSet();
let john, ivan, mike;
visitedSet.add(john = {
    name : "John"
});

visitedSet.add(ivan = {
    name : "Ivan"
});

visitedSet.add(mike = {
    name : "Mike"
});

console.log(visitedSet.has(mike)); // true
mike = null;

console.log(visitedSet.has(mike)); // false (deleted with the trash collector)


// ! main concept : 
// Weak...(Map, Set) has same concepts / but there are some functions not available and it allows to
// to delete from memory not used object if they are not used by trash collector 