// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.projectTitle}

  [![License](https://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors || ''}

  ## Tests
  ${data.test}

  ## License
  Copyright (c) ${data.name} All rights reserved. 
  Licensed under ${data.license}

  ## Questions
  * Github Username: ${data.username}
  * [Project Repo](https://www.github.com/${data.profile})
  * You can reach me at (${data.email})

`;
}

module.exports = generateMarkdown;
