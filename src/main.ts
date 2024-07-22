// Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string;
    active: boolean;
    albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

// Literal Types

let myName: "Artem";
let userName: "Artem" | "John" | "Amy";

userName = "Amy";

// Functions

const add = (a: number, b: number): number => {
    return a + b;
};

const logMsg = (message: any): void => {
    console.log(message);
};

console.log("Hello!");
console.log(add(2, 3));

let subtract = (a: number, b: number): number => {
    return a - b;
};

type MathFunction = (a: number, b: number) => number;

// interface MathFunction {
//     (a: number, b: number): number;
// }

let multiply: MathFunction = (a, b) => {
    return a * b;
};

logMsg(multiply(2, 2));

// Optional Parameters

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};

// Default Param Value

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c;
};

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(10, 2, 3));

// Never Type

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
};

const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
        if (i > 100) {
            break;
        }
    }
};

// Custom Type Guard

const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

// Use of the Never Type

const numberOfString = (value: number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError("This should never happen");
};
