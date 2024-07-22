"use strict";
// Type Aliases
// Literal Types
let myName;
let userName;
userName = "Amy";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
console.log("Hello!");
console.log(add(2, 3));
let subtract = (a, b) => {
    return a - b;
};
// interface MathFunction {
//     (a: number, b: number): number;
// }
let multiply = (a, b) => {
    return a * b;
};
logMsg(multiply(2, 2));
// Optional Parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// Default Param Value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// Never Type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};
// Custom Type Guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// Use of the Never Type
const numberOfString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("This should never happen");
};
