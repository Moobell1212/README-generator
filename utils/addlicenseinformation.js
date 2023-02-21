// function to put license information and subsection into the README file
function noLicense(license) {
    if (license === "None") {
        return `## License
  This project is unlicensed.`
    }
    else {
        return `## License
  This project is licensed under the ${license} license. For more information visit`
    }
}

// function to generate the licence link in the license section of the README file
function licenseLink(license){
    if (license === 'Apache License 2.0') {
        return `[opensource.org](https://opensource.org/licenses/Apache-2.0)`
    }
    if (license === 'BSD 3-Clause') {
        return `[opensource.org](https://opensource.org/licenses/BSD-3-Clause)`
    }
    if (license === 'Eclipse Public License 1.0') {
        return `![opensource.org](https://opensource.org/licenses/EPL-1.0)`
    }
    if (license === 'ISC') {
        return `[opensource.org](https://opensource.org/licenses/ISC)`
    }
    if (license === 'MIT') {
        return `[opensource.org](https://opensource.org/licenses/MIT)`
    }
    if (license === 'Mozilla Public License 2.0') {
        return `[opensource.org](https://opensource.org/licenses/MPL-2.0)`
    }
    else {
        return ""
    }
}

// function to generate the license badge under the title on the README file
function generateBadge(license) {
    if (license === 'Apache License 2.0') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
    if (license === 'BSD 3-Clause') {
        return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
    }
    if (license === 'Eclipse Public License 1.0') {
        return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
    }
    if (license === 'ISC') {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
    }
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    if (license === 'Mozilla Public License 2.0') {
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    }
    else {
        return ""
    }
}

// exporting all the above functions
module.exports = {
    noLicense,
    generateBadge,
    licenseLink
}
