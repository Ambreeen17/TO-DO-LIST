#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.bgBlue.bold("\n  To Do List   \n"));
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([{
            type: "Input",
            name: "TODO",
            message: chalk.yellow("What do you want add in your todo?"),
            transformer: (input) => {
                return chalk.italic.blue.bold(input.toString());
            },
        },
        {
            type: "confirm",
            name: "addmore",
            message: chalk.yellow("Do you wan to add more todo?"),
            default: false,
        }
    ]);
    const { TODO, addmore } = answers;
    //console.log(answers)
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log(chalk.black.bgBlue.bold("\n YOUR TO DO LIST: \n"));
    todos.forEach(todo => {
        console.log(chalk.blue(todo));
    });
}
else {
    console.log("No todos found");
}
