'use strict';
// https://javascript.info/property-descriptors
// Practice 

let testingUser = { 
    name : "Testing user", 
    age : 14, 
    city : "Warsaw", 
    country : "Poland",
    printInfo : function() {
        console.log(
            this.name + " "
            + this.age + " "
            + this.city + " "
            + this.country + " "
            );
    }
}

// get all descriptors of object :
let descriptors = Object.getOwnPropertyDescriptors(testingUser); // output all info
console.log(descriptors); // all descriptors

// getting all property names of the object
let propertyNames = Object.getOwnPropertyNames(testingUser);
console.log(propertyNames); // all properties

// getting a single age property descriptor
let descriptorAge = Object.getOwnPropertyDescriptor(testingUser, "age");
console.log(descriptorAge); // descriptor age

// defining multiple properties in one function
Object.defineProperties(testingUser, {
    name : { 
        value : "New Name",
        writable : false,
    },
    age :  {
        value : 15,
        enumerable : false,
    },
    printInfo : {
        enumerable : false,
    }
}); // assigning a decorator of an object

descriptors = Object.getOwnPropertyDescriptors(testingUser);
console.log(descriptors); // updated descriptors

// setting only one property : 
Object.defineProperty(testingUser, "city", {
    value : "Kyiv",
    writable : false,
    enumerable : true, 
    configurable : false
});

let descriptorCity = Object.getOwnPropertyDescriptor(testingUser, "city");
console.log(descriptorCity); // updated desctiptor 

// clone an object :
// let clone = testingUser; // referencing to one object ! 
// testingUser = null;
// clone.name (undefined)

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(testingUser));
let cloneDescriptor = Object.getOwnPropertyDescriptors(clone);

testingUser = null; // does not affect on clone object (not refereing on the 1 cell of memory)
console.log(cloneDescriptor); // clone descriptor
clone.printInfo(); // output works
