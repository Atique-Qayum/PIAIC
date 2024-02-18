"use strict";
// Loops
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
for (let i = 0; i < 11; i++) {
    console.log("hello World");
}
for (let i = 0; i < 10; i++) {
    console.log(1 + i);
}
const std = ["Atique", "Jasim", "Fahad"];
for (let i = 0; i < 3; i++) {
    console.log(std[2]);
}
for (let i = 0; i < 3; i++) {
    console.log(std[i] + " is 👋");
}
for (let i = 0; i < 11; i++) {
    let ans = i * 2;
    console.log("2", "x", i, "x", ans);
}
let abc = ["a", "b", "c", "d", "e", "f", "g"];
for (let i = 0; i < 7; i++) {
    console.log(abc[i]);
}
var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];
for (var i = 0; i <= 4; i++) {
    if ("Islamabad" === cleanestCities[i]) {
        console.log("It's one of the cleanest cities");
        break;
    }
}
for (let i = 0; i < 3; i++) {
    console.log(["parent loop " + i]);
    for (let j = 0; j < 4; j++) {
        console.log("child loop " + j);
    }
}
// what is object??
let video1 = {
    title: "video title",
    description: "description",
    image: "https://image.com"
};
console.log(video1);
console.log(video1.title);
//objects in arrays 
const videos = [
    {
        title: "video1 title",
        description: "description1",
        image: "https://image.com"
    },
    {
        title: "video2 title",
        description: "description2",
        image: "https://image.com"
    },
    {
        title: "video3 title",
        description: "description3",
        image: "https://image.com"
    },
    {
        title: "video4 title",
        description: "description4",
        image: "https://image.com"
    },
];
console.log(videos[2].description);
for (let k = 0; k < videos.length; k++) {
    console.log(videos[k].description);
}
