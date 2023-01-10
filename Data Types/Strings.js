'use strict';
// https://uk.javascript.info/string

// quotes 
let single = 'sigle quotes';
let double = "double quotes";
// single == double 

let backticks = `backticks`;
// in backticks can be used ${var} and :
let multiple = `Hotels : 
* Hotel1
* Hotel2
* Hotel3
* Hotel4
* Hotel5`;

// in double or single we cant use enter (new row) = exception
console.log(multiple);

// to get the length of string : 
let lengthString = multiple.length; // length - property (not a function)
console.log(lengthString); // 54

// symbol access : 
// stirng as an array thus we can just iterate in string : 
let firstSymbol = multiple[0]; // H

// ! however we cannot change the value of symb : (string are not changable)
// multiple[0] = "S"; // Error !
// if we iterate on position >= string.length = undefined

// Changing the case  :
// * can be used commands : string.toLowerCase() / stirng.toUpperCase();
console.log(multiple.toUpperCase()); // upper case 
console.log(multiple.toLowerCase()); // lower case

// we also can use case change for a particular symbol : 
console.log(multiple[0].toLowerCase());

// str.IndexOf(substr, posit);
// this method used to search substr in string
// returns index of position OR -1 IF NOT FOUND
let mainString = "Item that are used here : ";
let substr = "that";

console.log(mainString.indexOf(substr)); // 5

// pos - the position begin with : 
console.log(mainString.indexOf(substr, 7)); // -1

// reverse method to str.indexOf() => str.lastIndexOf(substr, pos) 
// this method look for the substr from the end : 
console.log(mainString.lastIndexOf(substr)); // 5

// more modern method str.includes(substr, pos) => true / false 
console.log(mainString.includes(substr)); // true 
console.log(mainString.includes("something")); // false 

// function str.startsWith(substr) / str.endsWith(substr)
// they return true / false if the string start with the substr 
// or end with the substring 

console.log(mainString.startsWith("Ite")); // true
console.log(mainString.endsWith(": ")); // true

// getting a substring : 
// there are 3 methods : substring, substr, slice : 
// * string.slice(start, [, end])
console.log("-------------------------");
console.log(mainString.slice(0, 4)); // from 0 to 4 (not included) => Item
// if the second argument is not given -> returns symbol to the end of string : 
console.log(mainString.slice(4)); // from 6 pos to end  : 

// we can also use negative values : 
// than we ll start from the end : 
console.log(mainString.slice(-7, -3)); // from 7 index from end to 3 from end : -> 'here'

// * sting.substring(start, [, end])
// slice and substring are the same (almost)
// ! however the difference :

console.log(mainString.substring(2, 6));
console.log(mainString.substring(6, 2)); // are the same 

// when in slice 
console.log(mainString.slice(2, 6)); // the same 
console.log(mainString.slice(6, 2)); // "" (empty string) as the start bigger than end 

// ! in substring we cannot use negative values -> they will be converted to 0

// * string.substr(start, [, length]);
console.log(mainString.substr(5, 4)); // start pos = 2 and length : 4 (that)
// ! first argument can be negative to count from begining : 

console.log(mainString.substr(-5, 4)); // 5 from end 

// ! in comparison lower case is bigger that upper ! 
console.log("-------------------------");
console.log('a' > 'z'); // false
console.log('a' > 'Z'); // true