// Utility Types

// Partial

interface Assignment {
    studenId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
    studenId: "compcsi123",
    title: "Final Project",
    grade: 0,
};

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign;
};

const assignVeified: Readonly<Assignment> = { ...assignGraded, verified: true };
// assignVeified.grade = 88; // error

// recordAssignment(assignGraded); // error
recordAssignment({ ...assignGraded, verified: true });

// Record

const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const FinalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U",
};

interface Grades {
    assign1: number;
    assign2: number;
}

const gradeData: Record<Students, Grades> = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studenId" | "grade">;

const score: AssignResult = {
    studenId: "k123",
    grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const assignPreview: AssignPreview = {
    studenId: "k123",
    title: "Final Project",
};

// Exclude and Extract

type AdjustedGrade = Exclude<LetterGrades, "U">;
type HighGrades = Extract<LetterGrades, "A" | "B">;

// NonNullable

type AllPossibleGrades = "Artem" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

// ReturnTypes

// type newAssign = { title: string; points: number };

// const createNewAssign = (title: string, points: number): newAssign => {
//     return { title, points };
// };

const createNewAssign = (title: string, points: number) => {
    return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;
const tsAssign: newAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>;
const assignArgs: AssignParams = ["Generics", 100];
const tsAssign2: newAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited – helps us with ReturnType of a Primise

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
            if (err instanceof Error) {
                console.log(err.message);
            }
        });
    return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
