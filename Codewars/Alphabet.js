'use strict';

function alphabet(ns) {
    let letters = new Set();
    for (let index = 0; index < ns.length; index++) {
        let temp = ns[index];
        
        for (let indexJ = index + 1; indexJ < ns.length; indexJ++) {
            let multiple = ns[indexJ] * temp;
            
            if (multiple in ns) {
                letters.add(ns[index]);
                letters.add(ns[indexJ]);
            }
        }
    }
    let previous = letters.keys()[0];

    for (let value of letters.keys()) {
        console.log(letters);
        if(previous != undefined) {
            if (letters.has(previous * value)) {
                if(!(value == 1 || previous == 1)) {
                    letters.delete(previous * value);
                }
            }
        }
        previous = value;
    }
    let max = Array.from(letters);
    return Math.max(...max);
}

console.log(alphabet([2,6,7,3,14,35,15,5])); // Undone XXXXXXXXXXXX