#! /usr/bin/env node
//importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//diplaying a colourful welcome messsage
console.log(chalk.bold.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk.bold.blue(`<<<=========>>>  ${chalk.blueBright.bold("Welcome To 'Hafeez Siddiqui' - Word Counter")}  <<<=========>>>`));
console.log(chalk.bold.yellow(`\t\t <<<===============================================>>>\n`));
//prompt the user to enter
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter A Sentence:"
    }
]);
//trimming the answer and splitting the words based on spaces
let words = answer.sentence.trim().split(" ");
//Analysis of the input sentence and desplaying answer 
console.log((chalk.yellowBright(`=`.repeat(70))));
console.log(chalk.bold.greenBright("- sentence words:"));
console.log(words);
console.log(chalk.bold.blueBright(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log((chalk.yellowBright(`=`.repeat(70))));
