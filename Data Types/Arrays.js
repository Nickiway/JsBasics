'use strict';
// https://uk.javascript.info/array // Link

// declaration 
let array = new Array();
let arraySecond = []; // two ways of declaring 

// we can set a start values in brackets : 
let bin = ["Apples", "Pineapples", "Bananas"];

// we can access elements : 
console.log(bin[0]); // Apples 

// ? we can also change the value of array when in string we could not : 
bin[0] = "Lemons";
console.log(bin[0]); // Lemons 

// to get the length of array we use property : length
let binLength = bin.length;
console.log(binLength); // 3

// in arrays we can save any type elements : 
let trashBin = ['Apples', true, 0, {name : "Something", age : 15}];
console.log(trashBin[0]); // Apples
console.log(trashBin[3].age); // 15

// Кома в кінці
// Список елементів масиву, як і список елементів об’єкту може закінчуватись комою:

// let fruits = [
//   "Apple",
//   "Orange",
//   "Plum",
// ];
// ! Кома в кінці спрощує процес додавання/видалення елементів, тому що всі рядки стають однотипними.

// * array.at(index); 
// this method is the same as casual array[index]
// however we can set there a negative valeu of index and start search from begining : 

console.log(bin.at(-1)); // Bananas
console.log(bin.at(-2)); // Pineapples

// Іншими словами, arr.at(i):

// те ж саме що й arr[i], якщо i >= 0.
// для негативних значень i він шукає елемент відступаючи від кінця масиву.

// * push() , pop() , shift(), unshift()
// push - add to end 
// pop - delete the last item in the array

// shift - delete the first element of the array
// unshift - add the first element of the array

// ? when we use function pop / shift => the element to be deleted 
console.log('-------------------');
console.log(bin.pop()); // Bananas (delete)
bin.push("Bananas added"); // Bananas added (added)

console.log(bin.shift()); // Lemons (deleted)
bin.unshift("Lemons added"); // Lemons added (added)
console.log('-------------------');

console.log(bin); 

// ! how not to use the array : 
// Варіанти неправильного використання масивів:

// * Додавання нечислових властивостей, таких як arr.test = 5.
// * Створення “дірок”, наприклад: arr[0] а за ним arr[1000] (та нічого між цими елементами).
// * Заповнення масиву в зворотньому порядку, наприклад: arr[1000], arr[999] і т. д.

// ! Shift / Unshift works SLOWER 
// as the function have to do 3 operation in this case : 

// 1. delete / add item in the begining 
// 2. move all items right / left 
// 3. update the property length.

// ? more items in array => slower the operation be done

// * Loops
// we can use casual for :
console.log('-------------------');
for (let index = 0; index < bin.length; index++) {
    console.log(bin[index]); // output all fruit
}

// we can use for of :
console.log('-------------------');
for (let fruit of bin) {
    console.log(fruit); // output all fruit
}

// as the array based on object we can also use for .. in :
console.log('-------------------');
for (let index in bin) {
    console.log(index); // all indexes [0-2]
}
// ! however for..in is iterating all properties (also identifiers)
// ! this loop works slower as it adopted to all objects 
// ! forOf is apodted to arrays and works faster

// * Facts of LENGTH
// length - is the index of last element + 1

console.log('-------------------');
let testArray = [];
testArray[123] = "item"; // ? this is not recommended do like this (element of 0 is as 123)
console.log(testArray.length); // 123 + 1 = 124

// we also can change the length by myself 
testArray = [1, 2, 3, 4, 5];

testArray.length = 2;
console.log(testArray); // 1,2

testArray.length = 5; 
console.log(testArray); // [ 1, 2, <3 empty items> ]


// * new Array()
// we can use it as a [] 
// however if we set 1 digit in the brackets => we set the length :
console.log('-------------------');
let arr = new Array(10);
console.log(arr); // <10 empty elements>

// * Matrix
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][0]); // 1

// * toString()
console.log('-------------------');
let stringArr = [1,3,4 , 6];
console.log(String(stringArr)); // "1,3,4,6" (string converted)

console.log(stringArr + 1); // "1,3,4,61" 
// same as :
console.log("1,3,4,6" + 1);