'use strict';
// https://uk.javascript.info/recursion

// recursion example : 
let power = (a, x) => {
    if (x > 1) {
        return a * power(a, x - 1);
    } else {
        return a;
    }
};

console.log(power(2, 5));