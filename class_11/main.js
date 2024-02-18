"use strict";
// class house {                          // why do we need class? to maintain and to have a good code.
//     numberOfRooms: number = 4;
//     numberOfBathrooms: number = 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// let house1 = new house();
// console.log(house1.numberOfRooms);
// console.log(house1.numberOfBathrooms);
// console.log(house1);
// class person {
//     name: string = "atique";
//     education: string = "BSCS";
//     age: number = 22;
//     located: string = "Karachi";
//     program: string = "PIAIC Web 3 & Metaverse";
// }
// let person1 = new person();
// let person2 = new person();             // all  the person are same  properties
// let person3 = new person();
// console.log(person1);
// class person {
//     name: string = "";
//     education: string = "BSCS";
//     age: number = "";
//     located: string = "Karachi";
//     program: string = "PIAIC Web 3 & Metaverse";
//     constructor(name: string, age: number) {
//         console.log(name, age);
//     }
// }
// let person1 = new person("jasim", 22);
// console.log(person1);
// class house {                          
//     numberOfRooms: number = 0;
//     numberOfBathrooms: number = 0;
//     constructor(numberOfRooms: number, numberOfBathrooms: number) {
//         console.log(numberOfRooms, numberOfBathrooms);
//     }
// }
// let house1 = new house(2,2);
// let house2 = new house(4,2);
// console.log(house1);
// console.log(house2);
// class house {                          
//     numberOfRooms: number = 0;
//     numberOfBathrooms: number = 0;
//     constructor(numberOfRooms: number, numberOfBathrooms: number) {
//         this.numberOfRooms = numberOfRooms;
//         this.numberOfBathrooms = numberOfBathrooms;
//     }
// }
// let house1 = new house(2,2);
// let house2 = new house(4,2);
// console.log(house1);
// console.log(house2);
// class person {
//     name: string;
//     education: string;
//     age: number;                     
//     readonly program: string = "PIAIC Web 3 & Metaverse";    // readonly property cannot change/update this property
//     constructor(name: string, age: number, education: string, program: string) {
//         this.name = name
//         this.age = age
//         this.education = education
//     }
// }
// let person1 = new person("jasim", 22, "intermediate", "Metaverse");
// let person2 = new person("Fahad", 33, "M.phil", "web 3");
// console.log(person1);
// console.log(person2);
// person1.education = "batchlor";     // update the education information
// console.log(person1);
// class house {                          
//     numberOfRooms: number = 0;
//     numberOfBathrooms: number = 0;
//     constructor(numberOfRooms: number, numberOfBathrooms: number) {
//         console.log(numberOfRooms, numberOfBathrooms);
//     }
//     doorbell() {
//         console.log("doorbell called");
//     }
// }
// let house1 = new house(2,2);
// let house2 = new house(4,2);
// inheritance
class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class teacher extends person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
}
// class student extends person{
//     rollNo: number
//     constructor (rollNo: number) {
//         super();
//         this.rollNo = rollNo;
//     }
// }
let teacher1 = new teacher("atique", 29, 60000);
console.log(teacher1);
