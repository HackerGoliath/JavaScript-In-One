// Nan -> It is the property of the global object means it is variable in global scope.
// The initial value of Nan is Not a number

// console.log("Deepak" - "Rohan");

var myPhone = 9865741236
var myName = "Deepak"
console.log(isNaN(myPhone));
console.log(isNaN(myName));

if (isNaN(myPhone)) {
    console.log("Please enter valid phone number");
}
else {
    console.log("Phone number is correct");
}