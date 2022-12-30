// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

function showMessage() {
    console.log("Hello world !");
}

// ? casual function
// function name(parametr1,parametr2,parametr3,... parametrN) {
   // body
// }

// calling a function
showMessage();
showMessage();

// ! Local variables 
// * we using a local variable only in the functions 
// ? A variable declared inside a function is only visible inside that function.

function showMessageLocal() {
    let message = "Hello the World of Polska";
    console.log(message);
}

showMessageLocal(); // "Hello the World of Polska";
// * console.log(message); // Error

// ! Outer variables 
let userName = "John";

// * we can call the outer variable inside the function

function outputName() {
    userName = "Bob";
    console.log(userName);
}

// ? before calling a function
console.log(userName); // John

// ? after calling a function 
outputName();
console.log(userName); // Bob

// ! outer variable is only used if there is no local variable 

function functionWithLocal() {
    let userName = "Local";
    console.log(userName);
    // ! in that case we dont work with outer variable !
}
functionWithLocal();
// output Local

// ! parametrs 
function printUser(name , surname , middleName) {
    console.log(`Welcome back , ${name} ${surname} ${middleName}`);
}
printUser('Nick', 'Mari', 'Son');
// output Welcome back, Nick Mari Son

// ! you can change the parametr in function ALTHOUGH as outter it will not change

function replaceItem(person) {
    person = "*" + person + "*";
    console.log(person);
}

let person = "Anna";
replaceItem(person);
// output *Anna*

console.log(person);
// wont change and output Anna

// ! default values 
// * you can set a default values in function

function showMessageDefault(name="Username", surname="Nickname") {
    console.log(name + " " + surname);
}

showMessageDefault();
showMessageDefault("Nik", "Nickiway");
showMessageDefault("Nik", undefined);
showMessageDefault("Nik", null); // null != undefined (output : Nik null)

// ! also can be used operator OR (||) or nullish coalescing operator (??)

//! Returning a value 
function summary (a = 1, b = 2) {
    return a + b;
}

console.log(summary(3, 4)); // 7
// * return can be in any part of function and when the function reached it, function stops
// * sometimes return can work as break;

function checkAge(age=18) {
    if (age < 18) {
        return "You are under age";
    }
    return "You are mature already !";
}

console.log(checkAge(17)); // You are under age

// ! it is also possible to return without a value ;
function returnNonValue() {
    return;
}
// ? an empty return is the same as RETURN UNDEFINED
console.log(returnNonValue() === undefined); // true (undefined) 
// * usually it is used just for calling stop-point as break;

// ! NEVER ADD A NEW LINE BETWEE RETURN AND VALUE
// // return 
// // VALUE ;

// * if you want to set a new line use this : 
// return (
//     item +  newItem 
//     + or + someItem
// )

// ? Function naming  : 
// * use first verb like this : 
// "get…" – return a value,
// "calc…" – calculate something,
// "create…" – create something,
// "check…" – check something and return a boolean, etc.

// ! Remember 1 FUNCTION = 1 ACTION
// * if the function getAge() we getting age there only 