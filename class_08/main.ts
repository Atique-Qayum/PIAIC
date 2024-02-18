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

enum Days {
    Mondays,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

console.log(Days.Sunday);

let meetingDay:Days = Days.Friday;

if(meetingDay === Days.Friday) {
    console.log("Meeting at 10:00 AM")
} else if (meetingDay === Days.Sunday) {
    console.log("No Meeeting")
}


enum Operators {
    addition,
    subtraction,
    multiplication,
    division,
}

let calculator: Operators = Operators.addition;

if (calculator === Operators.addition) {
    console.log("you have selected addition") 
} else if (calculator === Operators.subtraction) {
    console.log("you have not selected addition")
}


type per = {
    name: string;
}

let p1: per[] = [
    {
        name : "Atique"
    },
    {
        name : "jasim"
    },
    {
        name : "Hamzah"
    }
]

console.log(p1[1].name)

