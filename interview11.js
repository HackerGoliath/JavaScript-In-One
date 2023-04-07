// difference between synchronous and asynchronous Js?
// Synchronous -> One at a time
// eg:
// const func2 = () => console.log("Function 2 is called")

// const func1 = () => {
//     console.log("Function 1 is called");
//     func2();
//     console.log("Function 1 is called again 🤩");
// }
// func1();

// Asynchronous(more than one at a time) -> Asynchronous programming in JavaScript allows for the execution of code without blocking the main thread
// eg:
const func2 = () => {
    setTimeout(() => {
        console.log("Function 2 is called")
    }, 2000)
}

const func1 = () => {
    console.log("Function 1 is called");
    func2();
    console.log("Function 1 is called again 🤩");
}
func1();
