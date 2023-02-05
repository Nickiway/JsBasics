'use strict';

const name = "Nick";
const surname = "Shkitak";

// concatanation :
console.log(name + surname); // used as plus

// escaping : 
const greetings = 'I\'m 14 years old'; // using back slash for escaping

console.log(greetings);

// string methods and properties : 
let length = greetings.length;

console.log(length); // 14 
console.log('object'.length); // 6

// concat function : 
console.log(name.concat(' ', surname)); // Nick Shkitak

let result = surname.toLocaleUpperCase(); 

console.log(surname);
console.log(result); 

result = surname.toUpperCase();

// * JavaScript's string are immutable , we need to reasign vars to change

// indexOf - finds the index of item that given as argumen (starts from the begining)
// lastIndexOf - finds the index of item that given as argumen (starts from the end)

console.log('Hello'.indexOf('l')); // 2
console.log('Hello'.lastIndexOf('l')); // 3
console.log('Hello'.lastIndexOf('z')); // -1 (not found)

// also we can look for the combination of letter : 
console.log('Hello my world! '.indexOf('wor')); // 9

// charAt - indexing through the string  :
console.log('Hello'.charAt(0)); // H

// to get the last symbol of the stirng : 
result = 'Hi i am a long string';
console.log(result.charAt(result.length - 1)); // g 

// completing a task of writing the string in wice verse way
let wiceWerseString = '';

for (let index = 1; index <= result.length; index++) {
    wiceWerseString += result.charAt(result.length - index);
}

console.log(wiceWerseString);


let longString = 'Hello world, how are you?';

// string.substirng(indexStart, indexEnd);
console.log(longString.substring(0, 5)); // from 0 index to 5 (not included) => Hello

// string.slice(indexStart, indexEnd);
// string.slice(+(-) numberOfLetter)

console.log(longString.slice(0, 5)); // Hello 
console.log(longString.slice(-5)); // first 5 letter from the end 

// string.split() => arrays ;
let splitArray = longString.split(' '); 

console.log(splitArray); // [ 'Hello', 'world,', 'how', 'are', 'you?' ]

// string.replace() 
console.log(longString = longString.replace('Hello', 'Bye'));

// stirng.includes()
console.log(longString.includes('Bye')); // true