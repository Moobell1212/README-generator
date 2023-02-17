const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = require("./utils/questions.js")

// function to write README file
var writeToFile = (fileName, data) => {
}

function askQuestions() {
    console.log(questions.userQuestions);
    // inquirer.prompt(questions)
}

// function to initialize program
function init() {
    askQuestions()

}

// function call to initialize program
init();
