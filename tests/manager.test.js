const Manager = require("../lib/Manager")

test("get manager name", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
   expect(nadine.name).toBe("nadine")
})

test("get manager id", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
    expect(nadine.id).toBe(30)
 })

 test("get manager email", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
    expect(nadine.email).toBe("nadine@gmail.com")
 })

 test("get manager office number", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
    expect(nadine.officeNumber).toBe(222)
 })

 test("get manager name", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
    expect(nadine.getName()).toBe("nadine")
 })

 test("get manager id", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
   expect(nadine.getId()).toBe(30)
 })

 test("get manager email", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
   expect(nadine.getEmail()).toBe("nadine@gmail.com")
 })

 test("get manager office number", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
   expect(nadine.getOfficeNumber()).toBe(222)
 })

 test("get manager role", () => {
   var nadine = new Manager("nadine", 30, "nadine@gmail.com", 222);
   expect(nadine.getRole()).toBe("Manager")
 })