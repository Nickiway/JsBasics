'use strict';

// * creating a new object
let person = new Object(); // object constructor 
let user = {}; // syntax of literal object

// * if we creating an object with values 
person = {
    name : "Ivan",
    age : 30
};
// name , age - are keys and they have their values

// ouput person : 
console.log(person);

// * we also can call actually one property / name / identifier
console.log(person.name); // output Ivan

// ! the value can be any type and we can change them to any type : 
person.age = true;
console.log(person); 

// ? to remove the property we can use also the command delete
delete person.age;
console.log(person);

// ! WE CAN ALSO USE MULTIWORD PROPERTY NAMES LIKE :
let client =  {
    name : "Ivan",
    "Identefical code of the client" : 5555
};
console.log(client);
// ! NOTICE THAT THE LAST PROPERTY ___MAY___ END WITH A COMA
// let user = {
//     name: "John",
//     age: 30,
// }

// ! TO CALL MULTIWORD IDENTIFIER WE CAN NOT USE DOT : 
// this would give a syntax error
// * user.likes birds = true

// ? there an alternative "square bracket notation" that works with any string 
console.log(person["name"]);
// delete person["name"];
// * any types of quotes will do !

// ! Square brackets also provide a way to obtain the property name as the result of 
// ! any expression – as opposed to a literal string – like from a variable as follows:
let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

// ! COMPUTED PROPERTIES :

let fruit = "apple"; 
let bag = {
    [fruit] : 5
};
console.log(bag.apple);

// * another way of setting a indentifier
// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {};

// take property name from the fruit variable
// bag[fruit] = 5;

// * also can be done
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// ! Property value shorthand 
function createUser(name, age ) {
    return {
        name : name,
        age : age,
    } 
}

// setting like a constructor
let user1 = createUser("John", 50);
console.log(user1);


let userName = null;
function printName(name) {
    return name;
}

// * just 1 more exp
// let fruits = "apple";
// let obj = {
//     [fruits] : "Object"
// };

// ? we can use proto for set another object value 

let chair = { 
    name : "Krzeslo",
    size : "small"
};

let house = {
    name : "House",
    chair : chair
};
let newObj = {
    firstObj : house,
    seconObj : chair
};

for (let key in newObj) {
    console.log(newObj[key].name);
}