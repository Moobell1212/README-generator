const userQuestions = [
        {
            type: 'input',
            name: 'Project Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'GitHub username',
            message:'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'Email address',
            message:'What email address would you like to use for this README?'
        },
        {
            type: 'input',
            name: 'Short description',
            message:'What is the short description of this project?'
        },
        {
            type: 'input',
            name: 'Installation',
            message:'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'Usage',
            message:'How would a user use this project?'
        },
        {
            type: 'list',
            name: 'License',
            message:'What license is this project under?',
            choices: ['Apache', 'Boost', 'BSD 3-Clause', 'BSD 2-Clause', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl']
        },
        {
            type: 'input',
            name: 'Contributing',
            message:'How would a user contribute to this project?'
        },
        {
            type: 'input',
            name: 'Tests',
            message:'What tests are there for this project?'
        },
    ];

module.exports = {
    userQuestions,
};
