/*Type conversion (Implicit converstion/Widening converstion) */
//Javascript, automatically convert data type in certain situation as needed
// result = 2 + true;
// console.log(result);
// console.log(typeof result);

/* Type Casting(Explicit Converstion/ Narrowing converstion) 
Type casting, in Javascript refers to manually converting one data type to another using built-in function.This is different from implict conversion, where Javascript automatically converts the data as needed.

-String to Number
-String to Boolean
-Number to String
-Number to Boolean
-Boolean to String
-Boolean to Number
-Converting Dates to Numbers
-Converting Numbers to Dates



let str = true;
result = Number(str);
console.log(result, typeof result);

let date = new Date();
console.log(typeof date);

let num = date.getTime(); // Converts date to milliseconds since Jan 1, 1970
console.log(num, typeof num); // Output: <number> "number"

let date1 = new Date();
let num1 = Number(date1); // Converts date to milliseconds since Jan 1, 1970
console.log(num1, typeof num); // Output: <number> "number"

let milliseconds = 1793899520929;
let date = new Date(milliseconds);
console.log(date);
// Output: Tue Apr 08 2025 00:00:00 GMT+0530 (India Standard Time)
*/

// let date = new Date();
// let result = date.getTime();
// console.log(result);
// let date1 = new Date();
// let result1 = Number(date1);
// console.log(result1);
