class Employee {

    constructor(name, id, email, role = 'Employee',icon='') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.icon = icon;



    }

    getRole() { return `&#x${this.icon}; ${this.role}` }
    getEmail() { return `mailto:${this.email}` }
    getName() { return this.name }
    getId() { return this.id }

}

module.exports = Employee;