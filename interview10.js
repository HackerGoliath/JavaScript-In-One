// What will be the output of sum(5)(3)(8)?
// Function Currying:
function sum(n1) {
    // console.log(n1);
    return function (n2) {
        // console.log(n1, n2);
        return function (n3) {
            console.log(n1, n2, n3);
        }
    }
}
sum(5)(3)(8)