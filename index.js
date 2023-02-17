const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ["What is the title of your project?",
"What is your GitHub username?",
"What email address would you like to use for this README?",
"What is the short description of this project?",
"What are the steps required to install your project?",
"How would a user use this project?",
"What license is this project under?",
"How would a user contribute to this project?",
"What tests are there for this project?",
"What license is this project under?"
];

// function to write README file
var writeToFile = (fileName, data) => {
}

function askQuestions () {
   console.log("Hello!") 
}

// function to initialize program
function init() {
    askQuestions()

}

// function call to initialize program
init();
