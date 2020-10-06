// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // test and htmlRender calls this functions and the value for role is based on the object type, return string of this constructor
    getRole() {
        return "Manager";
    }
    // test and htmlRender calls this functions and expect officeNumber value
    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;