'use strict'
// https://uk.javascript.info/private-protected-properties-methods

// * Захищені властивості зазвичай починають з підкресленням _.
class CoffeMachine {
    _waterAmount = 0;
    set waterAmount(value) {
        if(value < 0) {
            this._waterAmount = 0;
        }
    }

    get waterAmount() {
        return this._waterAmount;
    }

    get power() {
        return this._power;
    }
    constructor(power) {
        this._power = power;
        console.log(`Created coffee machine with power : ${this.power}`);
    }
}

let coffeMachine = new CoffeMachine(100);
coffeMachine.waterAmount = -120; 
console.log(coffeMachine);

// * private : 
// Приватні властивості і методи повинні починатися з #. Вони доступні лише з класу.

class CoffeeMachinee {
    #waterLimit = 200;

    #fixWaterAmount(value) {
        if (value < 0) return 0;
        if (value > this.#waterLimit) return this.#waterLimit;
    }
    setWaterAmount(value) {
        this.#waterLimit = this.#fixWaterAmount(value);
    }
}

let coffeeMachinee = new CoffeeMachinee();
// не можна отримати доступ до приватних властивостей і методів ззовні класу
// coffeeMachine.#fixWaterAmount(123); // Помилка
// coffeeMachine.#waterLimit = 1000; // Помилка
// але можна використовувати аксесори для цього 

// ! this[fieldName]
// class User {
//     surname = "Someone";

//     constructor(name) {
//         this.name = name;
//     }

//     printHi() {
//         console.log(`Hello, ${this.surname}`);
//     }
// }

// let user = new User("Nick").printHi();


