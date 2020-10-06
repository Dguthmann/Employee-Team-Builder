// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  // test and htmlRender calls this functions and the value for role is based on the object type, return string of this constructor
  getRole() {
    return "Intern";
  }
  // test and htmlRender calls this functions and expect school value
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;