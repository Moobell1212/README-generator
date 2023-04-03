// a npm to validate the user email input in the user questions
var emailCheck = require("email-validator");

const userQuestions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: answer => {
            if (answer === "") {
                return "Project title required"
            }
            else { return true }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project (as shown on GitHub)?',
        validate: answer => {
            if (answer === "") {
                return "Project title required"
            }
            else { return true }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address would you like to use for this README?',
        validate: answer => {
            if (!emailCheck.validate(answer)) {
                return "A valid email is required"
            }
            else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the short description of this project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How would a user use this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this project under?',
        choices: ['Apache License 2.0', 'BSD 3-Clause', 'Eclipse Public License 1.0', 'ISC', 'MIT', 'Mozilla Public License 2.0', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would a user contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What tests are there for this project?'
    },
];

// export the questions
module.exports = userQuestions;