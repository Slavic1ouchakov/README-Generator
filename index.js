// TODO: Include packages needed for this application
const generator = require('./utils/generateMarkdown.js');
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    message: "What is your project title?",
    name: "title",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Describe your project.",
    name: "description",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Table of Contents.",
    name: "table of contents",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Installation",
    name: "installation",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Usage of application.",
    name: "usage",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "list",
    message: "Choose the applicable License.",
    name: "license",
    choices: ["MIT license","Apache License 2.0","GNU General public license v3.0","BSD 2-Clause License"],
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Who contributed?",
    name: "contributing",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Tests.",
    name: "tests",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Enter your GitHub user.",
    name: "github",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Enter your email address",
    name: "email",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Any remaining questions",
    name: "repository",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success! README file was generated!')
  );
}
   

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(function (data) {
        writeToFile( './readme_file/README.md', generator(data)); 
      })
  }

// Function call to initialize app
init();
