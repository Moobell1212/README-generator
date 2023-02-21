const fs = require("fs");
const util = require('util');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = require("./utils/questions.js")

function askQuestions() {
    // console.log(questions.userQuestions);
    inquirer.prompt(questions.userQuestions)
    // .then((answers) => console.log(answers))
    .then((answers) => writeToFile(answers))
}

// function to write README file
var writeToFile = (answers) => {
    fs.writeFile('README.md', generateMarkdown(answers))
}


// function to initialize program
function init() {
    askQuestions()
    // .then(answers) => fs.writeToFile
}

// function call to initialize program
init();
