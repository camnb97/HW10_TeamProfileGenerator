const Employee = require("../lib/Employee")


test("get employee name", () => {
   var carl = new Employee("carl", 25, "carl@gmail.com");
   expect(carl.name).toBe("carl")
})

test("get employee id", () => {
    var carl = new Employee("carl", 25, "carl@gmail.com");
    expect(carl.id).toBe(25)
 })

 test("get employee email", () => {
    var carl = new Employee("carl", 25, "carl@gmail.com");
    expect(carl.email).toBe("carl@gmail.com")
 })

 test("get employee name", () => {
   var carl = new Employee("carl", 25, "carl@gmail.com");
    expect(carl.getName()).toBe("carl")
 })

 test("get employee id", () => {
   var carl = new Employee("carl", 25, "carl@gmail.com");
   expect(carl.getId()).toBe(25)
 })

 test("get employee email", () => {
   var carl = new Employee("carl", 25, "carl@gmail.com");
   expect(carl.getEmail()).toBe("carl@gmail.com")
 })

 test("get employee role", () => {
   var carl = new Employee("carl", 25, "carl@gmail.com");
   expect(carl.getRole()).toBe("Employee")
 })