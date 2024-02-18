// export const a = "atique";

// tsc --init in terminal

// let a: string | number | boolean = "atique";
// a = "Fahad"
// a = 10
// a = true

// let age: number = 22;

// age.toFixed(2)  // toFixed is for .00
// console.log(age.toFixed(2))

// let firstName: string = "Muhammad Atique Qayum";

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// let age: string = "22";

// console.log(typeof age);

//et age: string| number  = "22";

// if (typeof age === "string") {
//     age.toUpperCase()
// } else 

// let newAge = Math.random() > 0.5 ? 22 : "khan";
// console.log(Math.random())

// if(typeof newAge === "string") {
//     newage
//  console.log(newAge)

// let trafficlights: "red"| "green"| "yellow" = "yellow";  // litreal type in which you can assighn values

// // trafficlights = "black"    // will show error
// trafficlights =  "green"

let teacher: {
    name: string,
    salary: number,
    "full-name": string,
} = {
    name: "Atique",
    salary: 59999,
    "full-name": "Muhammad Atique"
}

console.log(teacher.name)
console.log(teacher.salary)
console.log(teacher["full-name"])


// type Student = string | number | boolean | undefined  // no you can make a data type
// let a: Student    // define a data type as student
// let b: Student

type Student = {
    name: string,
    age: number,
}

let student1 : Student = {
    name: "Atique Qayum",
    age: 22,
}

let student2 : Student = {
    name: "Jasim",
    age: 22,
}
console.log(student1, student2) 


type Deal1 = {
    food: string,
}

type Deal2 = {
    food: string,
    drink: string,
}

let atiqueorder: Deal1 = {
    food: "Briyani"
}

let jasimorder: Deal2 = {
    food: "Briyani",
    drink: "pakola"
}

// atiqueorder = jasimorder;      //atiqueorder include food and jasimorder include food and drink hence the atiqueorder complete the miniman order 
// console.log(atiqueorder)

// jasimorder = atiqueorder        // it will show the error message
// console.log(jasimorder)

