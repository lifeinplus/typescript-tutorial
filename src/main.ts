// Index Signatures

// interface TransactionObj {
//     readonly [index: string]: number;
// }

interface TransactionObj {
    readonly [index: string]: number;
    pizza: number;
    books: number;
    job: number;
}

const todaysTransactions: TransactionObj = {
    pizza: -10,
    books: -5,
    job: 50,
};

console.log(todaysTransactions.pizza);
console.log(todaysTransactions["pizza"]);

let prop: string = "pizza";
console.log(todaysTransactions[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.pizza = 40;

console.log(todaysTransactions["dave"]);

interface Student {
    // [key: string]: string | number | number[] | undefined;
    name: string;
    gpa: number;
    classes?: number[];
}

const student: Student = {
    name: "Doug",
    gpa: 3.5,
    classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
    console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "gpa");

// interface Incomes {
//     [key: string]: number;
// }

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes]);
}
