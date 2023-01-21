'use strict';
// https://javascript.info/prototype-inheritance

// ПРОТОТИПНОЕ НАСЛЕДОВАНИЕ
// [[Proptotype]]
// it is special hidden property of JS object

// for inheriting we use __proto__ : (property)
// we can use __proto__ only once in object
// in other words we can inherit only one object 
//!  also it's forbidden to create a circle inheritance 
//!  ONLY chain ! 

// example of prototypical inheritance :
let animal = {
    eats : true,
    walk : function(){
        console.log("Animal walk");
    },
}; 

let rabbit = { 
    jumps : true,
    __proto__ : animal,
};

console.log(rabbit.eats); // true 
// when the code tries to use property of rabbit and there 
// is no such it's search in proto this prop.

// also can be used methods : 
rabbit.walk();

// we can also make one more inheritance : 
let longEars = {
    __proto__ : rabbit,
    ears : true,
};

// lets call from longEars an eats property of prototype
console.log(longEars.eats); // true

// * There are only two limitations:
// 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// 2. The value of __proto__ can be either an object or null. Other types are ignored.

// ! __proto__ is a historical getter/setter for [[Prototype]]

// * __proto__ is a bit outdated 
// for setting prototypes we can use theese commands : 
// * Object.getPrototypeOf(obj) Object.setPrototypeOf(obj, prototype) 
// functions instead get / set prototype

// * writing does not use prototype : 
// if we want assign a new value of property 
// using a protypical inheritance nothing changes :
longEars.eats = false; // eats is a property of animal obj 
console.log(longEars.eats); // false
console.log(animal.eats); // still true

// the thign is that we assigning a new property of an object 
// the prototype is for reading only
console.log(Object.getOwnPropertyDescriptors(longEars)); // ears = true , eats = false

// the value of this 
let user = {
    name : "John",
    surname : "Jackson",

    get fullName() {
        return `${this.name}  ${this.surname}`; 
    },
    
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },
};

let admin = {
    isAdmin : true,
    __proto__ : user,
};

console.log('------------------');
console.log(admin.fullName); // John Smith

admin.fullName = "Mike Chaban";
console.log(admin.fullName); // John Smith
console.log(user.fullName); // Mike Chaban

// * No matter where the method is found: in an object or its prototype. In a method call, 
// * this is always the object before the dot.

let person = { 
    walk(){
        if (!this.isSleeping) {
            console.log('I walk');
        }
    },

    sleep() {
        this.isSleeping = true;
    }
};

let brother = { 
    name : "Jame", 
    __proto__ : person,
};

brother.sleep();

console.log(brother.isSleeping); // true
console.log(person.isSleeping); // undefined (no such property in the prototype)

// * For in()
// THe for in iterates over inherited properties too.
// for instance : 

let newAnimal = {
    eats : true,
};

let newRabbit = { 
    jumps : true,
    __proto__ : newAnimal,
};

console.log('------------------');
console.log(Object.keys(newRabbit)); // [jumps]
for (let key in newRabbit) {
    console.log(key); // jumps, eats 
}
//If that’s not what we want, and we’d like to exclude inherited properties, there’s a built-in method
// * obj.hasOwnProperty(key): it returns true if obj has its own (not inherited) property named key.


for (let prop in newRabbit) {
    let isOwn = newRabbit.hasOwnProperty(prop);

    if(isOwn) {
        console.log(prop); // jumps only
    }
}


// example of usage
// * Object.getPrototypeOf(obj) Object.setPrototypeOf(obj, prototype) 

let worker = {
    name : "Mike"
};

let police = {
    isWorking : true,
};

console.log('------------------');
Object.setPrototypeOf(police, worker); // setting worker object as a prototype
console.log(police.name); // Mike

console.log(Object.getPrototypeOf(police)); // {name : Mike} / getting a prototype-object 