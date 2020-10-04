// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.projectTitle}

  ## Description
  ${data.description}

  ## Instructions
  ${data.instruction}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [${data.creditsTitle}](#${data.creditsTitle})
  - [License]{#license}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.test}

  ## License
  Copyright (c) ${data.license}

  ## Questions
  ${data.questions}

  ## Repository
  - [Project Repo](${data.repo})

  ## GitHub
  - 

`;
}

module.exports = generateMarkdown;
