'use strict';
// https://javascript.info/symbol // LINK

let id = Symbol("identifier");
let id2 = Symbol("id");

console.log(id == id2); // false symb with same names not equal

// * symbols are used to make some identifiers more safe
let object = {
    name : "Object",
    state : true,
    [id] : 5 // setting a key as a symbol
}

for (let ident in object) {
    console.log(ident); // everything except id 
}

// * symbol can not be converted to string automatically
// * we must use identifier .description or convert by myself

// alert(id); // TypeError: Cannot convert a Symbol value to a string
console.log(id.description); // identifier
console.log(id.toString()); // identifier

