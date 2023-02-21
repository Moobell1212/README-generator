function noLicense(license) {
    if (license === "None") {
        return `## License
  This project is unlicensed.`
    }
    else {
        return `## License
  This project is licensed under ${license}. For more information visit`
    }
}

function licenseLink(license){
    if (license === 'Apache 2.0 License') {
        return `[opensource.org](https://opensource.org/licenses/Apache-2.0)`
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

function generateBadge(license) {
    if (license === 'Apache 2.0 License') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
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

module.exports = {
    noLicense,
    generateBadge,
    licenseLink
}
