// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// casual swithc case
let key = 2 + 2;
switch (key) {
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    default:
        console.log("not a 4 or 3");
        break;
}
// output 4


// ! if you use the switch statement without break after finding the case it will continue do all the remaining code
switch (key) {
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    default:
        console.log("not a 4 or 3");
}
// ! same as :
// console.log(4);
// console.log(5);
// console.log("not a 4 or 3");

// ! we can use statements actually in switch case :
let a = "1";
let b = 0;

switch (+a) 
{
    case ++b:
        console.log("The statement of the expression is : " + `${b}`);
        break;
    
    default:
        console.log("Error");
        break;
}

// output 
//console.log("The statement of the expression is :1);

// ! grouping of case 

let exampleVariable = 3;
switch (exampleVariable) {
    case 1: // ground two cases
    case 2:
        console.log("Number lower that 3");
        break;
    case 3:
        console.log("3 number");
        break;
    case 4:
    case 5:
        console.log("Number higher that 3");
        break;
    default:
        break;
}

// output 
// console.log("3 number");

// ! type matters (the converts / string => int / boolean)
// * make sure that the type is the same as the key type :
let keyString = '2';
switch (+keyString) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("the number is entered");
        break;

    case '1':
    case '2':
    case '3':
    case '4':
        console.log("Won't react as it s a string: ");
        break;

    default:
        break;
}