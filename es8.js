// es8/es2017 =>
// refer to link: https://flaviocopes.com/es2017/
// 1. Async/await -> we will see later
// ---

// 2. String Padding : no of whitespaces at the end or start of a string
// let msg = "    Deepak"
// msg = "26"
// console.log(msg);
// padStart arg must be greater than the length of string otherwise it returns as it is
// console.log(msg.padStart(5)); // returns same string as length is less
// console.log(msg.padStart(15));
// console.log(msg.padEnd(25));
// ---

// 3. Object.values: returns the array containing all the object own property values
const person = { name: "Deepak", age: 26 }
console.log(Object.values(person));

// 4. Object.entries : returns Array containing the array of objects
console.log(Object.entries(person));