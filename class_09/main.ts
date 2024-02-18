// function sum() {
//     console.log(2+2)
// }

// console.log(sum())
// sum()


// function sum() {
//     return 1 + 2;
// }

// // console.log(sum())

// let resumlt = sum();

// console.log(++resumlt)

// function sum(num1, num2) {
//     return num1 + num2;
// }

// let resumlt = sum(5,4);

// console.log(resumlt)

// let sum = function(num1: number, num2: number): number {
//     return num1 + num2;
// }

// console.log(sum(3, 9))

// type Sum = (num1: number, num2: number) => number;

// let sum: Sum = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(3, 3))

// type Sum = (num1: number, num2: number) => number

// let add: Sum = function (num1, num2) {
//     return num1 + num2;
// }

// let result = add(5,5);
// console.log(result)

// arrow function
// let sum1 = (num1: number, num2:number): number => num1 + num2;  // without {}

// let result = sum1(3,6);
// console.log(result)

// let sum2 = (num1: number, num2: number): number {               // with {}
//     return num1 + num2;
// }

// let result1 = sum2(2,3);
// console.log(result1)

// let fullName = (firstName: string, lastName: string) => firstName +" "+ lastName;

// let fullN = fullName('Atique', 'Qayum')

// console.log(fullN)


// let fullName = (firstName: string, lastName?: string) => {      //  last name is optional
//     if (lastName === undefined) {
//         return firstName
//     }
//     else {
//         return firstName + " " + lastName
//     }

// } 

// let fullN = fullName('Atique')

// console.log(fullN)


// let fullName = (firstName: string, lastName = "Rajput" ) => {        // last name is default Rajput 
//     //console.log(firstName, lastName)
//     return firstName + " " + lastName
// };

// let fullN = fullName('Atique')                                       // in case you dont pass last name it will print the default value

// console.log(fullN)

// let  makeMassage = (name: string,  ...message: string[]) => {

//     console.log(message.join(" _ "))
// }

// makeMassage("Ali", "Jasim", "Atique", "Saba", "laiba", "namrah")

// // overloads

// function add(ary1: number, ary2: string): string;
// function add(ary1: string, ary2: number): string;
// function add(ary1: string, ary2: string): string;

// function add(ary1: any, ary2: any): any {
//     return ary1 + ary2
// }

// add(2, "Atique")
// add("atique", 4)
// add("atique", "qayum")
// add(2, 2)                   // show error


function add(ary1: number, ary2: number): number;  //option 1
function add(ary1: string, ary2: string): string;  // option 2
function add(ary1: boolean, ary2: boolean): boolean;  // option 3

function add(arg1: any, arg2: any): any {
    return arg1 + arg2;
}

let result = add(4, 7)
console.log(result)

// tuples

let fruits:[string, string, string, number]  = ["apple", "mango", "banana", 2,]

fruits.pop() // remove
fruits.push("peach")
console.log(fruits)