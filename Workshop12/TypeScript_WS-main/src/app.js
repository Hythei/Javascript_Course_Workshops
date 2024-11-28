"use strict";
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
sayHello("Mika");
// 1. Declare Variables
let numericVar = 42;
let stringVar = "Hello, TypeScript!";
let booleanVar = true;
let anyVar = "This can be anything.";
// 2. Arrays and Tuples
let numberArray = [1, 2, 3];
let stringArray = ["apple", "banana", "orange"];
let person = ["John", 25, true];
// 3. Functions
function addNumbers(a, b) {
    return a + b;
}
function printString(input) {
    console.log(input);
}
// 4. Union and Intersection Types
let unionVar = 10;
// 6. Enums
var DaysOfWeek;
(function (DaysOfWeek) {
    DaysOfWeek[DaysOfWeek["Monday"] = 0] = "Monday";
    DaysOfWeek[DaysOfWeek["Tuesday"] = 1] = "Tuesday";
    DaysOfWeek[DaysOfWeek["Wednesday"] = 2] = "Wednesday";
    DaysOfWeek[DaysOfWeek["Thursday"] = 3] = "Thursday";
    DaysOfWeek[DaysOfWeek["Friday"] = 4] = "Friday";
    DaysOfWeek[DaysOfWeek["Saturday"] = 5] = "Saturday";
    DaysOfWeek[DaysOfWeek["Sunday"] = 6] = "Sunday";
})(DaysOfWeek || (DaysOfWeek = {}));
// 7. Type Assertion
let anyValue = "This is a string.";
let stringLength = anyValue.length;
// Test the code
console.log(addNumbers(5, 7));
printString("TypeScript is awesome!");
console.log(numberArray);
console.log(stringArray);
console.log(person);
console.log(DaysOfWeek.Monday);
console.log(stringLength);
