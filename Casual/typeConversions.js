// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

//? USING COMMAND TYPEOF
let value = true;
// boolean
console.log(typeof value); //* console.log(typeof(value));

//? CONVERTING TO STRING
//! IF BOOLEAN FALSE == 'FALSE' IF TRUE == 'TRUE'
value = String(value);
// string
console.log(typeof value);

//? THE JS CONVERTS ITEMS TO NUMBER IN DIVIDING E.X
//* the same things : 
// 3
console.log('6' / '2');
console.log('6' / 2);
console.log(6 / '2');

let str = "123";
// string
console.log(typeof str);

//? CONVERT STRING TO NUMBER
//* commands to parse to Number => +"string", Number("string"), parseInt("string")
let num = +str; 
num = Number(str); 
num = parseInt(str);

num = +"dasdasd"; //! IN THAT CASE WE GET NAN 
// NaN
console.log(num);

//? NUMERIC CONVERTS 
// undefined => NaN;
// null => 0;
// true or false => 1 or 0;
// "" => 0 or "dasdasd" => NaN;
// "   123    " => 123

//? BOOLEAN CONVERTS
//* Convert to boolean => Boolean(int)
// 1 or higher => true
// 0 => false
// "asdsadas" => true //! STRING IS NOT EMPTY
// "" => false //! STRING IS EMPTY
//! WARNING
// "0" => true (stirng is not empty)
// "    " => true (stirng is not empty, spaces also true)
