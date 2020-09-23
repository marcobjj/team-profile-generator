const Manager = require("../lib/Manager.js")

test('creates a Manager object', () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test("gets Manager's role in the company", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
    expect(manager.getRole()).toEqual(expect.stringContaining("f0f4;"));
  
});

test("gets Manager's email address", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getEmail()).toEqual(expect.stringContaining("littlemoor@chelsea.org"));
   
  
});

test("gets Manager's name", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getName()).toBe("Jose Mourinho");
   
  
});

test("gets Manager's Id", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getId()).toBe("E711");
   
  
});

test("gets Manager's Id", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getId()).toBe("E711");
   
  
});

test("gets Manager's office Number", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org",113322);

    expect(manager.getOfficeNumber()).toBe(113322);
   
  
});

