const template = require('./src/Template.js');
const inquirer = require('inquirer');

const { generatePage, generateCard } = template;
const employeeArr = [];
let role = 'manager';

console.log(generateCard("Marco Evangelista", "Id: 1001", "evangelistabjj@yahoo.com.br", "Manager", "Office Number:113322"), generatePage);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'name',
        message: `Please enter ${role}'s name`,
        validate: nameInput => nameInput ? true : false
    },
    {
        type: 'input',
        name: 'id',
        message: `Please enter ${role}'s Emloyee ID`,
        validate: nameInput => nameInput ? true : false
    },
    {
        type: 'input',
        name: 'email',
        message: `Please enter ${role}'s email address`,
        validate: nameInput => nameInput ? true : false
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `Please enter ${role}'s Office Number`,
        validate: nameInput => nameInput ? true : false
    },
    {
        type: 'rawlist',
        name: 'menu',
        message: 'Would you like to add another Employee or finish building your team?',
        choices: ['add Engineer', 'add Intern', 'Finish']
    }
];

// inquirer prompt
const promptEmployee = (role) => {
    

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `Please enter ${role}'s name`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'input',
            name: 'id',
            message: `Please enter ${role}'s Emloyee ID`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'input',
            name: 'email',
            message: `Please enter ${role}'s email address`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `Please enter ${role}'s Office Number`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'rawlist',
            name: 'menu',
            message: 'Would you like to add another Employee or finish building your team?',
            choices: ['add Engineer', 'add Intern', 'Finish']
        }
    ]



    );
};


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

    
    promptEmployee('Team Manager')
        .then(managerData => {

            employeeArr.push(managerData);

            switch (managerData.menu) {
                case 'add Intern':
                    newPrompt('Intern');
                    break;
                case 'add Engineer':
                    newPrompt('Engineer');
                    break;
                case 'Finish':
                    generateSite(employeeArr);


            }


        }

        )

}

function newPrompt(role){

    promptEmployee(role)
    .then(managerData => {

        employeeArr.push(managerData);
        console.log(managerData.menu);

    switch (managerData.menu) {
        case 'add Intern':
            newPrompt('Intern');
            break;
        case 'add Engineer':
            newPrompt('Engineer');
            break;
        case 'Finish':
            generateSite(employeeArr);


    }
})


}

const promptEngineer = () => {

    var github =  {
        type: 'input',
        name: 'github',
        message: "Please enter Engineer's github page",
        validate: nameInput => nameInput ? true : false
    }

    questions.splice(3, 1, github);
    inquirer.prompt(questions)

}

const promptIntern = () => {

    
}

const generateSite = arr => {

    console.log(arr.join());
}


// function call to initialize program
init();
