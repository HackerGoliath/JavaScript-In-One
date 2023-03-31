// Expression: It is a combination of operand and operator
// 5 + 4
// Here 5 and 4 are operands and + is operator
/*
1. Assignment Operators ->
   An assignment operator assigns the value to its left operand based on the value to its right operand
   The simple assignment operator is equal(=)
*/

var x = 5;
var y = 5;
// console.log("Is both x and  are equal : " + x == y);
// console.log("Is both x and  are equal : " + (x == y));
// console.log(`Is both x and  are equal : ${x == y}`);
// ------------------------------------------------------

/*
2. Arithmetic Operator
An arithmetic operator takes numerical values (either literals or variables) as their operands and
returns a single numerical value
 */

// console.log(18 + 6);
// console.log(18 - 6);
// console.log(18 * 6);
// console.log(18 / 6);
// console.log(19 % 6);


/*
Increment and decrement operator
Operator: x++ or ++x or x-- or --x
If used postfix, with operator after operand (for eg, x++),
The increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for eg, ++x),
The increment operator increments and returns the value after incrementing.
*/
// Postfix
// x = 15
// y = x++
// console.log("x = " + x)
// console.log("x++ = " + (x++))
// console.log("y = " + y)

// x = 15
// y = x-- + 5
// console.log("x = " + x)
// console.log("x-- = " + (x--))
// console.log("y = " + y)

// Prefix
// x = 15
// y = ++x
// console.log("x = " + x)
// console.log("++x = " + (++x))
// console.log("y = " + y)

// x = 15
// y = --x + 5
// console.log("x = " + x)
// console.log("--x = " + (--x))
// console.log("y = " + y)
// ------------------------------------------------

// 3. Comparison Operator
// x = 30
// y = 10
// console.log(x == y);
// console.log(x === y);
// console.log(x < y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x >= y);
// console.log(x != y);
// console.log(x !== y);
// -----------------------------------------------------

// 4. Logical Operator
x = 30
y = -20
// Logical AND(&&) or Logical Conjunction - returns true if all exp are true
// console.log(x > y && y > 0);

// Logical OR(||) - returns true if one or more exp are true
// console.log(x > y || y > 0);

// Logical NOT(!) - change truth to falsity and vice versa
// console.log(!(x > y) || y > 0);
// console.log(!true);


// 5. String Concatenation (+) - returns the union of two operand strings
console.log("Hello " + "World");


