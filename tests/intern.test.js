const Intern = require("../lib/Intern")


test("get employee name", () => {
   var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
   expect(jenny.name).toBe("jenny")
})

test("get employee id", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.id).toBe(27)
 })

 test("get employee email", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.email).toBe("jenny@gmail.com")
 })

 test("get employee school", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.school).toBe("UW")
 })

 test("get employee name", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.getName()).toBe("jenny")
 })

 test("get employee role", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.getRole()).toBe("Intern")
 })

 test("get employee id", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.getId()).toBe(27)
 })

 test("get employee email", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.getEmail()).toBe("jenny@gmail.com")
 })

 test("get employee school", () => {
    var jenny = new Intern("jenny", 27, "jenny@gmail.com", "UW");
    expect(jenny.getSchool()).toBe("UW")
 })