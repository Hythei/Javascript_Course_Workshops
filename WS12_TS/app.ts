// Step 1 Variable
let num:number = 50;
let str:string = "example";
let yesno:boolean = false;
let anytype = "containst a string";

//Step 2 arrays and Tuples
const numbers: number[] = [1, 2, 3,];
const strings: string[] = ["Sean1", "Sean2", "Sean3"];
let tuplething: [string, number, boolean];
tuplething = ["Sean", 22, false];

//Step 3 Functions
function sumUp(x: number, y:number){
    return x + y;
}


function stringFunc(a: string, b: string){
    console.log(`${a} + ${b}`);
}

//Step 4 Unions
let mixed_var: number|string;
mixed_var = "test_string";

type A = { string: string};
type B = { number: number};
type C = A & B;
let intersected_var: C = {string: "jotain", number: 1111};

//Step 5 Type Aliases
type sum_function = (x: number, y: number) => number;

const add: sum_function = (x, y) => {
    return x + y ;
};

let result = add(1,5);

//Step 6 Enums
enum Weekdays {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday",
}

// Step 7 Declare Type Assertion
let any_variable: any = "it be something";
let string_var = any_variable as string;

// Step 8 Outputs
console.log("Step 1:", num, str, yesno, anytype);
console.log("Step 2 Arrays:", numbers, strings);
console.log("Step 2 Tuple:", tuplething);
console.log("Step 4:", mixed_var);
console.log("Step 4 Intersection:", intersected_var);
console.log("Step 5:", result);
(Object.keys(Weekdays) as Array<keyof typeof Weekdays>).forEach(key =>
{
    console.log(Weekdays[key]);
}
);
console.log("Step 7:", string_var);