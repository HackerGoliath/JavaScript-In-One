//1. Find the square root of each in 
// const arr1 = [25, 36, 49, 64, 81]
// const newArr = arr1.map(x => x ** (1 / 2))
// const newArr = arr1.map(x => Math.sqrt(x))
// console.log(newArr);

// 2. Multiply each element by 2 and return only those which are greater than 10
const arr2 = [2, 3, 4, 6, 8]
// const newArr2 = arr2.map(x => x = x * 2).filter(x => x > 10)
// if we want some of rest elements use chainable method
const newArr2 = arr2.map(x => x = x * 2).filter(x => x > 10).reduce((accumulator, elem) => accumulator + elem)
console.log(newArr2);

