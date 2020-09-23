const Intern = require('../lib/Intern.js')

test('creates an Intern object', () => {
    const intern = new Intern("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","UC Berkeley");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});


test("gets Intern's school name", () => {
    const intern = new Intern("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","UC Berkeley");

    expect(intern.getSchool()).toEqual(expect.stringContaining("UC Berkeley"));
   
  
});

test("gets Engineer's role", () => {
    const intern = new Intern("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","UC Berkeley");

    expect(intern.getRole()).toEqual(expect.stringContaining("Intern"));
    expect(intern.getRole()).toEqual(expect.stringContaining("f19d"));
   
  
});