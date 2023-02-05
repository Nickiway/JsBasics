'use strict';

let color;

while (color != 'stop') {
    color = prompt('What is you favourite color? ', 'stop');
    color != 'stop' ?  console.log('The users favourite color is ', color) : false;
}
