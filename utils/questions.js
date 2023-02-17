const userQuestions = [
        {
            type: 'input',
            name: 'Project Title',
            Message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'GitHub username',
            Message:'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'Email address',
            Message:'What email address would you like to use for this README?'
        },
        {
            type: 'input',
            name: 'Short description',
            Message:'What is the short description of this project?'
        },
        {
            type: 'input',
            name: 'Installation',
            Message:'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'Usage',
            Message:'How would a user use this project?'
        },
        {
            type: 'list',
            name: 'License',
            Message:'What license is this project under?'
        },
        {
            type: 'input',
            name: 'Contributing',
            Message:'How would a user contribute to this project?'
        },
        {
            type: 'input',
            name: 'Tests',
            Message:'What tests are there for this project?'
        },
    ];

module.exports = {
    userQuestions,
};
