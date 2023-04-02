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
const indexOfMonth = months.indexOf("April");
if (indexOfMonth !== -1) {
    // 2nd arguement is no of element you want to delete
    const delMonth = months.splice(indexOfMonth, Infinity)
    console.log(months);
    console.log(delMonth);
}
else {
    console.log("No such data found");
}