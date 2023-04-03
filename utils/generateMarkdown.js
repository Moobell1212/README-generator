const getLicense = require("./addLicenseInformation");

// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("this is the generateMarkdown function")
  return `# ${answers.title}

[${getLicense.generateBadge(answers.license)}](#License)

</br>

<div align="center" id="top">

[![Contributors](https://img.shields.io/github/contributors/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/graphs/contributors)
[![Forks](https://img.shields.io/github/forks/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/forks)
[![Stargazers](https://img.shields.io/github/stars/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/stargazers)
[![Issues](https://img.shields.io/github/issues/${answers.github}/${answers.title}?style=for-the-badge)](https://github.com/${answers.github}/${answers.title}/issues)

</div>

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

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation
${answers.installation}

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing
${answers.contributing}

${getLicense.noLicense(answers.license)}
${getLicense.licenseLink(answers.license)}

<p align="right">(<a href="#top">back to top</a>)</p>

## Tests
${answers.tests}

<p align="right">(<a href="#top">back to top</a>)</p>

## Questions
Contact the developer with any questions at:

Email: ${answers.email}

GitHub: [${answers.github}](https://github.com/${answers.github})
`
}

module.exports = generateMarkdown;