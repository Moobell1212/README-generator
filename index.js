const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions.js")

function askQuestions() {
    // console.log(questions.userQuestions);
    inquirer.prompt(questions)
        // .then((answers) => console.log(answers))
        .then((answers) => writeToFile(answers))
}

// function to write README file
var writeToFile = (answers) => {
    fs.writeFileSync(path.join(__dirname, '/ExampleREADME/README.md'), generateMarkdown(answers))
}

// function call to initialize program
askQuestions();