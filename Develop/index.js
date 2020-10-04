const fs = require('fs');

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

const questions = [
      
    {
        type: "input",
        message: "What is your Project Tittle?",
        name: "projectTittle"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
    //     when: ({ confirmDes }) => {
    //         if (confirmDes) {
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       }
        },
      {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description to get development running.",
        name: "installationProcess"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "instruction"
    },
    {
        type: "input",
        message: "Provide instructions examples for use.",
        name: "instructionExample"
    },
    {
        type: "input",
        message: "provide License name ",
        name: "licenseName"
    },
    {
        type: "input",
        message: "provide License url ",
        name: "licenseUrl"
    },
    {
        type: "input",
        message: "Please enter git hub user names of the contributor if any (If there are mulitple contributor, seperate names with comma and no space. )",
        name: "contributorsGitUserName"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    },
    {
        type: "input",
        message: "Provide FAQs ?",
        name: "Frequently asked question the user might have here. "
    }
];


fs.writeToFile("newtxt.md", fileName, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log('Done!');
    }
});

// function to write README file
function writeToFile(fileName, data) {

    return false.writeFileSync(path.join(process.cwd(), filename), data);
}

// function to initialize program
function init() {
    // questions();
    inquirer.prompt(questions)
    // once the user answers questions, the answers are witen to newREADME.md
    .then(
        answers => {writeToFile('newtxt.md', generateMarkdown({answers}))
        }) 
}

// function call to initialize program
init();
