const Employee = require('./Employee');

class Intern extends Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
  }

  module.exports = Intern