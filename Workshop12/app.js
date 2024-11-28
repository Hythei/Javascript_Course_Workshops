"use strict";
// Step 1 Variable
let num = 50;
let str = "example";
let yesno = false;
let anytype = "containst a string";
//Step 2 arrays and Tuples
const numbers = [1, 2, 3,];
const strings = ["Sean1", "Sean2", "Sean3"];
let tuplething;
tuplething = ["Sean", 22, false];
//Step 3 Functions
function sumUp(x, y) {
    return x + y;
}
function stringFunc(a, b) {
    console.log(`${a} + ${b}`);
}
//Step 4 Unions
let mixed_var;
mixed_var = "test_string";
let intersected_var = { string: "jotain", number: 1111 };
const add = (x, y) => {
    return x + y;
};
let result = add(1, 5);
//Step 6 Enums
var Weekdays;
(function (Weekdays) {
    Weekdays["Monday"] = "Monday";
    Weekdays["Tuesday"] = "Tuesday";
    Weekdays["Wednesday"] = "Wednesday";
    Weekdays["Thursday"] = "Thursday";
    Weekdays["Friday"] = "Friday";
    Weekdays["Saturday"] = "Saturday";
    Weekdays["Sunday"] = "Sunday";
})(Weekdays || (Weekdays = {}));
// Step 7 Declare Type Assertion
let any_variable = "it be something";
let string_var = any_variable;
// Step 8 Outputs
console.log("Step 1:", num, str, yesno, anytype);
console.log("Step 2 Arrays:", numbers, strings);
console.log("Step 2 Tuple:", tuplething);
console.log("Step 4:", mixed_var);
console.log("Step 4 Intersection:", intersected_var);
console.log("Step 5:", result);
Object.keys(Weekdays).forEach(key => {
    console.log(Weekdays[key]);
});
console.log("Step 7:", string_var);
