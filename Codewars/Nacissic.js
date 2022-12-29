'use strict';
function narcissistic(value) {
    value = value.toString();
    let digitsNumber = value.length;
    let summary = 0;

    for (let index = 0; index < value.length; index++) {
        summary += value[index] ** digitsNumber;
    }

    return summary == value ? true : false;
}
  
console.log(narcissistic(153));
console.log(narcissistic(1652));