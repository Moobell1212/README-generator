const questions = () =>
    inquirer.prompt([
        {
            type: "What is the title of your project?"
        },
        {
            type: "What is your GitHub username?"
        },
        {
            type: "What email address would you like to use for this README?"
        },
        {
            type: "What is the short description of this project?"
        },
        {
            type: "What are the steps required to install your project?"
        },
        {
            type: "How would a user use this project?"
        },
        {
            type: "What license is this project under?"
        },
        {
            type: "How would a user contribute to this project?"
        },
        {
            type: "What tests are there for this project?"
        },
        {
            type: "What license is this project under?"
        }
    ]);

module.exports = {
    questions,
};
