"use strict";
// you can assign a value to variables by var and let both.
var a = ("this is the first variable in the typescript file");
console.log(a);
let powder = ("haldi powder is stored in variable powder");
console.log(powder);
// you can change the the value of variables by passing a new
powder = ("lal mirch powder is replace by haldi powder");
console.log(powder);
// "//" this is single line comment.
// in "var" you can overwrite variables value
// in "let" you can't overwrite variables value with same variable name.
// in "const" you can't change the value of variables.
// so it is recommended to use the "let"
/*
var atique = ("atique")
var atique = ("atiqueqayum")          // the variable value is overwritten

console.log(atique)


let atique2 = ("atique2")
let atique2 = ("atique2 ")            // the variable value cant be overwritten and showing error

console.log(atique2)

const atique3 = ("atique3")
const atique3 = ("atiqueqayum")      // const also showing error message in overwriting variables value

console.log(atique3)
*/
// in termal write a commond (tsc --init) for tsconfig.json
let firstname = "atique qayum";
let age = 29;
let married = false;
let job;
let tax = null;
console.log(firstname);
console.log(age);
console.log(married);
console.log(job);
console.log(tax);
let lastname = "rajput";
console.log(firstname + " " + lastname);
console.log(`my name is ${firstname} and lastname is ${lastname}`);
let massage = (`my name is ${firstname} and lastname is ${lastname}`);
console.log(massage);
let qty = 10;
console.log(qty + 2);
console.log(qty - 2);
console.log(qty * 2);
console.log(qty / 2);
let n1 = 2;
let n2 = 2;
console.log(n1 + n2); // addition
let n11 = "2";
let n21 = "2";
console.log(n11 + n21); // concatenation
console.log(n1 * n2); // multiplication
console.log(n1 ** n2); // exponentiation
console.log(n1 % n2); // modulus
console.log(n1 / n2); // division
// let n = 5;                              //assignment operator
// console.log(n); // 5
// n += 5;
// console.log(n); // 10
// n -= 5;
// console.log(n); // 5
let n = 5;
console.log(n == 5); // equal to 
console.log(n === 5); // equal to 
console.log(n != 5); // not equal to 
console.log(n > 8); // greater than
console.log(n < 8); // less than
console.log(n >= 8); // greater than equal to 
console.log(n <= 8); // less than equal to 
