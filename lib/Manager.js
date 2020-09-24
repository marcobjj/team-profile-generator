const Employee = require("./Employee.js");

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {

        super(name,id,email,'Manager','f0f4');

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {

        return `Office Number: ${this.officeNumber}`;
    }
    getVariable() {
        return this.getOfficeNumber();
    }

}

module.exports = Manager;