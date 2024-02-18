"use strict";
// package.json terminal npm init --yes
Object.defineProperty(exports, "__esModule", { value: true });
// // let a  = 1
// // a <= 10;
// // a++
// for (let a  = 1;a <= 10;a++) {
//     console.log(a)
// }
// for (let a  = 1;a <= 3;a++) {
//     console.log(a)
// }
// for (let a  = 1;a <= 10;a++) {
//     console.log("2","x", a,"=", a*2,)
// }
// // nested loops
// for (let a  = 1;a <= 2;a++) {
//     console.log(a)
// for (let b  = 1; b <= 4;b++) {
//     console.log(b)
// }
// }
// lett mag = "hello" // it  syntax error
// console.logg("hello") // its a type error
// let a = 10
// a = abc // its a assinge type error
// // let a:string = "Pakistan" //strongly typed syntax error
// if (true) {
//     let a = 20;
//     const b = 20;
//     var c = 30;
// }
// //console.log(a)  // let need to in block as it  scope is block scope
// //console.log(b)  // const need to in block as it  scope is block scope
// console.log(c)    // var doesn't need block scope
// let a = 20;
// if (true) {
//     const b = 20;
//     var c = 30;
//     console.log(a) // a is global scope and can be assisible inside the funtion/block or outside the funtion/block
// }
// module
// import {f, g} from "./service";
// import z from "./hello";
// console.log(f);
// console.log(g);
// console.log(z);
// // package.json terminal npm init --yes
// // npm i inquirer  // to  install the npm package node modules and packages.json
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt({
    type: "input",
    name: "firstname",
    message: "What is your first name?",
});
console.log(answer.firstname);
