// What is Event Loop:
// eg:
const func2 = () => {
    setTimeout(() => {
        console.log("Function 2 is called")
    }, 2000)
}

const func1 = () => {
    console.log("Function 1 is starting");
    func2();
    console.log("Function 1 is ending 🤩");
}
func1();