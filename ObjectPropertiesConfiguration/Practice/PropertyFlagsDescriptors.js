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
}); // assigning a descriptor of an object

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


// usage of commands on setting the particular values for flags : 
// Object.preventExtensions(obj) => obj (can  not ADD new property)
// Object.seal(obj) => obj (can not ADD / DELETE property)
// Object.freeze(obj) => obj (can not DELETE/ADD/REWRITE property)

let newUser = {
    name : "John",
    age : 15
};

let newUserDescriptor = Object.getOwnPropertyDescriptors(newUser);
console.log(newUserDescriptor); // descriptors

// * 1
// Object.preventExtensions(newUser);
// newUser.state = "Orizona";
// console.log(newUser); // Error : can not add property

// * 2
// Object.seal(newUser);
// delete newUser.age; // Error : can not delete / add

// * 3
// Object.freeze(newUser);
// newUser['age'] = 17; // Error : can not delete / add / rewrite (assign)
