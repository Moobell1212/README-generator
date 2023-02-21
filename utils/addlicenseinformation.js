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
    if (license === 'MIT') {
        return `![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    else {
        return ""
    }
}

module.exports = {
    noLicense,
    generateBadge
}
