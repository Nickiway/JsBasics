'use strict';
// https://uk.javascript.info/class-inheritance

// * key word extends - used for create inheritance between classes
class Person { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`The user info : ${this.name} ${this.age}`);
    }
}

class Admin extends Person {
    status = true;

    printStatus() {
        return this.status;
    }
}

let admin = new Admin("Adam", 14);
admin.printInfo();

// after extends we can use any expression : 
function createClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

class Child extends createClass("Hello world"){ 

}

new Child().sayHi(); // Hello world

// Redeclaring a method :
// we can also use word 'super' that references to a prototype class to call a method or use var for ex.

class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stays still `);
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(`${this.name} hides`);
    }

    stop() {
        super.stop(); // first of all call stop of class Animal
        this.hide(); // then call this hide method
    }
}

let rabbit = new Rabbit("White rabbit");

console.log('----------------');
rabbit.run(5); // White rabbit runs with speed 5
rabbit.stop(); 

// White rabbit stays still 
// White rabbit hides

// ! arrow function don't have 'super' !! 

// * Overriding constructor :
// class Rabbit extends Animal {
// ?    generated for extending classes without own constructors
//     constructor(...args) {
//       super(...args);
//     }
//   } 

// it is the case when we use the extension and dont set a constructor to a class that inherits prototype :
 
// * to override a constructor : 
class SmallAnimal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }
}

class SmallRabbit extends SmallAnimal {
    constructor(name, earLength) {
        super(name); // calling the constructor of prototypical class
        this.earLength = earLength; // setting new values in constructor
    }
}

let smallRabbit = new SmallRabbit("Black rabbit", 15);

console.log('----------------');
console.log(smallRabbit.earLength); // 15
console.log(smallRabbit.name); // Black rabbiyt

// * Overriding a class fields: a tricky note 
class Insect {
    insectName = 'insect';
    constructor() {
        console.log(this.insectName);
    }
}

class Ant extends Insect { 
    name = "ant";
}

new Insect(); // insect
new Ant(); // insect

// that's because con uses only its fields to set the param 
// and when inherited class is declared then we call first a con 
// and then only redeclaring it's name 
// to fix it we can create a func that returns that we want :

class Flys { 
    name = "Fly";
    printName() {
        console.log(this.name);
    }
}
class Butterfly extends Flys {
    nameButterfly = "butterfly";
    printName() {
        console.log(this.nameButterfly);
    }
}

// much better
console.log('----------------');
new Flys().printName(); // Flys
new Butterfly().printName(); // butterfly


// ! Difference :t
// Чому існує різниця?
// Причина полягає у порядку ініціалізації поля. Поле класу ініціалізується:
// До конструктора для базового класу (котрий нічого не наслідує),
// Відразу після super() для похідного класу.
// У нашому випадку Rabbit – це похідний клас. У ньому немає конструктора. Як сказано раніше, це те ж саме, якби там був порожній конструктор лише з super(...args).
// Отже, new Rabbit() викликає super(), таким чином, виконуючи батьківський конструктор, і (за правилом для похідних класів) лише після того ініціалізує свої поля класу. На момент виконання батьківського конструктора, ще немає полів класу Rabbit, тому використовуються класу Animal.
// Ця тонка різниця між полями та методами є специфічною для JavaScript
// На щастя, ця поведінка виявляє себе лише якщо у перевизначене поле використовується у батьківському конструкторі. Тоді важко зрозуміти, що відбувається, тому ми пояснюємо це тут.
// Якщо це стає проблемою, її можна вирішити за допомогою методів або геттерів/сеттерів, а не полів.