'use strict';

// https://javascript.info/primitives-methods // Link
// * There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

// Вот парадокс, с которым столкнулся создатель JavaScript:
// Есть много всего, что хотелось бы сделать с примитивами, такими как строка или число. Было бы замечательно, если бы мы могли обращаться к ним при помощи методов.
// Примитивы должны быть лёгкими и быстрыми насколько это возможно.

// Выбранное решение, хотя выглядит оно немного неуклюже:
// 1. Примитивы остаются примитивами. Одно значение, как и хотелось.
// 2. Язык позволяет осуществлять доступ к методам и свойствам строк, чисел, булевых значений и символов.
// 3. Чтобы это работало, при таком доступе создаётся специальный «объект-обёртка», который предоставляет нужную функциональность, а после удаляется.

// Каждый примитив имеет свой собственный «объект-обёртку», которые называются: String, Number, Boolean, Symbol и BigInt. Таким образом, они имеют разный набор методов.
// К примеру, существует метод str.toUpperCase(), который возвращает строку в верхнем регистре.
// Вот, как он работает:

let string = "The string";
// alert(str.toUpperCase());

// Очень просто, не правда ли? Вот, что на самом деле происходит в str.toUpperCase():

// Строка str – примитив. В момент обращения к его свойству, создаётся специальный объект, который знает значение строки и имеет такие полезные методы, как toUpperCase().
// Этот метод запускается и возвращает новую строку (показывается в alert).
// Специальный объект удаляется, оставляя только примитив str.

// * INT : 
let num = 1.23456;
// alert( num.toFixed(2) ); // 1.23

// difference between object and primitive : 
let intNum = 0; // primitive
let objNum = new Number(0); // object

// * it is highly recommended not to use the object instead of primitive :
let result = !intNum ? "The number is 0" : "The number is not 0";
console.log(result); // the number is 0

result = !objNum ? "The number is 0" : "The number is not 0";
console.log(result); // the number is not 0

// ! object always return in IF the true

// * however without new it converts item to a primitive 
let number = Number("1235"); // 1235
console.log(number);

// ! NULL AND UNDEFINED HAS NO METHODS
// TODO : 
// function Object(name, count) {
//     if(!new.target) {
//         return new Object(name, count);
//     }
//     this.name = name;
//     this.count = count;
// }

// let object = new Object("Object", 15);
// console.log(object.name);
// console.log(object.count);
