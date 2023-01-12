'use strict'; 
// https://javascript.info/json

// ! commands list : 
// JSON.stringify(object) - from object -> string
// JSON.prase(string) - from string  -> object


// ! full JSON syntax 
// JSON.stringify(object, replacer, space)
// replacer -> array of properties to be converted by JSON or a function (key, value)
// space -> the number of space / actually works for formating only

// JSON.parse(str, [reviver])
// str - string to object
// reviver - function (key, value) to work with before returning to the object


let student = {
    name : "Nick", 
    age : 18,
    grade : true, 
    courses : ['html', 'js', 'css']
};

console.log(student); // object student 

student  = JSON.stringify(student);
console.log(student); // string converted to JSON 

student = JSON.parse(student); // convert back to object 
console.log(student); // object student 

// * JSON works with primitives only 
// ! Will be ignored : 
// functions 
// Symbolic keys and values 
// Keys with undefined values 

let empty = {
    sayHi() {"Hello"}, // ignored
    something : undefined, // ignored 
    [Symbol("id")] : 1, // ignored
}

empty = JSON.stringify(empty); 
console.log(empty); // {} (empty object)

// * nested objects are supported and converted authomatically
let object =  {
    nestedObj : {
        time : new Date(),
        name : "Date",
    },
    name : "Date",
}

console.log(JSON.stringify(object));

// ! THERE MUST BE NO CIRCULAR REFERENCES.

let room = { 
    number : 23,
};

let meetup  = {
    title : "Conference",
    participants : ["John"],
};

meetup.place = room; // meetup reference room
// room.occupiedBy = meetup; // room reference meetup
// if we comment higher row - no error 

console.log(JSON.stringify(meetup)); // Error (циклическая ссылка (круговая))
