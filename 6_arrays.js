// let friend1 = "Deepak"
// let friend2 = "Rahul"
// let friend3 = "Rohan"

// It can simply written with the help of array
// In Js we have Array class
// arrays are the prototypes of this class

// let myFriends = new Array; // optional
// myFriends = ["Deepak", "Rahul", "Rohan"]
// console.log(myFriends);
// In other programming languages you can store data of same type in an array
// But in Js you can store data of mutliple types in an array
// let myInfo = ["Deepak", 26, true, undefined, null]
// console.log(myInfo);
// --------------------------------------------

// 1. Traversal in an array
let myInfo = ["Deepak", 26, true, undefined, "Deepak", null, "deepak", "Deepak"]
// console.log(myInfo[1]);

// Get length of an array
// console.log(myInfo.length);

// Get last Element
// console.log(myInfo[myInfo.length - 1]);
// ---

// Using loops in array
// for loop:
// for (let i = 0; i < myInfo.length; i++) {
//     console.log(`${i + 1} : ${myInfo[i]}`);
// }

// After ES6 we have for-in and for-of loop
// for-in loop
// returns index
// for (let index in myInfo) {
//     console.log(index);
// }

// for-of loop
// returns element
// for (let elements of myInfo) {
//     console.log(elements);
// }

// Array.prototype.forEach() loop - approx a combo of for-in and for-of loop
// Calls a function for each element in an array
// Limitaion: Can not use break statement

// without fat arrow function supports this
// myInfo.forEach(function (element, index, array) {
//     console.log(`Array is ${array}`);
//     console.log(`${index + 1} : ${element}`);
//     // break // throws error
// })

// with fat arrow function
// it does not supports this
// myInfo.forEach((element, index, array) => {
//     console.log(`Array is ${array}`);
//     console.log(`${index + 1} : ${element}`);
//     // break // throws error
// })
// =========================================================

// 2. Searching and filter in an array
// indexOf - returns index of element, search from start. returns -1 if not found. It is case sensitive
// console.log(myInfo.indexOf("Deepak"))
// range-starting(including)
// console.log(myInfo.indexOf("Deepak", 1))
// console.log(myInfo.indexOf("Deepak", 5))

// lastIndexOf: search elements from last. Backward Searching
// console.log(myInfo.lastIndexOf("Deepak"));
// console.log(myInfo.lastIndexOf("Deepak", 6));

// includes - returns true if element is present else false
// console.log(myInfo.includes(26));
// console.log(myInfo.includes(27));
// starting index
// console.log(myInfo.includes(26, 2));


// Find method in array
/*
In JavaScript, there is a built -in method called `Array.find()` that allows you to find the first element in an array that satisfies a given condition.The syntax is as follows:

```
array.find(callback(element[, index[, array]])[, thisArg])
```

Here, `callback` is the function to execute on each element in the array until it returns`true`.It is called with three arguments: `element`(the current element being processed in the array), `index`(the index of the current element), and`array`(the array on which the`find` method was called). `thisArg` is an optional argument that can be used as the `this` value for the callback function.

    Here's an example of how to use `Array.find()`:

        ```javascript
const array = [5, 12, 8, 130, 44];

const found = array.find(element => element > 10);

console.log(found); // Output: 12
```

In this example, `Array.find()` is used to find the first element in `array` that is greater than`10`.The `element` parameter is used to compare each element against the `10` value, and the `find()` function returns the first element that satisfies the condition.In this case, the output is`12`.
*/

// Array.prototype.find(): Returns the found element in the array if the some element in the array.else returns "undefined" 
// sastisfied the testing function or undefined if not found only problem is that its returns only one element
let prices = [240, 350, 450, 670, 700]
// const findElement = prices.find((element, index, array) => {
//     // console.log(`${index} : ${element} in array ${array}`);
//     return element > 400
// })
// Short form:
// console.log(prices.find(element => element > 400));
// console.log(prices.find(element => element > 800));

// Limitaion: It returns only one element. Only first value is satisfied
// console.log(findElement);

// Array.prototype.findIndex(): Returns the index of found element else retrun "-1" if not found
// console.log(prices.findIndex(element => element > 400))
// console.log(prices.findIndex(element => element > 800))
// -------------------------------------------------------------

// Array.prototype.filter(): returns a new array contains the all elements of the calling array which the provided filter
// function returns true. Returns empty array if nothing found
// const filterPrices = prices.filter((element) => {
//     return element > 400
//     // return element > 1400
// })
// console.log(filterPrices);
// ===========================================================================

