// TODO: Write code to define and export the Employee class
class Employee {
    // Set up basic Structure for what needs to be accepted and order matching the test files
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // test and htmlRender calls this functions and expect name value
    getName() {
        return this.name;
    }
    // test and htmlRender calls this functions and expect id value
    getId() {
        return this.id;
    }
    // test and htmlRender calls this functions and expect email value
    getEmail() {
        return this.email;
    }
    // test and htmlRender calls this functions and the value for role is based on the object type, return string of this constructor
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;