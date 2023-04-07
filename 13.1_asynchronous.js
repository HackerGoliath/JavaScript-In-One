// Hoisting In Js =>
// We have a creation and execution phase.

// Hoisting in Js is a mechanism where variables and functions declarations are moved to the top
// of their scope before the code executes.

// eg:
// console.log(myName);
// var myName;
// myName = "Deepak";

// How it will be in output during creation phase
// 1.var myName = undefined;
// 2.console.log(myName);
// 3.myName = "Deepak";


// After ecmascript
// but if variable is declared with let it throws error
// console.log(myName);
// let myName;
// myName = "Deepak";

// In es6, hoisting is avoided by using the let keyword instead of var.(The other difference is that variables
//     declared with let are local to the surrounding block,not the entire function)

// =====================================================

// Scope Chain And Lexical Scoping In Js
// The scope chain is used to resolve the value of varaible names
// Lexical Scoping means now, the inner function can get access to their parent function variables but vice - versa is not true
// eg:
// let a = "Hello guys. "; //global scope

// const first = () => {
//     let b = " How are you? "

//     const second = () => {
//         let c = " Hii, I am fine thank you ";
//         // Because of lexical scoping it is correct
//         console.log(a + b + c);
//     }
//     second();
//     // console.log(a + b + c); // can't use c
// }
// first();
// ===========================================================

// Closures in Js
// A closure is a combination of function bundled together (enclosed) with references
// to its surrounding state (the lexical environment)
// In other words, a closure gives you outer function scope from an inner function
// closures are created every time the function is created, at function creation time

// eg:
// const outerFunc = (a) => {
//     let b = 10
//     let innerFunc = () => {
//         // It is possible because of closures
//         let sum = a + b
//         console.log(`The sum is ${sum}`);
//     }
//     innerFunc()
// }
// outerFunc(5)

// One more eg:
// const outerFunc = (a) => {
//     let b = 10
//     let innerFunc = () => {
//         // It is possible because of closures
//         let sum = a + b
//         console.log(`The sum is ${sum}`);
//     }
//     return innerFunc
// }
// let checkClosure = outerFunc(5)
// console.log(checkClosure);
// console.dir(checkClosure);
// checkClosure();
// ======================================================

// use strict mode
// "use strict"
// let x;
// x = "Deepak" // without use strict it is fine but after use strict mode it throws error
// console.log(x);
// =============================================================

// difference between synchronous and asynchronous Js?
// Synchronous -> One at a time
// eg:
// const func2 = () => console.log("Function 2 is called")

// const func1 = () => {
//     console.log("Function 1 is called");
//     func2();
//     console.log("Function 1 is called again 🤩");
// }
// func1();

// Asynchronous(more than one at a time) -> Asynchronous programming in JavaScript allows for the execution of code without blocking the main thread
// eg:
// const func2 = () => {
//     setTimeout(() => {
//         console.log("Function 2 is called")
//     }, 2000)
// }

// const func1 = () => {
//     console.log("Function 1 is called");
//     func2();
//     console.log("Function 1 is called again 🤩");
// }
// func1();
// ====================================================

// Event Loop in Js
// eg:
// const func2 = () => {
//     setTimeout(() => {
//         console.log("Function 2 is called")
//     }, 2000)
// }

// const func1 = () => {
//     console.log("Function 1 is starting");
//     func2();
//     console.log("Function 1 is ending 🤩");
// }
// func1();
// =====================================================

// Function currying: refer to: https://codeburst.io/currying-in-javascript-ba51eb9778dc
// Function currying is a technique in JavaScript that allows you to create a new function by partially applying the arguments of an existing function. The result is a new function that can be called with the remaining arguments at a later time.
// Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.

// eg:
// function sum(n1) {
//     // console.log(n1);
//     return function (n2) {
//         // console.log(n1, n2);
//         return function (n3) {
//             console.log(n1, n2, n3);
//             console.log(n1 + n2 + n3);
//         }
//     }
// }

// Shorthand with the help of fat arrow function
// const sum = (n1) => (n2) => (n3) => console.log(n1 + n2 + n3);
// sum(5)(3)(8)

// explanation: This code is creating a curried function. The sum function is being called three times with single arguments each time.The first call to sum takes in the argument 5 and returns an anonymous function. The anonymous function takes in the argument 3 and returns another anonymous function.Finally, this anonymous function takes the argument 8 and returns the sum of 5 + 3 + 8, which is 16. Therefore, the code outputs 16.
// ==========================================================================

// Callback Hell =>
// eg:
// setTimeout(() => {
//     console.log("Function 1️⃣ is called");
//     setTimeout(() => {
//         console.log("Function 2️⃣ is called");
//         setTimeout(() => {
//             console.log("Function 3️⃣ is called");
//             setTimeout(() => {
//                 console.log("Function 4️⃣ is called");
//                 setTimeout(() => {
//                     console.log("Function 5️⃣ is called");
//                     setTimeout(() => {
//                         console.log("Function 6️⃣ is called");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000)
// =================================================================

// Ajax Call and XML Http request
// refer to apiCall.html in XMLHttp folder