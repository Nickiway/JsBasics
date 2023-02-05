console.log('Hello "world"'); // outputting console
// in Js for now is more comfortable to use unary quotes ''
// not binary ""

console.log(5 + 5);
console.log([1, 3, 4 ,5 ]);
console.log(!!'item');

// what we can output in console 

// variables 
var userName = 'John';
console.log(userName);

userName = "Marry"; 
console.log(userName);

// we can also re-declare a var with var 
var userName = "Nick";
console.log(userName);

// in let it is not possible 
let nameUI = "first";
// let nameUI = "second"; // exception

var color;
console.log(color); // undefined

// then we can initialize color : 
color = "red";
console.log(color); 

// ? ##########################################
// * Javascript names can include : 
// letters , number, $, _ 

// * Javascript names can not : 
// start with numbers 

// * CamelCase is used in Js namings :
// mainColor - example

// * there some other cases : 
// snake_case - snake case
// kebab-case - kebaa case 
// MyMainCase - pascal case
// ? ##########################################

const obj = {
    name :"user",
};

obj.age = 15;

console.log(obj);