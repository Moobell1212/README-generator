const getLicense = require("./addLicenseInformation");

// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("this is the generateMarkdown function")
  return `# ${answers.title}

[${getLicense.generateBadge(answers.license)}](#License)

## Description
${answers.description}

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