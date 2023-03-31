// if-else statement
// var tomr = "rain";
// if (tomr === "rain") {
//     console.log("Take a rain coat");
// }
// else {
//     console.log("No need to take a rain coat");
// }
// --------------------------------------------------------------

// Truthy and falsy values in JavaScript
// There are 5 falsy values:(means returns false)
// 0, "",undefined,null,NaN,false** is false anyway

// if (score = 10) {
// if (score = 0) {
// if (0) {
// if ("") {
// if (undefined) {
// if (null) {
// if (NaN) {
// if (false) {
//     console.log("We lost the game");
// }
// else {
//     console.log("We won the game");
// }

// truthy values = except these rest are thruthy values
// if (true) {
//     console.log("We lost the game");
// }
// else {
//     console.log("We won the game");
// }
// ---------------------------------------------------------

// Conditional(ternary operator):
// It is the only operator in Js that takes three operands
// var age = 18
// if (age >= 18) {
//     console.log("You are eligible for vote");
// } else {
//     console.log("You are eligible for vote");
// }

// With the help of ternary operator
// var result = (age >= 18) ? "You are eligible for vote" : "You are eligible not for vote"
// console.log(result);
// -------------------------------------------------------------------

// Switch Statement
var area = "circle"
area = "triangle"
area = "rectangle"
area = "square"
var PI = 3.14, l = 5, b = 4, r = 3;
// if (area === "circle") {
//     console.log(`Area of circle is ${PI * r ** 2}`);
// }
// else if (area === "triangle") {
//     console.log(`Area of triangle is ${(l * b) / 2}`);
// }
// else if (area === "rectangle") {
//     console.log(`Area of rectangle is ${l * b}`);
// }
// else {
//     console.log("Please enter valid value");
// }

// with the help of switch case
// switch (area) {
//     case "circle":
//         console.log(`Area of circle is ${PI * r ** 2}`);
//         break
//     case "triangle":
//         console.log(`Area of triangle is ${(l * b) / 2}`);
//         break
//     case "rectangle":
//         console.log(`Area of rectangle is ${l * b}`);
//         break
//     default:
//         console.log("Please enter valid value");
// }
// ==============================================================

// ==============="Loops"======================
// While Loop
var num = 0
num = 20
// block scope = Enters block when condition is satisfied
// while (num <= 10) {
//     console.log(num);
//     num++
// }

// do-while loop => Loop executes atleast one time beside condition is not satisfied
// do {
//     debugger;
//     console.log(num);
//     num++
// } while (num <= 10);

for (num = 0; num <= 10; num++) {
    console.log(num);
}