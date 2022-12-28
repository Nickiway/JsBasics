// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';
let a, b = null;
a = "user";
b = "nickname";

// if var declared and we want to check whether it we use //! "??"
let result = (a !== null && a !== undefined) ? a : b;
console.log(result);

// * else 
result =  a ?? b;
console.log(result);

console.log(a && b);