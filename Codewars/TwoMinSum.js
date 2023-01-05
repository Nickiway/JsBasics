'use strict';

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort(function(a, b){return a-b});
    console.log(numbers);
    return (numbers[0] + numbers[1]);
}

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));