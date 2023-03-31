// 1. Output of 3**3
// Exponentiation Operator
// console.log(3 ** 3); // is same as 3 to the power 3
// console.log(10 ** -3); // is same as 1/1000

// 2. What will be the output when we add a number and a string
// console.log(6 + "Deepak");
// console.log(6 - "Deepak");

// 3. WAP to swap two numbers
var x = 10
var y = 20
// console.log(`Before swapping x = ${x} and y = ${y}`);
// var temp;
// temp = x
// x = y
// y = temp
// console.log(`After swapping x = ${x} and y = ${y}`);

// 3. WAP to swap two numbers without using third variable
// Do not use
// x = 20
// y = 10
// console.log(`After swapping x = ${x} and y = ${y}`);

console.log(`Before swapping x = ${x} and y = ${y}`);
x = x + y // x = 30
y = x - y // y = 10
x = x - y
console.log(`After swapping x = ${x} and y = ${y}`);