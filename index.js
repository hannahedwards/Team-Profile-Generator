const inquirer = require('inquirer');
const EngineerHtml = require('./lib/Engineer');
const InternHtml = require('./lib/Intern');
const ManagerHtml = require('./lib/Manager');
const fs = require('fs');

const ManagerQuestions = [ //start of the function. gathering user input for employees. manager q's
    {
        type: 'input',
        name: 'Manager',
        message: 'Please enter the managers name.',
    },
    {
        type: 'number',
        name: 'ManagerId',
        message: 'Entermanagers employee ID',
    },
    {
        type: 'input',
        name: 'ManagerEmail',
        message: 'Enter managers email address.',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter the managers office number.',
    },
    {
        type: 'list',
        name: 'member',
        message: 'What team member would you like to add next?',
        choices: ['Intern', 'Engineer', 'Save']
    },
]
function init() { //function prompted by the last input answer. will either pull up questions for intern or engineer
    inquirer.prompt(ManagerQuestions).then((questionAnswers) => {
        let userChoice = questionAnswers.member;
        function SwitchQuestions() {
            if (userChoice === 'Intern') {
                console.log("Intern")
                InternQuestions();
                return;

            } else if (userChoice === 'Engineer') {
                console.log("Engineer")
                EngineerQuestions();
                return;
            }
        }
        SwitchQuestions();
        const ManagerInput = ManagerHtml(questionAnswers);
        fs.writeFile('./dist/index.html', (ManagerInput), (err) =>  //adding to html file
            console.log('Success') //letting you know it worked
        );
    });
};

function InternQuestions() { //intern q's
    const Intern = [{
        type: 'input',
        name: 'InternName',
        message: 'Enter the interns name.',
    },
    {
        type: 'number',
        name: 'InternId',
        message: 'Whats the interns employee ID?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school is the intern attending?',
    },
    {
        type: 'input',
        name: 'InternEmail',
        message: 'Whats the interns email?',
    },
    {
        type: 'list',
        name: 'member',
        message: 'What team member would you like to add next?',
        choices: ['Intern', 'Engineer', 'Save']
    },
    ]
    inquirer.prompt(Intern).then((questionAnswers) => {
        let userChoice = questionAnswers.member;
        function SwitchQuestions() {
            if (userChoice === 'Intern') {
                console.log("Intern")
                InternQuestions();
                return;

            } else if (userChoice === 'Engineer') {
                console.log("Engineer")
                EngineerQuestions();
                return;
            }
        }
        SwitchQuestions();
        const InternInput = InternHtml(questionAnswers);
        fs.appendFile('./dist/index.html', (InternInput), (err) =>  //adding to html
            console.log('Success') //letting you know it worked
        );
    });
};


function EngineerQuestions() { // engineer q's
    const Engineer = [{
        type: 'input',
        name: 'EngineerName',
        message: 'Enter engineers name',
    },
    {
        type: 'number',
        name: 'EngineerId',
        message: 'Whats engineers enemployee ID',
    },
    {
        type: 'input',
        name: 'EngineerEmail',
        message: 'Enter engineers email address',
    },
    {
        type: 'input',
        name: 'githubUrl',
        message: 'Enter the engineers github URL.',
    },
    {
        type: 'list',
        name: 'member',
        message: 'What team member would you like to add next?',
        choices: ['Intern', 'Engineer', 'Save']
    },
    ]
    inquirer.prompt(Engineer).then((questionAnswers) => {
        let userChoice = questionAnswers.member;
        function SwitchQuestions() {
            if (userChoice === 'Intern') {
                console.log("Intern")
                InternQuestions();
                return;

            } else if (userChoice === 'Engineer') {
                console.log("Engineer")
                EngineerQuestions();
                return;
            }

        }
        SwitchQuestions();
        const EngineerInput = EngineerHtml(questionAnswers);
        fs.appendFile('./dist/index.html', (EngineerInput), (err) => //addeding to html file
            console.log('Success')//letting you know it worked
        );
    });
};

init(); // calls the funtion