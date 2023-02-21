function noLicense(license) {
    if (license === "None") {
        return `## License
  This project is unlicensed.`
    }
    else {
        return `## License
  This project is licensed under ${license}. For more information visit [opensource.org](https://opensource.org/)`
    }
}

function generateBadge(license) {
    if (license === 'Apache') {
        return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
    }
    if (license === 'Boost') {
        return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
    }
    if (license === 'Eclipse') {
        return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
    }
    if (license === 'IBM') {
        return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
    }
    if (license === 'ISC') {
        return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
    }
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    if (license === 'Mozilla') {
        return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
    }
    if (license === 'Perl') {
        return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`
    }
    else {
        return ""
    }
}

module.exports = {
    noLicense,
    generateBadge
}
