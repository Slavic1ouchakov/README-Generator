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
},
{
    type: "input",
    message: "Describe your project",
    name: "description",
},
{
    type: "input",
    message: "Installation",
    name: "installation",
},
{
    type: "input",
    message: "Usage",
    name: "usage",
},
{
    type: "list",
    message: "Choose the License",
    name: "license",
    choices: ["MIT license","Apache License 2.0","GNU General pablic license v3.0"] 
},
{
    type: "input",
    message: "Contributing",
    name: "Contributing",
},
{
    type: "input",
    message: "tests",
    name: "tests",
},
{
    type: "input",
    message: "Enter your GitHub user?",
    name: "GitHubuser",
},
{
    type: "input",
    message: "Enter your email address",
    name: "email",
},
{
    type: "input",
    message: "Enter your project's GitHub repository",
    name: "repository",
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, "", function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      }); 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
