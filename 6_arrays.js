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

// Array.prototype.splice(): Add or remove Elements from an array
/*Tasks: Use One method only
1: Add Dec at the end of array
2: What is the return value of splice method
3: Update march to March
4: Delete June from array
*/
const months = ["Jan", "March", "April", "June", "July"]