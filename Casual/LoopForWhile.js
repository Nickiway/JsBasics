// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? while loop using example 
let i = 0;
while (i < 3){
    console.log(i++);
}
// output 0, 1, 2

// ? for loop using example 
i = 0;
for (let index = 0; index < 3; index++) {
    console.log(i);    
}

// * also we can siplify the loop FOR 
// * instead we are using ; item
i = 0;
for(; i < 3; ) {
    console.log(i++ );
}   
// output 0, 1, 2

// * case when it repeat without limits
// for (;;) {
     // repeats without limits
// }

// ! BREAKING THE LOOP 
// ? FOR BREAKIGN THE LOOP WE CAN USE BREAK;

let counter = 0;
while (true) {
    let value =+ counter;
    if (!!value) {
        break;
    }
    counter++;
}
console.log(counter); // 1;

// ! CONTINUE THE LOOP
// * continue is used to skip the remaining part 
for (let i = 0; i < 10; i++) 
{
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    console.log(i); // 1, then 3, 5, 7, 9
}

// ! IT IS INCORECT TO USE continue /  break in ?;
// // (i > 5) ? continue : break;


// ! LABLES FOR break / continue 
// * usually it is used to use break or continue for a high level loop e.x :
let summary = 0;

outer : for (let index = 0; index < Math.random() * 10; index++) {
    for (let indexJ = 0; indexJ < Math.random; indexJ++) {
        if(index % 2 == 0) break outer;
        summary += indexJ;
    }    
}

// in that case we will break first level loop for
// ? we can also move loop after outer for the next line 
// ! label dont allow us to jump to different levels 

// break label; // jump to the label below (doesn't work)
// label: for (...)

// TODO :
let homeIndex = 3;

while (homeIndex) {
  console.log( homeIndex-- );
}

// let homeIndex = 3;
// alert(homeIndex--); // shows 3, decreases i to 2
// alert(homeIndex--) // shows 2, decreases i to 1
// alert(homeIndex--) // shows 1, decreases i to 0
// done, while(i) check stops the loop