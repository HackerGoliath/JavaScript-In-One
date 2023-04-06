// es9 or es2018 =>
// refer to: https://flaviocopes.com/es2018/

// ES6 introduced the concept of a rest element when working with array destructuring:
// const numbers = [1, 2, 3, 4, 5]
// const [first, second, ...others] = numbers
// console.log(others);
// console.log(...others);

// const numbers = [1, 2, 3, 4, 5]
// const sum = (a, b, c, d, e) => a + b + c + d + e
// const sumOfNumbers = sum(...numbers)
// console.log(sumOfNumbers);

// ES2018 introduces the same but for objects. =>
// eg:1.
// const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
// console.log(...others); // throws error
// console.log(others);
// const items = { first, second, ...others }
// console.log(items);

// eg:2.
const person = { name: "Deepak", age: 26 }
const personBio = { ...person, degree: "MCA" }
console.log(personBio);