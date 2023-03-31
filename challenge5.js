// WAP to check whether it is leap year or not
var year = 2004
debugger;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        console.log(`The year ${year} is not a leap year`);
        if (year % 400 === 0) {
            console.log(`The year ${year} is a leap year`);
        } else {
            console.log(`The year ${year} is a leap year`);
        }
    } else {
        console.log(`The year ${year} is a leap year`);
    }
}
else {
    console.log(`The year ${year} is not a leap year`);
}