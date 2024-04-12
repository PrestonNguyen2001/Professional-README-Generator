// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Assuming license is the name of the license (e.g., MIT, Apache 2.0)
    return `[![License ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](${renderLicenseLink(license)})`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // MIT License
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`;
    // GNU General Public License (GPL)
  } else if (license === "GNU General Public License (GPL)") {
    return `https://www.gnu.org/licenses/gpl-3.0`;
    // Apache 2.0 License
  } else if (license === "Apache 2.0 License") {
    return `https://opensource.org/licenses/Apache-2.0`;
    // BSD 3-Clause License
  } else if (license === "BSD 3-Clause") {
    return `https://opensource.org/licenses/BSD-3-Clause`;
    // GNU Lesser General Public License (LGPL)
  } else if (license === "GNU Lesser General Public License (LGPL)") {
    return `https://www.gnu.org/licenses/lgpl-3.0`;
    // Boost Software License 1.0
  } else if (license === "Boost Software License 1.0") {
    return `https://www.boost.org/LICENSE_1_0.txt`;
    // IBM Public License Version 1.0
  } else if (license === "IBM Public License Version 1.0") {
    return `https://opensource.org/licenses/IPL-1.0`;
    // None
  } else {
    return `http://unlicense.org/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License. See the [LICENSE](LICENSE) file for details.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // Create links for GitHub username and email
  const githubLink = `https://github.com/${data.username}`;
  const emailLink = `mailto:${data.email}`;
 

  return `
  # ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${licenseSection}
  

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For questions about the project, please feel free to contact me through my GitHub account:[GitHub account](${githubLink}) or Email Address: [${data.username}](${emailLink}).
  `;
}

module.exports = generateMarkdown;
