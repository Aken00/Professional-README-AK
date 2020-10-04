const fs = require('fs');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user

const questions = [
      
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step-by-step description to get development running."
    },
    {
        type: "input",
        name: "Usage",
        message: "Provide instructions for use."
    },
    {
        type: "input",
        name: "contributors",
        message: "Please provide the contributing parties"
    },
    {
        type: "input",
        message: "Provide examples on how to run tests.",
        name: "tests"
    },
    {
        type: "input",
        name: "licenseName",
        message: "provide License name",
        choices: ['MIT', 'ISC', 'Apache License 2.0', 'Mozilla Public License 2.0']
    },
    {
        type: "input",
        name: "badge",
        message: "Please provide the badges links that you want"
    },
    {
        type: "input",
        message: "questions",
        name: "Frequently asked question the user might have here. "
    },
    {
        type: "input",
        name: "username",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    },
];



// // function to write README file
function writeToFile(fileName, answers) {
    fileName = fs.writeFile("newtxt.md", generateMarkdown((answers)),function(error) {
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
    .then(function(data){
        console.log(data);
    writeToFile("newtxt.md", data)
    
        console.log("Congratulations! Your new README file has been created. Look for the file labled newtxt.md.");
    });
};


// function call to initialize program
init();



    // questions();
    // inquirer.prompt(questions)
    // // once the user answers questions, the answers are witen to newREADME.md
    // .then(
    //     answers => {writeToFile('newtxt.md', generateMarkdown({answers}))
    //     }) 


