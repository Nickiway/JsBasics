// ! RECOMENDED TO USE "Better Comments" plugin
'use strict';

// ? USING IF BRANCH
let itemToCheck = 5;
if (itemToCheck >= 5) {
    console.log(true);
}

// ? BOOLEAN CONVERSION
// * false case 
if (0) { // converted to false (Boolean())
    console.log("It is false");
}
// * true case 
if (1) { // converted to true (Boolean())
    console.log("It is true");
}

// * can be used also pre-evaluated boolean value 
let year = 2015;
let condition = (year == 2015); // returns true
if(condition) {
    console.log("The year is 2015");
}

// ? THE 'ELSE' CLAUSE 
year = 2010;
if(year == 2011) { // condition if year == 2011
    console.log("The year is 2011");
} else { // else case
    console.log("The year is not 2011");
}

// ? THE CLAUSE ELSE IF 
if (year < 2003) { // if case
    console.log("The year is lower than 2003");
} else if (year > 2005 & year < 2009) { // else if case
    console.log("The year is between 2005 and 2009");
} else { // else case
    console.log("The year is 2010 or higher");
}

// ? CONDITIONAL OPERATOR '?'
// * if year equals 2011 return true, else if year equals 2010 returns false, else returns null
let age = 18;

// multiple times 
let access = year == 2011 ? true : year == 2010 ? false : null;
// if-else case 
let accessAllowed = age > 18 ? true : false;

// ? NON-TRADITIONAL USE OF '?'
let company = 'Netflix';
(company == 'Netflix') ? 
    console.log('Right!') : console.log('Wrong!');

// ! HOWEVER QUESTION MARKS ARE NOT RECOMMENDED TO USE 
//* BETTER USE :
if (company == 'Netflix') {
    console.log('Right');
} else {
    console.log('Wrong!');
}
