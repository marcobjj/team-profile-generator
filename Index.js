const template = require('./src/Template.js');
const inquirer = require('inquirer');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const { generatePage, generateCard } = template;
const employeeArr = [];


//console.log(generateCard("Marco Evangelista", "Id: 1001", "evangelistabjj@yahoo.com.br", "Manager", "Office Number:113322"), generatePage);

// inquirer prompt
const promptEmployee = (role) => {
    
    const questions =
    [
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
            type: 'input',
            name: 'github',
            message: `Please enter ${role}'s github page`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter ${role}'s School name`,
            validate: nameInput => nameInput ? true : false
        },
        {
            type: 'rawlist',
            name: 'menu',
            message: 'Would you like to add another Employee or finish building your team?',
            choices: ['add Engineer', 'add Intern', 'Finish']
        }
    ]

    if(role == "Intern") questions.splice(3,2)
    else if (role == "Engineer") {questions.splice(3,1); questions.splice(4,1);}
    else questions.splice(4,2);

    return inquirer.prompt(questions);
};


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {

    
   newPrompt('Team Manager')

}

function newPrompt(role){

    promptEmployee(role)
    .then(managerData => {
        const emp  = build(managerData,role);
        if(emp) employeeArr.push(emp);
        //console.log(managerData.menu);

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

const build = (data,role) => {

    //console.log(data.name,role,employeeArr.join());

    if(role.search("Engineer") >= 0) return new Engineer(data.name,data.id,data.email,data.github);
    else if (role.search("Intern") >= 0) return new Intern(data.name,data.id,data.email,data.school);
    else if (role.search("Manager") >= 0) return new Manager(data.name,data.id,data.email,data.officeNumber);
}


const generateSite = arr => {
    const cardArr = [];
    arr.forEach(element => {
       
        const card = generateCard(element.getName(),element.getId(),element.getEmail(),element.getRole(),element.getVariable());
        cardArr.push(card);
    });

    console.log(generatePage(cardArr));
}


// function call to initialize program
init();
