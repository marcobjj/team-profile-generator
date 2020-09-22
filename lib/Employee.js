class Employee {

    constructor(name, id, email, role = "Employee") {

        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;



    }

    getRole() { return this.role }
    getEmail() { return this.email }
    getName() { return this.name }
    getId() { return this.id }

}

module.exports = Employee;