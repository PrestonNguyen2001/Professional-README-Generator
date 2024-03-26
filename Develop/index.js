// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // Add Questions 
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide a description of your project:",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide installation instructions:",
        name: 'installation',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide installation instructions.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide usage information:",
        name: 'usage',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide usage information.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Choose a license for your application:",
        name: 'license',
        choices: ['MIT', 'GNU General Public License (GPL)', 'Apache License', 'BSD License', 'GNU Lesser General Public License (LGPL)', 'None'],
        default: 'None',
        validate: function (answer) {
            if (answer === 'None') {
                return true; 
            }
            if (answer.length < 1) {
                return console.log("Please choose a license.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What are the contribution guidelines?",
        name: 'contributing',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide contribution guidelines.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Provide test instructions:",
        name: 'tests',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide test instructions.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email address is required.");
            }
            return true;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Your README has been generated');
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt user with questions
    inquirer.prompt(questions)
        .then(answers => {
            // Generate markdown content based on user input
            const markdownContent = generateMarkdown(answers);
            // Write the generated markdown content to a README.md file
            writeToFile('README.md', markdownContent);
        })
        .catch(error => {
            console.log(error);
        });
}

// Function call to initialize app
init();
