'use strict';
// https://javascript.info/function-prototype

// F.prototype - Function.prototype 
// If F.prototype is an object, then the new operator uses it to set [[Prototype]] for the new object. 

let animal = { 
    eats : true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.eats); // true
// setting a Rabbit.prototype = animal we say that 
// after creating an object with NEW function Rabbit
// we assign [[Prototype]] to an 'animal' object

// ! F.prototype is used only when new F is called 

// * Default F.prototype constructor property 
// every function has its prototype even if we don't supply it 
// The default "prototype" is an 
// object with the only property constructor that points back to the function itself.

// Like this:

function Rabbits() {}
/* default prototype
Rabbit.prototype = { constructor: Rabbit };
*/

// We can check it easily : 
console.log(Rabbits.prototype.constructor == Rabbits); // true

// We can use constructor property to create a new object using the same 
// constructor as the existing one 
// Like here : 

function Rabbits(name) {
    this.name = name;
    console.log(name);
}

let rabbit1 = new Rabbits("White Rabbit");
let rabbit2 = new Rabbits.prototype.constructor("Black Rabbit");

// But probably the most important thing about "constructor" is that…
// ! JavaScript itself does not ensure the right "constructor" value.

// we can change the construcotr value as we wish : 
function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit); // false

// So, to keep the right "constructor" we can choose to
// add/remove properties to the default "prototype" instead of overwriting it as a whole:

function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true
// the default Rabbit.prototype.constructor is preserved

// OR : 
Rabbit.prototype = {
    jumps : true,
    constructor : Rabbit
}; // now constructor is also correct with a new property