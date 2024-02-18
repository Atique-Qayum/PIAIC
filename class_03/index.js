"use strict";
// // in terminal write a commond (tsc index.ts) for index.js file. the purpose of it is trasfilation. 
// //   in terminal write a commond (tsc -w) for watch.
// // in terminal write a commond (tsc --init) for "tsconfig.json"
let user_name;
user_name = "Atique";
user_name = 456;
console.log(user_name);
let studencGender = "Male";
if (studencGender == "Male") {
    console.log("You have to enter from Left Gate");
}
else {
    console.log("You have to enter from Right Gate");
}
console.log("hello world");
let salary = 50000;
let montlyexpense = 80000;
if (salary <= 40000) {
    console.log("you dont have enough money");
}
else {
    console.log("you have enough money");
}
console.log("Taking Descisions...");
if (true) {
    console.log("Descision! True!");
}
if (2 > 3) {
    console.log("2 is greater than 3");
}
let biscuit = false;
let raita = false;
if (raita) {
    console.log("Buy Samosa");
}
else if (biscuit) {
    console.log("Buy Biscuit");
}
else {
    console.log("Don't buy");
}
let budget = 40000;
let cycle = 45000;
let color = "Black";
if (((budget <= cycle) && color == "green") || color == "black") {
    console.log("buy cycle");
}
else {
    console.log("I have to built more skills to afford this cycle");
}
let n = "4";
let user = "Atique";
console.log(n); // single = assign
console.log(n == 4 && user == "Atique"); // double == match
console.log(n === 2); // triple === match - data type
