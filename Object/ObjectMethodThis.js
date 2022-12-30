'use strict';

let user =  {
    name : "Nick",
    age : 30
}

user.sayHi = function() {
    console.log("Hello");
};

// * here we used expression
// ! although we can also create a function as in object 

let user2 = {
    name : "Nick", 
    age : 30,
    sayHi : function() {
        console.log("Hello");
    }
}

user.sayHi();
user2.sayHi();

// ? this in the method 
// * it is used to get access to an object identifiers 
let user3 = {
    name : "Peter",
    sayHi : function() {
        console.log(this.name);
    }
}
user3.sayHi();

// * it s also possible to reference to an object using a outer var however it s less flexible for function
// let user = {
//     name: "John",
//     age: 30,
  
//     sayHi() {
//       alert( user.name ); // leads to an error
//     }
  
//   };
  
  
//   let admin = user;
//   user = null; // overwrite to make things obvious
  
//   admin.sayHi(); // TypeError: Cannot read property 'name' of null

// ! “this” is not bound
// * The value of this is evaluated during the run-time, depending on the context.

// * For instance, here the same function is assigned to two different objects and has different “this” in the calls:

//  let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert( this.name );
// }

 // * use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

 // * these calls have different this
 // * "this" inside the function is the object "before the dot"
// user.f(); // * John  (this == user)
// admin.f(); // * Admin  (this == admin)

// admin['f'](); // * Admin (dot or square brackets access the method – doesn't matter)

function getName() {
    return this.name;
}

let dog = {
    name : "Arty",
    getDogName : getName,
}

console.log(dog.getDogName()); // Arty

// ! Arrow function has no 'this'
// let user = {
//     firstName: "Ilya",
//     sayHi() {
//       let arrow = () => alert(this.firstName);
//       arrow();
//     }
//   };
  
//   user.sayHi(); // Ilya

// * in this case we referencing outer object user
