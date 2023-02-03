'use strict';

// ? ECMAScript 5
// const Animal = function(options) {
//     this.name = options.name;
//     this.eats = options.eats;

//     // this.voice = function() {
//     //     console.log(`${this.name} says hello`);
//     // }
// }

// Animal.prototype.voice = function() {
//     console.log(`${this.name} says hello`);
// }

// const rabbit = new Animal({name: 'Rabbit', eats: true});

// console.log(rabbit);
// rabbit.voice();


// ? ECMAScript 6+ 
class Animal {
    constructor(options) {
        this.name = options.name;
        this.color = options.color;
    }

    voice() { 
        console.log(`${this.name} says hello world!`);
    }
}

class Cat extends Animal{ 
    constructor(options) {
        super(options);
        this.hasTail = options.hasTail;
    }

    voice() {
        super.voice();
        console.log('Also i can say myau myau');
        console.log(this);
    }
}

const cat = new Cat({name: "Murzik", color: "#fff", hasTail: true});

cat.voice();
console.log(cat.__proto__.constructor === Cat); // true
console.log(cat.__proto__.__proto__.constructor === Animal); // true


// creating 
class Person { 
    _identical = 0;
    speed = 0;
    state = 1;

    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.sex = options.sex;
    }

    get identical() {
        return this._identical;
    }

    set identical(value) {
        if (value < 10**5) {
            console.log("Too short identical number");
            return;
        } else {
            this._identical = value;
        }
    }

    // method walk
    walk(value) {
        this.speed = value;
    }

    // method stop
    stop() {
        this.speed = 0;
        this.state = 2;
    }

    // method talk
    talk() {
        console.log('Hello world');
    }
}

class Programmer extends Person {
    #work = "Apple";

    constructor(options) {
        super(options);
        this.salary = options.salary;
    }
}

let programmer = new Programmer({name: "Nick", age: 19, sex: "male", salary: 1600});

console.log('---------------');  
programmer.identical = 15**5;
console.log(programmer); // info 

programmer.stop();
console.log(programmer); // info 