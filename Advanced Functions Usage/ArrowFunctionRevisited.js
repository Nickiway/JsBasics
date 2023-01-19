'use strict';
// https://javascript.info/arrow-functions

// ! Arrow functions have no 'this'
// 1 . Have no this 
// 2 . Have no arguments 
// 3 . Can not be called with new
// 4 . They have no super 

// no this 
let book = {
    title : 'title',
    students : ['one', 'two'],

    printItems() {
        this.students.forEach(student => {
            console.log(this.title + " " + student);
        });
    }
}

book.printItems(); // print out well 