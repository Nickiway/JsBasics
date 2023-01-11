'use strict'; 
// https://uk.javascript.info/date

// ! commands list :  
//  new Date(year, month, date, hours, minutes, seconds, ms)

// * Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
// The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

// creating object Date : 
let now = new Date();
console.log(now); // now date-time

// we can set the value to the date (milliseconds) after the date of 01.01.1970 UTC+0 :
let Jan01_1970 = new Date(0);
console.log(Jan01_1970); // 01.01.1970


// lets now add a day
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 ); // 02.01.1970

// * number of milliseconds is called "timestamps"
// dates can have negative timestamps : 

// 31.12.1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 ); 

// date parse can parse string to a date if it given as parametr : 
let date = new Date("2017-01-26");
console.log(date); // 2017-01-26

// * Access date components :
// ! commands list : 

// * this methods return time according a local timezone
// date.getFullYear() - get the year (4 digits) 
// date.getMonth() - get the month (from 0 to 11) 
// date.getDate() - get the day (from 1 to 31) 
// date.getHours() - hours
// date.getMinutes() - minutes
// date.getSeconds() - seconds
// date.getMilliseconds() - milli
// date.getDay() - get the day of week (0 - Sunday / 6 - Saturday)

// * according the UTC+0 (London) we use this commands : 
// date.getUTCFullYear() - year
// date.getUTCMonth() - month
// date.getUTCDay() - day

// * have no UTC-variants (timezones) : 
// date.getTime() - return timestamps (from the 01.01.1970 UTC + 0)
// date.getTimezoneOffset() - return a difference between UTC and local time zone // ! IN MINUTES

date = new Date();

console.log("---------------");
console.log(date.getUTCHours()); // 18
console.log(date.getHours()); // 19

// * Setting date components
// ! commands list : 
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

// * Date diff / date to number : 
let date1 = new Date();
let date2 = new Date('2023-01-10');

console.log(date2 - date1); // milliseconds number


// * Date.now();
let start = Date.now(); // milliseconds from 01.01.1970
console.log(start); 

// * Benchmarking - the trasing spent time on doing some funcitons (operations)

// * Date.parse()
let ms = Date.parse('2012-01-26T13:51:50.417-07:00'); // returns timestamp
alert(ms); // 1327611110417  (timestamp)