// 3. Sorting and comparing an array:
// Array.sort(): Sorts the element of an array in place and returns the sorted array. The default sort order is ascending by
// Converting the elements into strings then comparing the sequence of utf-16 code units value
// const numbers1 = [23, 56, 12, 67, 2, 1, 98, 999]
// however the numbers are sorted it returns 2 after 1 but in this case it returns 12 after 1 the reason is its first
// convert into string the perform sort
// console.log(numbers.sort());
// const months = ["Jan", "Feb", "March", "April", "May", "June"]
// console.log(months.sort());
// ===================================================================

// 4. CRUD in array(changes original array)
// const animals = ["deer", "bear", "cow"]
// push(): add one or more elements at the end of an array and returns the new length of array

// const count = animals.push("buffallo")
// console.log(animals);
// console.log(count);
// animals.push("chicken", "cats")
// console.log(animals);

// array.prototype.unshift(): add one or more elements at the begining of an array and returns the new length of array
// const count = animals.unshift("buffallo")
// const count = animals.unshift("buffallo", "leopard", "tiger")
// console.log(animals);
// console.log(count);
// const numbers = [1, 3, 5]
// console.log(numbers.unshift(4, 6));
// console.log(numbers);
// ----

// Array.prototype.pop(): removes the last Element from an array. It returns the popped or deleted element
// const plants = ["rose", "lily", "tulip", "daisy", "sunflower", "hydrangea", "daffodil", "carnation", "orchid", "hibiscus"]
// const count = plants.pop()
// console.log(plants);
// console.log(count);

// Array.prototype.shift():removes the first element from array and return it
// const count = plants.shift()
// console.log(plants);
// console.log(count);

// Array.prototype.splice(): Add or remove Elements from an array. Can perform all CRUD operations
/*Tasks: Use One method only
1: Add Dec at the end of array
2: What is the return value of splice method
3: Update march to March
4: Delete June from array
*/
const months = ["Jan", "march", "April", "June", "July"]

// Add an element
// sol1:
// months.splice(5, 0, "Dec")
// const newMonths = months.splice(months.length, 0, "Dec")
// console.log(months);

// sol2: return value of splice method => returns deleted elements
// console.log(newMonths);

// sol3: Update
// 1st method: must know index
// const updateMonth = months.splice(1, 1, "March");

// 2nd method: No need to know index
// const indexOfMonth = months.indexOf("march");
// if (indexOfMonth !== -1) {
//     months.splice(indexOfMonth, 1, "March")
//     console.log(months);
// }
// else {
//     console.log("No such data found");
// }

// sol4: Delete
// const indexOfMonth = months.indexOf("June");
// if (indexOfMonth !== -1) {
//     // 2nd arguement is no of element you want to delete
//     const delMonth = months.splice(indexOfMonth, 1)
//     console.log(months);
//     console.log(delMonth);
// }
// else {
//     console.log("No such data found");
// }


// Delete all elements from certain element
// const indexOfMonth = months.indexOf("April");
// if (indexOfMonth !== -1) {
//     // 2nd arguement is no of element you want to delete
//     const delMonth = months.splice(indexOfMonth, Infinity)
//     console.log(months);
//     console.log(delMonth);
// }
// else {
//     console.log("No such data found");
// }
// ====================================================

// 5. Map And Reduce method: does not change original array.
//  Array.prototype.map(): returns a new array containing the results of a
// function on every element in this array-> returns true or false
// const arr1 = [1, 4, 7, 9, 12, 34, 13, 87, 19]
// const newArr = arr1.map((element, index, array) => {
//     // console.log(element, index, array);
//     return element > 9
// })

// map method does not mutate original array but foreach do
// let newArr = arr1.map((elem, ind, arr) => {
//     return `${ind} : ${elem} of ${arr}`
// })
// }).reduce(elem => elem > 9)
// console.log(arr1);
// console.log(newArr);

// Difference between map and forEach:
// 1. map returns new array while forEach returns undefined
// 2. map doen not change original array but forEach change original array
// 3.}).reduce(elem => elem > 9) such type of things you can not do with forEach
// let newArrForEach = arr1.forEach((elem, ind, arr) => {
//     return `${ind} : ${elem} of ${arr}`
// })
// console.log(arr1);
// console.log(newArrForEach);
// -------------------------------------------

// reduce method: does not change original array
// Array.prototype.reduce((accumulator,element,index,array)=>code)
// accumulator is the initial value, element is the current value, index is the index of current element, array is the array
// return the final value
// const arr1 = [1, 4, 7, 9]
// const newArr = arr1.reduce((accumulator, element, index, array) => {
//     debugger;
//     return accumulator + element
// Add an element in array then add
// }, 7)
// console.log(arr1);
// console.log(newArr);
// ------------------------------------------------------

// Flatten an array or converting 2d or 3d array into one dimensional array
const arr = [
    ["zone_1", "zone_1.1"],
    ["zone_2", "zone_2.1"],
    ["zone_3", "zone_3.1"]
]
const flatArr = arr.reduce((accum, elem) => accum.concat(elem))
console.log(flatArr);

