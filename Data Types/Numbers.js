'use strict';
// https://uk.javascript.info/number // LINK
// Numbers

// Exist two number types : casual 64-bit and BigINT
// * ways to write down the number : 
let number = 1000000;

// ? also we can use _ sign for dividing nulls
let number_ = 1_000_000; 
console.log(number); // 1 000 000
console.log(number_); // 1 000 000

// ? we also can use 'e' sign to specify the number of 0 in numb : 
let billion = 1e9;
console.log(billion); // 1 000 000 000

// * e multuply the number with the number of 0
// we can also use negative value : 
let micro = 1e-6; // 0.000001;
console.log(micro);

// * HEX, BINARY AND OCTAL NUMBERS
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides

// * toString(base)
// we can convert int to any number type like : 

let num = 255;
console.log(num.toString(2)); // 11111111 (binary type)
console.log(num.toString(16)); // ff (hexodemical type)

// calling double dot : 
console.log(12345..toString(2)); // 11000000111001

// ! we are using a double dot as a number can have a fragile part and we must show that it does not have it
// * we also can write like : 
console.log((12345).toString(16));  // 3039

// Math.round => 3.2 == 3 / 3.6 == 4
// Math.trunc => 3.2 == 3 / 3.6 == 3 (delete after dot everything)

// * toFixed()
let numberRound = 12.34;
let numberRound_ = 12.36;

console.log(numberRound.toFixed(1));  // 12.3
console.log(numberRound_.toFixed(1));  // 12.4 
console.log(12.356.toFixed(1));  // 12.4 

// ! if the number is less than after dot : 
console.log(numberRound_.toFixed(10)); // 12.3600000000
// * this command round the nubmer as a round command 

// ! REMEMBER 
console.log(+(0.1 + 0.2).toFixed(1) == 0.3 ); // 0.30000000000000004

// * isNaN() and isFinite()
console.log(isNaN("123")); // false number
console.log(isNaN(123)); // false number
console.log(isNaN("123ASD")); // true
console.log(isNaN(Infinity)); // false number
console.log("---------------");
console.log(isFinite("1234")); // true 
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
// ! 
console.log(NaN == NaN); // false as NaN unique

// ! Object.is(a, b) the same as a === b 
// * the con of using it is that we can compare NaN === NaN - true :
console.log("---------------");
console.log(Object.is(NaN, NaN)); // true
// although : NaN !== NaN
console.log(Object.is(0, -0)); // false 

// ! parseInt() parseFloat()
// * this function are more flexible in use : 

// with + or Number() we can convert strictly string to number : 
// +(123w) = NaN
// hovewer : 
// parseInt(123w) = 123 , the function will convert to int untill the end or it meet the not a digit

console.log("---------------");
console.log(parseInt('100px')); // 100
console.log(parseFloat('12.5ex')); // 12.5
console.log(parseFloat('12.3.4')); // 12.3

// ! Warning :
console.log(parseInt('a123')); // NaN as the first item is not a digit

// the function pareseInt has a second argument : radix
// radix - the type of number conversiot 

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255

// Math.random() => (1, 1)