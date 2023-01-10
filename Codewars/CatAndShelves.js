'use strict';

function solution(start, finish) {
    let steps = 0;
    let double = false;

    finish = finish - start;
    steps = Math.floor(finish / 3); 
    double = (start % 2 == 0) * (finish % 2 == 0) ;
    if (double) {
        steps += 2;
    } else {
        steps += 1;
    }
    return steps;    
}

console.log(solution(1, 7)); // 3