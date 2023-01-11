'use strict'; 
// https://javascript.info/destructuring-assignment

// Array destructuring  : 
let arr = ["John", "Anderson"];
let [firstName, lastName] = arr;

console.log(firstName); // John
console.log(lastName); // Anderson

// * The same as : 
// let firstName = arr[0];
// let surname = arr[1];

// * To ignore items use comas : 
// second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
// alert( title ); // Consul

// * …Actually, we can use it with any iterable, not only arrays:
// let [a, b, c] = "abc"; // ["a", "b", "c"]
// let [one, two, three] = new Set([1, 2, 3]);

// * Assign to anything at the left-side : 
// let user = {};
// [user.name, user.surname] = "John Smith".split(' ');

// alert(user.name); // John
// alert(user.surname); // Smith

// * Looping with .entries()
// In the previous chapter we saw the Object.entries(obj) method.
// We can use it with destructuring to loop over keys-and-values of an object:

//  let user = {
//   name: "John",
//   age: 30
// };

// loop over keys-and-values
// ! for (let [key, value] of Object.entries(user)) {
//   alert(`${key}:${value}`); // name:John, then age:30
// }

// * Swap variables trick
// let guest = "Jane";
// let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
// [guest, admin] = [admin, guest];

// alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// * The rest '...'
// if we need to safe the rest of items when destructuring array to another array : 
let [name1, name2, ...rest] = ['John', 'Mike', 'Ivan', 'Kile'];

console.log('--------------');
console.log(name1); // Mike
console.log(name2); // John
console.log(rest); // Ivan, Kile 

// * Default Values : 
[firstName, lastName] = [];

console.log('--------------');
console.log(firstName); // undefined
console.log(lastName); // undefined

// In that case : 
[firstName = "Mike", lastName = "Anderson"] = ["Johnatan"];

console.log('--------------');
console.log(firstName); // Johnatan (set new value)
console.log(lastName); // Anderson (default value)


// * Object destructuring  : 
let  object = {
    title : "Hello",
    main : "World",
    length : 123,
}

let {title, main, length} = object; // setting new values to variables

// ! The order does not matter :
// the values will set according to the vars and identifiers names : 
// title -> title / main -> main / etc...

// * the same : 
// let {main, length, title } = {title:  "HelloWorld", length : 1555 , main : "Something new" };

// * if we want  to set a new name of variables : 
let {title : ti, main : ma, length : newLength} = object;

console.log('--------------');
console.log(ti); // title
console.log(ma); // main
console.log(newLength); // length

// we can also set a default values : 
let {length : theLength = 100, main : theMain = "Main", title : theTitle} = {title : "New York"};

console.log('--------------');
console.log(theLength); // 100 (default)
console.log(theMain); // Main (default)
console.log(theTitle); // New York (set)

// * The rest pattern (...rest)
let customer = {
    customerName : "John",
    balance : 1323,
    status : "customer"
}

let {customerName, ...ObjRest} = customer;

console.log('--------------');
console.log(customerName); // John
console.log(ObjRest); // {balance : 1323, status : "customer"}


// * GOTCHA IF THERE’S NO LET
// let title, width, height;

// error in this line
// {title, width, height} = {title: "Menu", width: 200, height: 100}; // ERROR (won't work)

// to make it correct use '()' : 
({main, length, title} = {main : "Hello My man", title : "How is it going ? ", length : 1235});

console.log('--------------');
console.log(main);
console.log(length);
console.log(title);

// * Nested destruction :
// if we use as a value  another object we can the code more complex : 
// let options = {
//     size: {
//       width: 100,
//       height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
//   };
  
//  ?  destructuring assignment split in multiple lines for clarity
//   let {
//     size: { // put size here
//       width,
//       height
//     },
//     items: [item1, item2], // assign items here
//     title = "Menu" // not present in the object (default value is used)
//   } = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200
//   alert(item1);  // Cake
//   alert(item2);  // Donut

// * Smart function parameters 

// this is a bad way to write such a function as too many parametrs
// function showMenu(title = "Menu", width = 120, height = 120, items = ["item1", "item2"]) {
//     console.log(`${title} ${width} ${height}`); 
// }

// ? when we have a lot parametrs it becames unreadable 

// so in that case we use 'destructurizing' for the function :
let menuObj = {
    title : "Menu", 
    width : 120,
    height : 120, 
    items : ["item1", "item2"],
}

function outputMenu({
    title = "Default menu",
    width : w = 130,
    height : h = 130,
    items = ["Item1", "Item2"]
} = { }) 
    {
        console.log("-------------------");
        console.log(title);   
        console.log(w);   
        console.log(h);   
        console.log(items);   
    }

outputMenu();


// Todo : (Completed)
let salaries = {
    "John" : 100, 
    "Pete" : 300, 
    "Mary" : 250
}

let maxSalary = 0, personName;
for (let [person, salary] of Object.entries(salaries)) {
    if (maxSalary <= salary) {
        [personName, maxSalary] = [person, salary];
    }
}
console.log(personName + " " + maxSalary); // Pete 300