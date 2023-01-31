'use strict';
// https://uk.javascript.info/private-protected-properties-methods

class Person { 
    _status = false;
    #size = 10; // standart
    get status() { 
        return this._status;
    } 

    set status(value) {
        this._status = !!value ?? false
    }

    set size(value) {
        if (!isNaN(+value)) {
            this.#size = value;
        }
    }

    get size() {
        return this.#size;
    }

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Boy extends Person{ 
    static sex = "Male";

    constructor(name, age, height) {
        super(name, age);
        this.height = height;
    }
    
    printSex() {
        console.log(this.sex);
    }

    printAllInfo() {
        console.log(`${this.name} ${this.age} ${this.sex} ${this.height}, ${this.status}`);
    }
}

let boy = new Boy("Nick", 18, 185);
boy.status = 'adsad';
boy.printAllInfo();
console.log(boy.size = 15);