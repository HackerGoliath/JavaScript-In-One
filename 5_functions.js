//1. function definition
// function sum() {
//     var a = 10
//     var b = 40
//     var c = a + b
//     console.log(c);
// }

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }

//2. Function call without parameter
// sum();

//3. Function call with parameter
// sum(23,45)

//4. Function Expression -> Create a function and put it into variable
// var funcExp = sum(5, 19)
// funcExp;


//5. return keyword
// function sum(a, b) {
//     return total = a + b
// }

// var funcExp = sum(23, 17)
// console.log(funcExp);

//6. Anonymous Function expression
var funcExp = function (a, b) {
    return total = a + b
}
// The whole above block is called anonymous expression
// and only the right side function is called anonymous function

// console.log(funcExp(4, 5));
var result = funcExp(4, 5)
var result2 = funcExp(14, 5)

console.log("The sum of give two numbers is " + result + " " + result2);
console.log(result > result2);