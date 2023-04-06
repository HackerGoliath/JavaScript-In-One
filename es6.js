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
// ===================================================================



// Destructuring in es6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables

// => Array Destructuring
// const bioData = ["Deepak", "Bhau", 26]
// Wihout destructuring - old method
// let fname = bioData[0]
// let lname = bioData[1]
// let age = bioData[2]

// with Array Destructuring ->
// const [fname, lname, age] = bioData;
// position of variables matters a lot
// const [fname, age, lname] = bioData;
// console.log(fname, lname, age);

// We can add values too
// const [fname, lname, age, degree = "MCA"] = bioData;
// console.log(fname, lname, age, degree);
// -------------------------------------------------------------------------

// Object Destructuring
// const bioData = {
//     fname: "Deepak",
//     lname: "Bhau",
//     age: 26
// }
// Without Destructuring ->
// console.log(bioData.fname, bioData.lname, bioData.age);
// let fname = bioData.fname
// let lname = bioData.lname
// let age = bioData.age
// console.log(fname, lname, age);

// With Destructuring -> (name of key must be same as defined in object)
// const { fname, lname, Age, degree = "MCA" } = bioData;
// console.log(fname, lname, Age, degree);

// const { fname, lname, age, degree = "MCA" } = bioData;
// In object destructuring order of variables does'nt matter as in array destructuring
// const { fname, age, lname, degree = "MCA" } = bioData;
// console.log(fname, lname, age, degree);
// ================================================================================

// Object Prperties =>
// We can now use dynamic properties -> get dynamic data inside object
// let myName = "deepak"
// const bioData = {
//     // myName: "is my Name",
//     [myName]: "is my Name",
//     // 20+6: "is my age" // throws error
//     // 26: "is my age",
//     [20 + 6]: "is my age"
// }
// console.log(bioData);
// ---

// No need to write key and value if both are same
// let myName = "Deepak"
// let age = 26
// old method
// const bio = {
//     myName: myName,
//     age: age
// }

// Modern Method as in es6
// const bio = {
//     myName,
//     age
// }
// console.log(bio);
// ==============================================

// Spread Operator(...) =>
// const colors = ["red", "green", "blue", "black"];
// old method
// if we want to add some data in previous data in array then we have to create another array and write previously written data
// const myColors = ["red","green","blue","yellow","pink"]

// But with the help of spread operator we can do this as
// const myColors = [...colors, "yellow", "pink"];
// console.log(myColors);
// ===============================================

// Rest Operator
// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- an array
// ----

// Argument length
// function fun1(...theArgs) {
//     console.log(theArgs.length);
// }

// fun1(); // 0
// fun1(5); // 1
// fun1(5, 6, 7); // 3
// ----

// Using rest parameters in combination with ordinary parameters
// function multiply(multiplier, ...theArgs) {
//     return theArgs.map((element) => multiplier * element);
// }

// const arr = multiply(2, 15, 25, 42);
// console.log(arr); // [30, 50, 84]
// ---

// From arguments to an array
// function sortRestArgs(...theArgs) {
//     const sortedArgs = theArgs.sort();
//     return sortedArgs;
// }

// console.log(sortRestArgs(5, 3, 7, 1)); // 1, 3, 5, 7

// function sortArguments() {
//     const sortedArgs = arguments.sort();
//     return sortedArgs; // this will never happen
// }

// console.log(sortArguments(5, 3, 7, 1));
// throws a TypeError (arguments.sort is not a function)

// Before rest parameters, arguments need to be converted to a normal array before calling array methods on them:
// function fn(a, b) {
//     const normalArray = Array.prototype.slice.call(arguments);
//     // — or —
//     const normalArray2 = [].slice.call(arguments);
//     // — or —
//     const normalArrayFrom = Array.from(arguments);

//     const first = normalArray.shift(); // OK, gives the first argument
//     const firstBad = arguments.shift(); // ERROR (arguments is not a normal array)
// }

// Now, you can easily gain access to a normal array using a rest parameter:
// function fn(...args) {
//     const normalArray = args;
//     const first = normalArray.shift(); // OK, gives the first argument
//     return first
// }
// console.log(fn(2, 3, 4, 5, 67, 8));
// ---

// Another example of Rest Parameter
//In es5
// function sum(a, b, c, d, e, f, g, h, i) {
//     console.log(a + b + c + d + e + f + g + h + i);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9) // only two args is taken here

// In es6
// function sum(...inputs) {
// returns as values
// console.log(...inputs);

// returns as an array
// console.log(inputs);
//     let total = 0;
//     for (let i of inputs) {
//         total += i;
//     }
//     console.log(total);
// }
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9)
// ---

// Practice of rest parameter
function fun(a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf("Edan"));
}
fun("Sachin", "Rohit", "Kohli", "Neymar", "Edan")


