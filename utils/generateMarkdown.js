// function to generate markdown for README
function generateMarkdown(answers) {
  // console.log("this is the generateMarkdown function")
  return `# {answers.title}
  
  /n
  /n #Description
  /n
  /n #Table of contents
  /n
  /n #Installation
  /n
  /n #Usage
  /n
  /n #License
  /n
  /n #Contributing
  /n
  /n #Tests
  /n
  /n #Questions
  `
}

// ${data.title}
module.exports = generateMarkdown;
