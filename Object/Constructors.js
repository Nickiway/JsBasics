'use strict';
// ! Constructors 

// constructor
function User(name) {
    if(new.target) {
         this.name = name;
        this.isAdmin = false;
    }
}

// casual function that sets values to object
function User2(name) {
    return {
        name: name,
        isAdmin : false
    }
}
let user = new User("Ivan");
let user2 = new User2("Ivan");
let user3 =  User("Ivan");
console.log(user);
console.log(user2);
console.log(user3);


// can be used without parantheses (//! BUT IT IS NOT CONSIDERED A GOOD STYLE)
let object = new Object;
object.name = "Object";
// * new.target is used to check if we using method with 'new'

// ? method in constructor
function Person(name) {
    this.name = name;
    this.status = "Unmarried";
    this.printName = function () {
        console.log(this.name);
    }
}

let person = new Person("Johnatan");
person.printName();

// ! OPTIONAL CHAINING
// * we can use ?. to extract the identifier value in case of it existance and return undefined if
// * if there is no such a property 
let cat = {
    size : {
        width : 100,
        length : 100
    }
};

// * if we want to access height (however this property does not exists and we dont know about it: )
// * we can use : 
console.log(cat.size?.height); // undefined
console.log(cat.size?.width); // 100

// ! Other variants [], () : 
let userAdmin = {
    name : "Admin",
    admin() {
        console.log("I am an admin");
    }
};
let userGuest = {};

userAdmin.admin?.(); // case of calling the function admin that exists

userGuest.admin?.(); // undefined

// []
// * we also can use [] for an identifier of obj : 
console.log(userAdmin?.["name"]);

// ! we can also use OPTIONAL CHAINING
console.log(userAdmin);
delete userAdmin?.name; // delete user.name if exists

console.log(userAdmin);



// ! We can use ?. for safe reading and deleting, but not WRITING
// let user = null;

// user?.name = "John"; // Error, doesn't work
// * because it evaluates to: undefined = "John"