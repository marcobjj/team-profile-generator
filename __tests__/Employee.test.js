// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee("Marco", "E279", "Marcobjj@gmail.com");

    expect(employee.name).toBe("Marco");
    expect(employee.id).toBe("E279");
    expect(employee.email).toBe("Marcobjj@gmail.com");

});

test("gets employee's role in the company", () => {
    const employee = new Employee("Marco", "E279", "Marcobjj@gmail.com");

    expect(employee.getRole()).toEqual(expect.stringContaining("Employee"));
  
});

test("gets employee's email address", () => {
    const employee = new Employee("Marco", "E279", "Marcobjj@gmail.com");

    expect(employee.getEmail()).toBe("Marcobjj@gmail.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Marco", "E279", "Marcobjj@gmail.com");

    expect(employee.getName()).toBe("Marco");
});

test("gets employee's Id String", () => {
    const employee = new Employee("Marco", "E279", "Marcobjj@gmail.com");

    expect(employee.getId()).toBe("E279");
});