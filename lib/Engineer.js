// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    // test and htmlRender calls this functions and the value for role is based on the object type, return string of this constructor
    getRole() {
        return "Engineer";
    }
    // test and htmlRender calls this functions and expect github value
    getGithub() {
        return this.github;
    }
    // addEngineer(engineerName, engineerId, engineerEmail, engineerGithub) {
    //     myEmployees.push(new Engineer(engineerName, engineerId, engineerEmail, engineerGithub));
    // }
}

module.exports = Engineer;