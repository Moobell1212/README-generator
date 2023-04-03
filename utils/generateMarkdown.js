const getLicense = require("./addLicenseInformation");

// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("this is the generateMarkdown function")
  return `# ${answers.title}

[${getLicense.generateBadge(answers.license)}](#License)

[![Contributors](https://img.shields.io/github/contributors/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/forks)
[![Stargazers](https://img.shields.io/github/stars/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/stargazers)
[![Issues](https://img.shields.io/github/issues/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/issues)

## Description
${answers.description}

## Table of contents
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Usage
${answers.usage}

## Installation
${answers.installation}

## Contributing
${answers.contributing}

${getLicense.noLicense(answers.license)}
${getLicense.licenseLink(answers.license)}

## Tests
${answers.tests}

## Questions
Contact the developer with any questions at:

Email: ${answers.email}

GitHub: [${answers.github}](https://github.com/${answers.github})
`
}

module.exports = generateMarkdown;