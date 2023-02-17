const fs = require("fs");
const util = require('util');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = require("./utils/questions.js")

function askQuestions() {
    // console.log(questions.userQuestions);
    inquirer.prompt(questions.userQuestions)
    .then((response) => writeToFile())
    .then((response) => {console.log(response)})
}

// function to write README file
var writeToFile = (fileName, answers) => {
    generateMarkdown()
}

// function to initialize program
function init() {
    askQuestions()
    // .then(answers) => fs.writeToFile
}

// function call to initialize program
init();
