const Engineer = require("../lib/Engineer.js")

test('creates a Engineer object', () => {
    const engineer = new Engineer("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","http://www.github.com/marcobjj");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets Engineer's github page", () => {
    const engineer = new Engineer("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","http://www.github.com/marcobjj");

    expect(engineer.getGithub()).toEqual(expect.stringContaining("http://www.github.com/marcobjj"));
   
  
});

test("gets Engineer's role", () => {
    const engineer = new Engineer("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","http://www.github.com/marcobjj");

    expect(engineer.getRole()).toEqual(expect.stringContaining("Engineer"));
    expect(engineer.getRole()).toEqual(expect.stringContaining("f530"));
   
  
});

test("gets Engineer's third row info", () => {
    const engineer = new Engineer("Marco Evangelista", "E265", "evangelistabjj@yahoo.com.br","marcobjj");

    expect(engineer.getVariable()).toEqual(expect.stringContaining("marcobjj"));
   
  
});