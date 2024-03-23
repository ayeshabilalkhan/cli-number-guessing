#! /usr/bin/env node
import inquirer from "inquirer";
// Target
// 1: Computer wiil grnrrate a random number
// 2: User input for guessing number
// 3: Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number brtween 1 - 5: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
