'use strict';
// https://uk.javascript.info/class

// * basic syntax : 
class User {
    constructor(name) {
        this.name = name;
    }

    printUserName() {
        console.log(this.name);
    }
}

let user = new User("Adam");

user.printUserName(); // Adam
console.log('----------------------');

// * Class expression 
let Users = class {
    constructor(name) {
        this.name = name;
    }
    printHi() {
        console.log('Hello world , ' + this.name);
    }
} 

let newUser = new Users("Nick");

newUser.printHi();
console.log('----------------------');

// the named class expression is also possible 
let namedClassExpre = class Userss {
    constructor(value) {
        this.value = value;
    }

    printHi() {
        if(this.value.length <= 4) {
            console.log(Userss);
        }
    }
}

let newUserss = new namedClassExpre("123");
newUserss.printHi(); // [class Userss]
console.log('----------------------');

// * it is possible to create a class dynamically : 
function createClass(phrase) {
    return class {
        printPhrase() {
            console.log(phrase );
        }
    }
}

let phraseClass = createClass("Hello world");

new phraseClass().printPhrase(); // creating a class-copy of class with new and then call function
console.log('----------------------');

// * getters / setters 
class Animal {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if(value.length < 4) {
            console.log('The name is too short');
            return
        } else {
            this._name = value;
        }
    }
}

let animal = new Animal("Asssso");
console.log(animal.name); // Assso 
console.log(animal); // Animal {_name : Asssso}

// ? we write _property if it works with accessor

// * we can also add class fields : 
class TestClass {
    name = "Test"; // setting as a item if we dont get a name param
    value = 14; 

    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(this.name + this.value);
    }
}

console.log('----------------------');

let item = new TestClass("Item").printName(); // Item14
// test :
function test(breed) {
    this.breed = breed;
}

let testFunct = new test("dob");
console.log(test.prototype.breed);