// es10 or es2019 =>
// refer to: https://flaviocopes.com/es2019/

// Flatten an array or converting 2d or 3d array into one dimensional array
// Old Method:
// const arr = [
//     ["zone_1", "zone_1.1"],
//     ["zone_2", "zone_2.1"],
//     ["zone_3", "zone_3.1"],
//     ["zone_4", ["zone_4.1", "zone_4.2", ["zone_4.01", "zone_4.02"]]],
// ]
// const flatArr = arr.reduce((accum, elem) => accum.concat(elem))
// console.log(flatArr);
// Problem : does not flatten if array is present inside array

// To solve this problem we use Array.prototype.{flatArr,flatMap}
// flat method: by default i flats upto one level ->
// console.log(arr.flat());

// flat upto 2 level ->
// console.log(arr.flat(2));

// flat upto infinity->
// console.log(arr.flat(Infinity));
// ----

// flatMap Method:The flatMap() method is similar to the map() method, but with one key difference: it allows you to return arrays from the mapping function, and it automatically flattens the resulting arrays into a single array.
// Syntax: array.flatMap(callback(currentValue[, index[, array]])[, thisArg])
// eg:1.
// const arr = [1, 2, [3, 4], 5];
// const flatArray = arr.flatMap((item) => item*2)
// const flatArray = arr.flatMap((item) => item)
// console.log(flatArray);

// eg:2.
// const arr = ['hello', 'wo', ['r', 'l'], 'd'];
// // const mappedArray = arr.flatMap((item) => item.split(''));
// const mappedArray = arr.flatMap((item) => item);
// console.log(mappedArray); // Output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
// ===================================

// Object.fromEntries():
// const person = { name: "Deepak", age: 26 }
// es8 ->
// console.log(Object.entries(person)); // covert into arrays of arrays of key value
// es10 ->
// Object.fromEntries(): Convert back into objects
// arrToObj = Object.entries(person)
// console.log(Object.fromEntries(arrToObj));
// Another eg:-> Convert array of arrays into object
const bioData = [['name', 'Deepak'], ['age', 26, 45]] // taken only first 2 values in array
console.log(Object.fromEntries(bioData));