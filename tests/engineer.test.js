const Engineer = require("../lib/Engineer")

test("get engineer name", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.name).toBe("anise")
})

test("get engineer id", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.id).toBe(26)
 })

 test("get engineer email", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.email).toBe("anise@gmail.com")
 })

 test("get engineer github", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.github).toBe("aniseGH")
 }) 

 test("get engineer name", () => {
   var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.getName()).toBe("anise")
 })

 test("get engineer id", () => {
   var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
   expect(anise.getId()).toBe(26)
 })

 test("get engineer email", () => {
   var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
   expect(anise.getEmail()).toBe("anise@gmail.com")
 })

 test("get engineer github", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.getGithub()).toBe("aniseGH")
 })

 test("get engineer role", () => {
    var anise = new Engineer("anise", 26, "anise@gmail.com", "aniseGH");
    expect(anise.getRole()).toBe("Engineer")
 })