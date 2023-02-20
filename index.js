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
    .then((response) => console.log(response))
    .then((response) => writeToFile(response))
}

// function to write README file
var writeToFile = (answers) => writeFile('README.md', generateMarkdown(answers))


// function to initialize program
function init() {
    askQuestions()
    // .then(answers) => fs.writeToFile
}

// function call to initialize program
init();
