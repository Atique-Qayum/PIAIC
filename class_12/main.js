"use strict";
// class Person {
//     public name: string = "atique";
//     salary: number = 1000000
//     getName() {
//         console.log(this.name);
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// class Human extends Person {
//     hello(){ 
//         this.salary
//     }
// }
// let p = new Person();
// let h  = new Human();
// console.log(p.salary);
// class Person{
//     private _name = "sarmad";           // private, protected, public
//     getName() {
//         return this._name;
// }
// let p = new Person();
// //p.name = "sarmad";              // error is because of private constructor
// class humen extends Person {
// }
// let h = new humen();
// h.
// class Person{
//     private _name = "sarmad"
//     get Name() {
//         return this._name;
//     }
// }
// let p = new Person();
// console.log(p.Name);
// p.Name = "atique"
// console.log(p.Name);
// private _name = "sarmad";
// private _salary = "1000000"
// get salary() {
//     let isallowed = true;
//     if(isallowed) return this._salary
//     return "not allowed";
// }
// set salary(val:string) {
//     this._salary = val;
// }
// updateName(nam:string) {
//     this._name = nam
// }
// class Person {
//     name = "sarmad";
// }
// interface Hello {
//     age:number
//     email?:string
// }
// class hummen implements Person, Hello {
//     name = "bilal";
//     age = 20
// }
// let h = new hummen();
// console.log(h);
// class Player {
//     game() {
//         console.log("circket");
//     }
// }
// class game extends Player {
//     game() {
//         console.log("Football");
//     }
// }
// let g = new game();
// g.game();
// class Animal {
//     sound() : void { console.log("meeooww......");}
// }
// class cat extends Animal {
//     sound(): void {
//         console.log("Meeoow.....")
//     }
// }
// class Cow extends Animal {
//     sound(): void {
//         console.log("Muuuuuu......")
//     }
// }
// class Dog {
//     name = "tommy"
// }
// class Cat {
//     name = "billi"
//     age = 1
// }
// let d:Dog = new Dog()
// let c:Cat = new Cat()   // fresh
// console.log(d)
// console.log(c)
// d = c        // no error
// c = d         //error
// d = new Cat();   // no error
// c = new Dog();   // error
// c = d as Dog();      // error
function genericFunc(val) {
    return val;
}
genericFunc("atiqueBahi");
genericFunc(8);
genericFunc(true);
genericFunc([false, "atiqueBahi", 88]);
console.log(genericFunc([false, "atiqueBahi", 88]));
