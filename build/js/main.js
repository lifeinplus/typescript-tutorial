"use strict";
// Utility Types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studenId: "compcsi123",
    title: "Final Project",
    grade: 0,
};
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);
// Required and Readonly
const recordAssignment = (assign) => {
    return assign;
};
const assignVeified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// assignVeified.grade = 88; // error
// recordAssignment(assignGraded); // error
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const FinalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studenId: "k123",
    grade: 85,
};
const assignPreview = {
    studenId: "k123",
    title: "Final Project",
};
// ReturnTypes
// type newAssign = { title: string; points: number };
// const createNewAssign = (title: string, points: number): newAssign => {
//     return { title, points };
// };
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .catch((err) => {
        if (err instanceof Error) {
            console.log(err.message);
        }
    });
    return data;
});
fetchUsers().then((users) => console.log(users));
