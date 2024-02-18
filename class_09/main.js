"use strict";
// function sum() {
//     console.log(2+2)
// }
Object.defineProperty(exports, "__esModule", { value: true });
function add(arg1, arg2) {
    return arg1 + arg2;
}
let result = add(4, 7);
console.log(result);
// tuples
let fruits = ["apple", "mango", "banana", 2,];
fruits.pop(); // remove
fruits.push("peach");
console.log(fruits);
