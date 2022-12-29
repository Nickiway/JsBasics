// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

let printWord = function() {
    console.log("Hello world");
}

// * example pf polyfills (this is a describing a function that can miss on the old vesions of JS)
if(!printWord){
    printWord = function(){
        console.log("Bye world");
    }
} else {
    printWord = function() {
        console.log("We are still here");
    }
}

// * Transp