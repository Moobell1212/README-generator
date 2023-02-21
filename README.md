# README generator

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
This is a README generator which uses Node.js to generate a README file based on user inputs.

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
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