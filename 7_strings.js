// String is zero or more chars inside quotes
// Strings can be created as primitives from string literals or as object using the String() constructor
// let fname = "Deepak 8"
// let lname = 'Bhau'
// let friend = new String("Rohan") // returns array
// console.log(fname, lname, friend);
// ------------

// length property
// console.log(fname.length);
// -----------

// Escape Character (\)
// let sentence = "We are the so-called \"Vikings\" from the North"
// or you can use alternate quotes
// sentence = 'We are the so-called "Vikings" from the North'
// console.log(sentence);
// ----------

// indexOf -> returns the first occurence of a given string from begining(forward searching). returns -1 if match not found
// let bioData = "I am the Deepak Teachnical Deepak"
// let index = bioData.indexOf("Deepak");
// starting position
// let index = bioData.indexOf("Deepak", 14);
// console.log(index);

// lastIndexOf -> returns the first occurence of a given string from end. returns -1 if match not found
// let bioData = "I am the Deepak Teachnical Deepak"
// let index = bioData.lastIndexOf("Deepak");
// console.log(index);
// starting position
// index = bioData.lastIndexOf("Deepak", 26);
// console.log(index);
// ----

// Array.prototype.search(): Find the first substring match in a regular expression. Can not take start position arguement
// returns -1 if nothing found
// const bioData = "I am Deepak technical"
// const sData = bioData.search("a")
// console.log(sData);
// ==========================================

// Extracting String Parts - Original array not changed
// Ther are three methods
// slice(start, end)
// substring(start, end)
// substr(start, length)

// The slice() Method: extracts a part of the string and returns it
// takes 2 parameters start and end position(end not included)
// let myStr = "Apple Banana Kiwi"
// let slStr = myStr.slice(0, 4)
// -2 means skip last 2 char from end of string
// let slStr = myStr.slice(6, -2)
// 2nd arg is optional
// let slStr = myStr.slice(7)
// console.log(slStr);

// substring() Method: It is similar to slice but it can not accept negative indexes
// let sStr = myStr.substring(0, 4)
// sStr = myStr.substring(4, -1) // can not take negative indexes. It takes as (0,4)
// sStr = myStr.substring(3, 7)
// console.log(sStr);

// substr() Method: It is similar to slice method. difference is that the second parameter specifies the
//  length of the extracted part
// let sStr = myStr.substr(0, 4)
// sStr = myStr.substr(4, -2) // return nothing if second arg is negative
// it is useful when you want extracted string from end of the string
// sStr = myStr.substr(-4)
// console.log(sStr);
// =====================================

// replace srting method: replaces a specified value with a given value and returns modified string.
//Does not change original string. Syntax: String.prototype.replace(searchFor,replaceWith)
// let myName = "My name is deepak babulal banaras vale deepak"
// replace method replace only first occurence
// let repStr = myName.replace("deepak", "Deepak")
// replaceAll is used to replace all occurences
// repStr = myName.replaceAll("deepak", "Deepak")
// console.log(myName);
// console.log(repStr);
// ============================================

// Extracting String Charcters
// charAt(position)
// charCodeAt(position)
// Property Access[]

// charAt() Method: returns the character at a specified index in the string
// let myStr = "Hello World"
// console.log(myStr.charAt(0));

// charCodeAt() method: returns the ASCII value/(unicode value(UTF-16[an integer between 0 and 65535])) of the character at a specified index in the string
// console.log(myStr.charCodeAt(0));

// Property Access : ECMA Script(2009) allows property access on strings
// console.log(myStr[0]);
// =======================================================


// ----------------------------Other Useful Methods---------------------------

// Upper and Lower Case - does not change original string
// let myName = "Deepak Bhai"
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());
// console.log(myName);
// ----

// concat() - concat one or more strings - does not change original string
// let fname = "Deepak"
// let lname = "Bhai"
// console.log(fname + lname);
// console.log(`${fname} ${lname}`);
// console.log(fname.concat(lname));
// console.log(fname.concat(" ", lname, "Babban"));
// console.log(fname, lname);

// trim() method: removes whitespaces from both sides of the string but not between strings
// let myStr = "       Hello       World          "
// let trimmedStr = myStr.trim();
// console.log(trimmedStr);
// ---

// Convert String to Array
// split() Method: Convert string to an array. returns an array of split texts
let txt = "a,b,c | d,e,f"
let arr = txt.split(","); // split on commas
console.log(arr);
arr = txt.split(" "); // split on spaces
console.log(arr);
arr = txt.split("|"); // split on pipes
console.log(arr);

