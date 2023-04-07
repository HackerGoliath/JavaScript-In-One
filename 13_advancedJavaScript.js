// 1. Event Propagation, Event Bubbling and Event Capturing
// refer to eventPropagation.html in Events Folder
// ---

// 2. Higher Order Function
// Function which takes another function as an arguement

// 3. Callback Function
// Function which gets passed to an arguement to another function

// eg:
// Here add, sub, mult,div are callback function
// and calculator is an higher order function
const add = (a, b) => a + b;
// console.log(add(15,5));
const sub = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

const calculator = (n1, n2, op) => op(n1, n2)
let res = calculator(15, 5, add);
res = calculator(15, 5, sub);
res = calculator(15, 5, mult);
res = calculator(15, 5, div);
console.log(res);