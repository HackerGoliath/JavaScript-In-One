/*
Date objects containa number that represents milliseconds since 1 January 1970 UTC
There are 4 ways o create date object
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds) // takes 7 args
We can not avoid month section
new Date(date string)
*/

// new Date(): Date objects are created with the new date() constructor
// let currDate = new Date()
// console.log(currDate);

// console.log(new Date());
// console.log(new Date().toLocaleString()); // 4/4/2023, 3:21:16 pm
// console.log(new Date().toString()); // Tue Apr 04 2023 15:21:16 GMT+0530 (India Standard Time)

// Date.now(): Returns the numeric value corresponding to the current time.
// The number of milliseconds elapsed since January 1 1970 00:00:00 UTC
// console.log(Date.now());

// new Date(year,month,...)
// 7 numbers specify year,month,day,hour,minute,second and milliseconds (in that order)
// Note: Js count month from 0 to 11
// January is 0 and December is 11

// let d = new Date(2023, 11, 31, 23, 59, 59, 999)
// d = new Date(2023, 11, 31)
// // minimum 2 args is required to get output at that time
// d = new Date(2023, 11)
// // Current time
// d = new Date()
// console.log(d.toLocaleString());

// new Date(datestring): creates a new date object from a date string
// let d = new Date("October 13,2014 11:30:00")
// console.log(d);
// console.log(d.toLocaleString());

// new Date(milliseconds): creates a new date object as zero time plus milliseconds
// let d = Date.now() // returns milliseconds since 1 jan 1970 00:00:00
// d = new Date(0)
// d = new Date(100000000)
// d = new Date(1680603484164)
// d = new Date(844000000000 * 2)
// console.log(d);
// console.log(d.toLocaleString());
// ========================================================================

// Dates Method
// const currDate = new Date();

// get individual date=>
// console.log(currDate);
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); // 0-11 jan to dec
// console.log(currDate.getDate());
// console.log(currDate.getDay()); //0-6 sun to sat

// set individual date=>
// console.log(currDate.setFullYear(2024));
// // The setFullYear() method can optionally set month and day
// console.log(currDate.setFullYear(2024, 10, 5));
// console.log(currDate.setMonth(10));
// console.log(currDate.setDate(21));
// console.log(currDate.toLocaleString());
// =====================================================================

// Time Methods
// const currTime = new Date();

// get individual time=>
// getTime() returns no of millisseconds since 1 jan 1970
// console.log(currTime.getTime());
// console.log(currTime.getHours());
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());

// set individual time=>
// console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(31));
// console.log(currTime.setSeconds(34));
// console.log(currTime.setMilliseconds(345));
// ===============================================

// Practice:
let d = new Date()
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());