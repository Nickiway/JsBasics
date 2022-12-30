'use strict'; 

// ? primitive copy example 
// * here we copying the primitive value 
let message = "Hello world";
let copyMessage = message;

// ! However in objects we copy not there key (identifier) / value 
let user = {
    name : "Misha"
}

// * in that case we storing a reference in person var of obj user
let person = user;

// * we can use as user var a person var : 
console.log(person.name);

// ? in that case we reference to the object user and getting its identifier (name)
// ? that way help us to save more memory 

// ! COMPARISON BY REFERENCE
let a = new Object();
let aRefernce = a;

console.log(a == aRefernce); // true (both refernces to obj a)
console.log(a === aRefernce); // true 

// ? However 
let b = new Object();
console.log(a == b); // false (two different objects)
console.log(a === b); // false 

// ! const object : the value can be changed but not added
const obj = {
    name : "Mis",
}
obj.name = "Nik";
console.log(obj);


// ? Cloning and merging the object (adding a)
let boy = { 
    name : "Nick"
}
let edit = {
    canEdit : true,
}
let view =  {
    canView : true,
}
console.log(boy); // name
edit = Object.assign(boy , edit , view);
console.log(boy); // name , canEdit, canView

// * Object.assign can take lots of objects 
// * if key exists already it overwritten 

Object.assign(boy, {name : "John"});
console.log(boy);

// ? we also can use Object.assign to make simple object cloning
let clone = Object.assign({}, boy);
console.log(clone); // same as boy

// ! nestead cloning  
let dog = { 
    name : "Misha",
    size : {
        width : 14,
        height : 51
    }
}

// * if we use just Object.assign:
let clonedDog = Object.assign({}, dog);
// * and start work with size obj the reference will be to 1 object and : 
clonedDog.size.width++ ;
console.log(dog.size.width); // 15 (must be 14)

// * this happens cuz we have 1 reference in 2 objects 