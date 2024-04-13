#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todo = [];
let condition = true;


while (condition) {
    const todoList = await inquirer.prompt(
        [{
                name: "todo",
                type: "input",
                message: chalk.cyan.italic("What do you want to add?")
            },
            {
                name: "addMore",
                type: "confirm",
                message: chalk.yellowBright("Do you want to add more?"),
                default: "Yes"
            }
        ]
    );


    todo.push(todoList.todo);
    condition = todoList.addMore
    console.log(todo)

}