// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  } else if (license === 'The GNU GPL v3 License') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'

  } else if (license === 'Apache License') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

  } else if (license === 'BSD 2-Clause License') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else {
    return ''
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  if (license === 'The MIT License') {
  return '[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)'

} else if (license === 'The GNU GPL v3 License') {
  return '[http://www.gnu.org/licenses/gpl-3.0](http://www.gnu.org/licenses/gpl-3.0)'

} else if (license === 'Apache License') {
  return '[https://opensource.org/licenses/Apache-2.0](https://opensource.org/licenses/Apache-2.0)'

} else if (license === 'BSD 2-Clause License') {
  return '[https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause)'
} else {
  return ''
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "N/A") {
    return `Project registered under ${license}`
  } else {
    return 'No registered License'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents 
   * [installation](##installation)
   * [usage](##usage)
   * [license](##license)
   * [contributing](##contributing)
   * [tests](##tests)
   * [questions](##questions)
  
  
## installation
  The following are steps to install the application: ${data.installation}
 ## Usage 
  To use the application, ${data.usage} 
 ## License 
  ${renderLicenseSection(data.license)}
 
  ${renderLicenseLink(data.License)}
 ## Contributing
 Contributors: ${data.contributing}
 ## Tests
 Following steps have to be taken to test the application: ${data.tests}
 ## Questions
 If you have any question please call on: ${data.questions}
 https://github.com/${data.github}/${data.title}
 ${data.email}
 `;
}

module.exports = generateMarkdown;
