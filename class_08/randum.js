import inquirer from "inquirer";
let systemgenerator = Math.floor(Math.random() * 10 + 1);
let answer = inquirer.prompt((type, name, massage) => );
if (answer.userguess === systemgenerator) {
    console.log("You Win");
}
else {
    console.log("You lose the correct number was " + systemgenerator);
}
