const Employee = require("../lib/Employee.js");

class Engineer extends Employee {

    constructor(name,id,email,github){

        super(name,id,email,"Engineer","f530");

        this.github = github;

    }

   getGithub() { return `<a href='https://github.com/${this.github}'>https://github.com/${this.github}</a>` }

   getVariable() { return this.getGithub()}
}




module.exports = Engineer;