function noLicense(license) {
    if (license === "None") {
        return `### License
  This project is unlicensed.`
    }
    else {
        return `### License
  This project is licensed under ${license}. For more information visit [opensource.org](https://opensource.org/)`
    }
}

module.exports = {
    noLicense,
}
