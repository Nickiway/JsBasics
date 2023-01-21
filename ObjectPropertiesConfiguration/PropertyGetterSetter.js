'use strict';
// https://javascript.info/property-accessors

// There are two types of properties : 
// data properties (functions and casual data in obj)
// accessor properties (getter and setter)

let obj = {
    get propName() {
        // getter
    },

    set propName(value) {
        // setter
    }
}

// example of creating a setter / getter
let user = {
    name : "Joghn",
    age : 15,
    get fullName() {
        return `${this.name} : ${this.age}`;
    },

    set fullName(value) {
        [this.name, this.age] = value.split(" ");
    }
}

console.log(user.fullName);

user.fullName = "Nick 18";
console.log(user.fullName);

// * Accessor descriptors
// Descriptors for accessor properties are different from those for data properties.
// For accessor properties, there is no value or writable, but instead there are get and set functions.
// That is, an accessor descriptor may have:

// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,
// enumerable – same as for data properties,
// configurable – same as for data properties.
