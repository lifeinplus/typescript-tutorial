let stringArray = ["one", "hey", "Artem"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];

stringArray[0] = "John";
stringArray.push("hey");

guitars[0] = 42;
guitars.unshift("Jim");

let test = [];
let bands: string[] = [];
bands.push("Van Halen");

// Tuple
let myTuple: [string, number, boolean] = ["Artem", 42, true];

let mixed = ["John", 1, false];

myTuple[1] = 42;

// Objects
let myObject: object;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};

const exampleObject = {
    prop1: "Artem",
    prop2: true,
};

exampleObject.prop1 = "John";

interface Guitarist {
    name?: string;
    active: boolean;
    albums: (string | number)[];
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
    active: true,
    albums: ["I", "II", "IV"],
};

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!`;
};

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U);
