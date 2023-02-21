// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("this is the generateMarkdown function")
  return `# ${answers.title}
  
## Description
${answers.description}

## Table of contents

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Contact the developer at:
Email: ${answers.email}

GitHub: [${answers.github}](https://github.com/${answers.github})
  `
}

// ${data.title}
module.exports = generateMarkdown;
