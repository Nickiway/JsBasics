'use strict';

// the object always have boolean true
// there is no such a rewritting operants for objects like : +, -
// for that we can use HINT to understand what to do with objects and operants

// using Symbol.toPrimitive
let user = {
    name : "User",
    money : 1000,

    [Symbol.toPrimitive](hint) {
        return hint == "string" ? console.log(this.name) : this.money;
    }
}



console.log(user + 100);