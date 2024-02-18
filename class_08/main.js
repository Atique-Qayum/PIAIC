// // nested objects
// type children = {
//     name: string;
//     age: number;
// }
// type person = {
//     name: string;
//     age: number;
//     email: string;
//     Children? : children
// }
// let person1: person = {
//     name: "usman",
//     age: 29,
//     email: "atiqueqayum@gmail.com",
//     Children: {
//         name: "Faheem",
//         age: 11
//     }
// }
// const person2 = {
//     name: "tayyabc",
//     age: 29,
//     email: "tayyabc@gmail.com"
// }
// const children: children = {
//     name: "faheem",
//     age: 25
// }
// // intersection objects
// type Student = {
//     name: string;
//     rollNumber: number;
// }
// type Teacher = {
//     name: string;
//     experience: number;
// }
// let std1: Student {
//     name: "Atique",
//     rollNumber: 123,
// }
// let Teacher1: Teacher {
//     name: "Zia",
//     experience: 10,
// }
// let both: Student & Teacher {
//     name: "Hamza",
//     experience: 23,
//     rollNumber: 22,
// }
// console.log(Teacher1)
// console.log(std1)
// console.log(both)
// console.log(person1)
// let a: unknown = "hello World";
// let b: boolean = true;
// let c: any = "Atique";
// a = 10
// a = true
// a = {}
// // study differecne b/w any and unknown data type in refernce of boolean
// b = a   // showing error 
// c = a   // not shoing error
// let d: string = "hello world";
// if (typeof d === "string") {
//     console.log(d)
// } else {
//     console.log(d);
// }
// d = c
// d = b
// d = a
// // explicit casting 
// let myname: unknown = "atique";
// console.log((myname as string).toUpperCase());
// myname   // data tyoe is still unknown
// Enum
// let meetingDay: string = "Mondays";
// if (meetingDay === "sunday") {
//     console.log("No meeting")
// } else if (meetingDay === "mondays") {
//     console.log("Meeting at 10:00 AM")
// }
var Days;
(function (Days) {
    Days[Days["Mondays"] = 0] = "Mondays";
    Days[Days["Tuesday"] = 1] = "Tuesday";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Sunday);
let meetingDay = Days.Friday;
if (meetingDay === Days.Friday) {
    console.log("Meeting at 10:00 AM");
}
else if (meetingDay === Days.Sunday) {
    console.log("No Meeeting");
}
var Operators;
(function (Operators) {
    Operators[Operators["addition"] = 0] = "addition";
    Operators[Operators["subtraction"] = 1] = "subtraction";
    Operators[Operators["multiplication"] = 2] = "multiplication";
    Operators[Operators["division"] = 3] = "division";
})(Operators || (Operators = {}));
let calculator = Operators.addition;
if (calculator === Operators.addition) {
    console.log("you have selected addition");
}
else if (calculator === Operators.subtraction) {
    console.log("you have not selected addition");
}
let p1 = [
    {
        name: "Atique"
    },
    {
        name: "jasim"
    },
    {
        name: "Hamzah"
    }
];
console.log(p1[1].name);
export {};
