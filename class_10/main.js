"use strict";
// impaortant
// typescript,  HTML and CSS is important because of Next.js
Object.defineProperty(exports, "__esModule", { value: true });
// function hello() {
//     console.log("hello atique");
// }
// function world() {              // call back function
//     hello();
// }
// world();
// function hello() {
//     console.log("hello atique");
// }
// function world(callback: any) {              // call back function
//     callback();
// }
// world(hello);
// function hello(nam: string) {
//     console.log(nam);
// }
// function world(x: string, callback: any) {              
//     callback(x);
// }
// world("hello atique", hello);
// console.log("first")
// function prinstSecont() {
//     console.log("second")
// }
// setTimeout(prinstSecont,2000)
// console.log("third")
// console.log("first")
// setTimeout(()=>console.log("second"),2000)
// for(let i: = 0  ; i <1000000000 ; i++) {
//     let b = 0
// }
// console.log("third")
// setTimeout(()=>{
//     console.log("user profile")
//     setTimeout(()=>{
//         console.log("user post")
//         setTimeout(() => {
//             console.log("user comment")  
//         },1000)
//     },2000)
// },3000)
// let mypromise = new Promise((resolve, reject)=>{
//     console.log("promise pending...")
//     setTimeout(() => {
//         // console.log("promise resolved...")
//         // resolve("atique")
//         console.log("promise rejected")
//         reject("data fetch failed")
//     }, 2000);
// })
// mypromise.then((res)=>(console.log(res))).catch((err)=>(console.log(err)))
// let mypromise = new Promise((resolve, reject)=>{
//     console.log("promise pending...")
//     setTimeout(() => {
//         // let data = ("Atique")  
//         let data = ""
//         if(data){
//             console.log("promise resolved")
//             resolve(data)
//         }else(
//             console.log("promise rejected")
//             reject("data fetch failed")
//         )
//     }, 2000);
// })
// mypromise.then((res)=>(console.log(res))).catch((err)=>(console.log(err)))
// let data = fetch("https://jsonplaceholder.typicode.com/users")         //enter url 
// .then((res)=>res.json())
// .then((res)=>(console.log(res)))
// .catch((err)=>(console.log(err)))
// console.log("data", data)
async function dataFunc() {
    let fetchdata = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await fetchdata.json();
    console.log(data);
}
dataFunc();
