const Employee = require("../lib/Employee.js");

class Intern extends Employee {
        constructor(name,id,email,school) {

            super(name,id,email,"Intern","f19d");

            this.school = school;


        }


    getSchool(){ return `School: ${this.school}`}


}

module.exports = Intern;