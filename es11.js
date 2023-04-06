// es11 or es2020 =>
// refer to: https://www.freecodecamp.org/news/javascript-new-features-es2020/

// let oldNum = Number.MAX_SAFE_INTEGER
// console.log(oldNum);
// After this number it produces bad results
// console.log(oldNum + 12);
// console.log(9007199254740991 + 12n); //throws error as it is beyond scope

// To solve this
// 1. BigInt
// const newNum = 9007199254740991n + 12n
// console.log(newNum);
// console.log(typeof (newNum));
// -------------------------------------------

// 2. Nullish Coalescing(??)
// The result of `a ?? b` is:
// - if `a` is defined, then`a`,
//     - if `a` isn't defined, then `b`.

let foo = null ?? "my String"
foo = "first" ?? "my String"
foo = undefined ?? "my String"
// foo = NaN ?? "my String" // returns left side if NaN
// foo = false ?? "my String" // returns left side if false
console.log(foo); // returns right side if null or undefined