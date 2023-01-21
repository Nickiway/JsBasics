'use strict';
// https://javascript.info/property-descriptors

// object's properties beside value can have three special atributes (so-called 'flags') :
// 1. writable - if true - can be changed (otherwise read-only)
// 2. enumerable - if true - can be iterated in loops 
// 3. configurable - if true - the property can be deleted and atributes can be modified

// when we create a property all the atributes are true 
// but they can be changed any time  :

// for that we use command 
// * let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
// The returned value is a so-called “property descriptor” 


// to change properties we can use : 
// * Object.defineProperty(obj, propertyName, descriptor);
// if the property does not exist -> the function creates it and set all flag value: false 

let user = {
    name : "user",
    age : 15,
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));

// Non-writable
Object.defineProperty(user, "name", {
    writable: false
  }); // if we write value only it swaps all flags

descriptor = Object.getOwnPropertyDescriptor(user, 'name');

Object.defineProperty(user, "name", {
    value : 'User'
});
descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));


// Non-enumerable
Object.defineProperty(user, "name", {
    enumerable : false
})

for (let key in user) {
    console.log(key); // age only
}

// * Non-configurable 
// let user = {
//     name: "John"
//   };
  
//   Object.defineProperty(user, "name", {
//     configurable: false
//   });
  
//   user.name = "Pete"; // works fine
//   delete user.name; // Error

// ! configurable : false - does not allows us to change the properties flags and delete the property
// ! this is one way method to ban from changing the flags and deleting the property

// * Object.defineProperties
// this command allows to define many properties at once : 
Object.defineProperties(user, {
    name : {
        value : 'newUser',
        writable : false,
        enumerable : true
    },
    age : {
        value : 16, 
        writable: false,
    }
});

let descriptorAge = Object.getOwnPropertyDescriptor(user, 'age');
let descriptorName = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptorAge); // flags and values updated successfully
console.log(descriptorName);

// * Objects.getOwnPropertyDescriptors()
// let clone = Object.assign({}, user);
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(clone.name); 


// Object.preventExtensions(obj)
// Запрещает добавлять новые свойства в объект.

// Object.seal(obj)
// Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

// Object.freeze(obj)
// Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.
// А также есть методы для их проверки:

// Object.isExtensible(obj)
// Возвращает false, если добавление свойств запрещено, иначе true.

// Object.isSealed(obj)
// Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

// Object.isFrozen(obj)
// Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.