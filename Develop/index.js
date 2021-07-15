// TODO: Include packages needed for this application

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
    choices: ["MIT license","Apache License 2.0","GNU General public license v3.0"],
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Who contributed?",
    name: "Contributing",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Steps to test application.",
    name: "tests",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
{
    type: "input",
    message: "Enter your GitHub user.",
    name: "GitHubuser",
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
    message: "Enter your project's GitHub repository",
    name: "repository",
    validate: (value) => { if (value) { return true } else { return 'Please provide value to continue' } }
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, "", function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success! Your README was generated!");
      }); 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
