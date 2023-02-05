'use strict';

const brand = 'Toyota';
const model = 'Rav the fourth';
const color = 'Gray';
const year = 2019;

let carHtml;

// Old approach ECMA 6
carHtml = '<h3>' + 'Car Description' + '</h3>' + 
'<ul>' + '<li>Brand: ' + brand + '</li>' 
+ '<li>Model: ' + model + '</li>' +
'<li>Color: ' + color + '</li>' +
'<li>Year: ' + year + '</li></ul>'; 

document.body.innerHTML = carHtml;


// template strings usage
// new approach : 

carHtml = `<h3>Car Description</h3> 
<ul>
<li>Brand: ${brand}</li>
<li>Model: ${model}</li>
<li>Color: ${color}</li>
<li>Year: ${year}</li>
<li>Doors Number: ${getDoorsNumber()}</li>
<li>Tax: ${year > 2010 ? 20 : 10}%</li>
</ul>`;

document.body.innerHTML = carHtml;

function getDoorsNumber() {
    return 5;
}