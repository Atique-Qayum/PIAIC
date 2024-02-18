"use strict";
// //   in terminal write a commond (tsc -w) for watch.
// // in terminal write a commond (tsc --init) for "tsconfig.json"
let firesName = "Atique";
let lastName = "Qayum";
let secondperson = "Hamza";
if (firesName === "atique" || lastName === "qayum") {
    console.log("You'r not allowed in the class");
}
else {
    console.log("You'r allowed in the class");
}
function greet() {
    console.log("Hello Atique");
}
greet(); // alt + shift + downkey for mulitple copy 
greet();
greet();
greet();
function sum() {
    console.log(2 + 2);
}
greet();
sum();
greet();
function greet2(name) {
    console.log("welcome to PIAIC ", name);
}
greet2("Atique");
greet2("Jasim");
greet2("Fahad");
function sum1(num1, num2) {
    //console.log(num1 + num2)
    return num1 + num2;
}
sum1(4, 4);
function mulitple(num1) {
    console.log(num1 * 2);
}
mulitple(10);
let ans = sum1(5, 10);
console.log(ans);
mulitple(ans);
// array
let fruits = ["apple", "orange", "banana", "pinapple"];
let students = ["atique", "fahad", "jasim", "nasir"];
let courses = ["AI", "CNC", "Blockchain", "IoT"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[0], fruits[1], fruits[2], fruits[3]);
console.log(fruits.length);
console.log(students.length);
console.log(courses.length);
// create a prime number function
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
