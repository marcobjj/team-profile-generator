class Employee {

    constructor(name, id, email, role = 'Employee',icon='') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.icon = icon;



    }

    getRole() { return `${this.icon} ${this.role}` }
    getEmail() { return this.email }
    getName() { return this.name }
    getId() { return this.id }

}

module.exports = Employee;