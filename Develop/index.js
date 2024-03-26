// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    // Add Questions 
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
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
