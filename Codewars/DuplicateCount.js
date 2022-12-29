'use strict';
function duplicateCount(text) {
    let dict = new Object();
    let result = 0;
    text = text.toLowerCase();
    
    for (var char of text) {
        // dict[char] += 1;
        if (dict[char] != undefined) {
            dict[char] = dict[char] + 1;
        } else {
            dict[char] = 1;
        }
    }

    for (var dictItem in dict) {
        // console.log(dict);
        if (dict[dictItem] > 1) {
            result += 1;
        }
    }

    return result;
}
console.log(duplicateCount('aabBcde'));