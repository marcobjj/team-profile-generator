const Manager = require("../lib/Manager.js")

test('creates a Manager object', () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org","113322");

    expect(manager.name).toBe("Jose Mourinho");
    expect(manager.id).toBe("E711");
    expect(manager.email).toBe("littlemoor@chelsea.org");
    expect(manager.officeNumber).toBe("113322");

});

test("gets Manager's role in the company", () => {
    const manager = new Manager("Jose Mourinho", "E711", "littlemoor@chelsea.org","113322");

    expect(manager.getRole()).toEqual(expect.stringContaining("Manager"));
    expect(manager.getRole()).toEqual(expect.stringContaining("f0f4;"));
  
});