'use strict';
// https://uk.javascript.info/static-properties-methods

class User  {
    static staticMethod() {
        console.log(this == User); // true
        return false;
    }
}

console.log(User.staticMethod()); // true

// example of using static class : 
class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }

    static createToday() {
        return new this("Today times", new Date());
    }
}

let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);
console.log(articles);

let todayA = Article.createToday();
console.log(todayA); // today.

// * static fields : 
class Animal { 
    static planet = "Earth";
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
    }
}

class Rabbit extends Animal {
    stop() { 
        this.speed = 0;
    }
}

let rabbit = new Rabbit("Rabbit");

console.log(rabbit);
rabbit.run(10);
console.log(rabbit);
rabbit.stop();
console.log(rabbit);

