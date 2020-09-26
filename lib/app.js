const inquirer = require('inquirer');
const writeFile = require('../utils/write-file');

const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const template = require('../src/Template.js');
const {generatePage, generateCard} = template;





class Application {
    

constructor() {

    this.generatePage = generatePage;
    this.generateCard = generateCard;

    this.employeeArr = [];
  
}
// inquirer prompt
promptEmployee = (role) => {
    // questions for the user
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
            validate: this.validateEmail 
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
            message: `Please enter ${role}'s github username`,
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

    // modifies the questions array according to the role being prompted
    if(role == "Intern") questions.splice(3,2)
    else if (role == "Engineer") {questions.splice(3,1); questions.splice(4,1);}
    else questions.splice(4,2);

    return inquirer.prompt(questions);
};


//Initiates the app


newPrompt(role){

    this.promptEmployee(role)
    .then(employeeData => {
        const emp  = this.build(employeeData,role);
        if(emp) this.employeeArr.push(emp);
    
        // next step according to menu choices
    switch (employeeData.menu) {
        case 'add Intern':
            this.newPrompt('Intern');
            break;
        case 'add Engineer':
            this.newPrompt('Engineer');
            break;
        case 'Finish':
            this.generateSite(this.employeeArr)
          


    }
})


}

init () {

    // Prompts Team manager first
   this.newPrompt('Team Manager')

}

validateEmail = async (input) =>{

if(input.search('@') >= 1 && input.search('@') < input.length -1 ) return true
else return 'Invalid email address'
}

//transforms the generic object into a manager, intern or engineer class
build(data,role){

   
    if(role.search("Engineer") >= 0) return new Engineer(data.name,data.id,data.email,data.github);
    else if (role.search("Intern") >= 0) return new Intern(data.name,data.id,data.email,data.school);
    else if (role.search("Manager") >= 0) return new Manager(data.name,data.id,data.email,data.officeNumber);
}


generateSite = arr => {
    const cardArr = [];

    //builds bootstrap cards for every object in the employee Array
    arr.forEach(element => {
       
        const card = this.generateCard(element.getName(),element.getId(),element.getEmail(),element.getRole(),element.getVariable());
        cardArr.push(card);
    });



    //writes the html file
    writeFile(this.generatePage(cardArr))
      .then(writeFileResponse => {
        console.log(writeFileResponse.message);
      })
      .catch(err => {
        console.log(err);
      });
  
}
}

module.exports = Application;
