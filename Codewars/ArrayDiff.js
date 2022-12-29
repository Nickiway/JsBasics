'use strict';

function arrayDiff(a, b) {
    let result = [];
    a.forEach(element => {
        if (!b.includes(element)) {
            result.push(element);
        }
    });

    return result;
}
array.forEach(element => {
    
});
console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2,2,3],[2]));