// 1. Object Literals : It is a key:value pair in data structure
// storing variables and functions together in one container
// We can refer this an objects

// Creating Objects:
// 1st way:
// let bioData = {
//     name: "Deepak",
//     age: 26,
//     getData: function () {
//         console.log(`My name is ${this.name} and my age is ${bioData.age}`);
//     }
// }

// bioData.getData();

// 2nd way: No need to write function after es6
// let bioData = {
//     name: "Deepak",
//     age: 26,
//     // 2nd way
//     getData() {
//         console.log(`My name is ${this.name} and my age is ${bioData.age}`);
//     }
// }

// bioData.getData();
// ----

// What if we want object as a value inside an object
// let bioData = {
//     name: {
//         firstName: "Deepak",
//         lastName: "Sharma"
//     },
//     age: 26,
//     getData: function () {
//         console.log(`My name is ${this.name} and my age is ${bioData.age}`);
//     }
// }
// console.log(bioData.name.firstName);
// console.log(bioData.name.lastName);
// bioData.getData();
// ==============================================

//2. this object: it contains the current context. it have different values depending upon where it is placed
// eg: 1.
// console.log(this);
// console.log(this.alert("Awesome"));
// refers to the current context and that is window global object

// eg: 2.
// function myName() {
//     console.log(this);
// }
// myName()
// refers to the window global object

// eg: 3.
// var myNames = "Deepak"
// function myName() {
//     console.log(this.myNames);
// }
// myName()

// eg: 4.
const obj = {
    age: 26,
    myName() {
        console.log(this);
        console.log(this.age);
        // here this refers to obj. current context changed from window to object in which this exist
    }
}
obj.myName()
