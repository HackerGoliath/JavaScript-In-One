// Guess the output
// Q1.
// const obj = {
//     age: 26,
//     myName: () => {
//         console.log(this);
//         console.log(this.age);
//         // here this refers to obj. current context changed from window to object in which this exist
//     }
// }
// obj.myName()

// Conclusion: this does not work with arrow function as worked in normal function bcz here this refers to window global object
// ---

// Q2.
let bioData = {
    myName: {
        name: "Deepak",
        channel: "Babban Technical"
    },
    myAge: 26,
    getData() {
        console.log(`My Name is ${this.myName.name} my channel is ${this.myName.channel} and my age is ${this.myAge}`);
    }
}

// here the current context of this is object
bioData.getData()