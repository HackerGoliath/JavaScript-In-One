//1. let vs const vs var
// 1st diffrence:
// var myName = "Deepak"
// console.log(myName);
// myName = "Babulal"
// console.log(myName);

// let myName = "Deepak"
// console.log(myName);
// myName = "Babulal"
// console.log(myName);

// const myName = "Deepak"
// console.log(myName);
// myName = "Babulal" // throws error
// ---

// 2nd Difference: function scope
// var has global scope
// let has block scope
// function bioData() {
// var fname = "Deepak"
// let fname = "Deepak"
// console.log("Inside Function Only", fname);
// if (true) {
// var lname = "Babulal"
//     let lname = "Babulal"
//     console.log("Inside Function and Inside If", lname);
//     console.log("Inside Function and Inside If", fname);
// }
// console.log("Outside if", lname);
// console.log("Outside if", lname); // throws error for let
// }

// Similarity- All of three can not use outside function
// function bioData() {
//     var myName = "Deepak"
// let myName = "Deepak"
// const myName = "Deepak"
// }
// console.log(myName); // throws error in all three casses
// bioData();
// =====================================================

// 2. Template Literals(Template strings) - Backticks(``)
// Template Literals are useful when you want to use a string as a template for a function or a variable.
// for (let i = 1; i <= 10; i++) {
//     let num = 8
//     console.log(`${num} x ${i} = ${num * i}`);
// }
// =========================================================

// 3. Default Parameters
// function mult(a, b ) {
// function mult(a, b = 1) {
//     return a * b
// }
// console.log(mult(5, 3));
// console.log(mult(5)); // returns NaN if no default parameter set
// =================================================================

// 4. Fat Arrow Function =>
// console.log(sum(4, 5)); // not throws error in normal or traditional function
// function sum(a, b) {
//     return `The sum of ${a} and ${b} is ${a + b}`
// }

// In fat arrow function you call function after define
// console.log(sum(4, 5)); // throws error in arrow function
// const sum = () => {
// return `The sum of ${a = 5} and ${b = 4} is ${a + b}`
//     return `The sum is ${(a = 5) + (b = 4)}`
// }
// in short we can write it as
// const sum = () => `The sum is ${(a = 5) + (b = 4)}`
// console.log(sum());
// Limaitaion: You can not use this keyword


