const Employee = require("../lib/Employee.js");

class Engineer extends Employee {

    constructor(name,id,email,github){

        super(name,id,email,"Engineer","f530");

        this.github = github;

    }

   getGithub() { return `<a href='${this.github}'>${this.github}</a>` }

   getVariable() { return this.getGithub()}
}




module.exports = Engineer;