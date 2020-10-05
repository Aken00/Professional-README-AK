const { profile } = require('console');
const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

const questions = [

    {
        type: "input",
        name: "name",
        message: "What is your name or company? (Required)",
        validate: inputName => {
            if (inputName) {
                return true;
            } else {
                console.log('Please enter your name or company!');
                return false;
            }
        }
    },
      
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title? (Required)",
        validate: inputTitle => {
            if (inputTitle) {
                return true;
            } else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description of the project (Required)",
        validate: inputDes => {
            if (inputDes) {
                return true;
            } else {
                console.log('Please enter project description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "How is your project installed. (Required)",
        validate: inputInstall => {
            if (inputInstall) {
                return true;
            } else {
                console.log('Please enter the steps to install your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions for use. (Required)",
        validate: inputUsage => {
            if (inputUsage) {
                return true;
            } else {
                console.log('Please please provide instrictions for how to use your project!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide contributing parties"
    },
    {
        type: "input",
        name: "test",
        message: "Provide examples on how to run tests."
    },
    {
        type: "list",
        name: "license",
        message: "Provide License for your project. (Hit 'enter' for your selection)",
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'Mozilla Public License 2.0','The Unlicense','Boost Software License 1.0'],
        validate: inputLicense => {
            if (inputLicense) {
                return true;
            } else {
                console.log('Please select a License!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name? (Required)",
        validate: inputGithubName => {
            if (inputGithubName) {
                return true;
            } else {
                console.log('Please provide your GitHub username!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "profile",
        message: "What is your github profile link?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email link?"
    },
];


// // function to write README file
function writeToFile(fileName, answers) {
    fileName = fs.writeFile("newRM.md", generateMarkdown((answers)),function(error) {
        if (error) {
            console.log(error);
        throw error;
        };
    });
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
            console.log(data);
            writeToFile("newRM.md", data);

            console.log("Congratulations! Your new README file has been created. Look for the file labled newRM.md.");
        });
};

// function call to initialize program
init();


