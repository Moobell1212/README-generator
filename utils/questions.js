const userQuestions = [
        {
            type: 'input',
            Message: "What is the title of your project?"
        },
        {
            type: 'input',
            Message:"What is your GitHub username?"
        },
        {
            type: 'input',
            Message:"What email address would you like to use for this README?"
        },
        {
            type: 'input',
            Message:"What is the short description of this project?"
        },
        {
            type: 'input',
            Message:"What are the steps required to install your project?"
        },
        {
            type: 'input',
            Message:"How would a user use this project?"
        },
        {
            type: 'list',
            Message:"What license is this project under?"
        },
        {
            type: 'input',
            Message:"How would a user contribute to this project?"
        },
        {
            type: 'input',
            Message:"What tests are there for this project?"
        },
    ];

module.exports = {
    userQuestions,
};
