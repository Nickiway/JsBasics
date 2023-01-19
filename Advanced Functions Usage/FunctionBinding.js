'use strict';
// https://javascript.info/bind 

// in case with objects : we cant use this in setTimeout for example : 
let user = {
    name : "John",
    sayName : function () {
        alert('Hello, ' + this.name);
    },
}

setTimeout(user, 1000); // Hello, undefined 

// same as : 
let f = user.sayName;
setTimeout(f, 1000); // втрата контексту об’єкта user

// * first solution : wrapper 
// using a lexical environment (global-scoped for example) : 
setTimeout(function() {
    user.sayName(); // Hello, John
}, 1000);

// looks not bad but there is a risk that the object's value will be changed and 
// it will cause an error 

// * second solution : bind 
// syntax : 
// let boundFunc = func.bind(context);

let sayName =  user.sayName.bind(user);

sayName(); // also works
setTimeout(sayName, 1000); // working 

// * Particial function  :
// full syntax :
// let bound = function.bind(context, [arg1], [arg2]...); 
// arguments of funciton can be also given : 

function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3)); // 6 => mul(2, 3);
console.log(double(4)); // 8 => mul(2, 4);
console.log(double(5)); // 10 => mul(2, 5);

// The call to mul.bind(null, 2) creates a new function double that passes calls to mul, 
// fixing null as the context and 2 as the first argument. Further arguments are passed “as is”.

// ! Please note that we actually don’t use this here. 
// ! But bind requires it, so we must put in something like null.