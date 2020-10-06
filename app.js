const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const myEmployees = [];
let idHolder = 1;


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


// Add a function that calls upon start, this function leads to the other options for a new employee
function buildTeam() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What do you wanna do?",
        choices: ["Add New Manager", "Add New Engineer", "Add New Intern", "Quit"]
    }).then(function ({ choice }) {
        switch (choice) {
            case "Add New Manager":
                createManager();
                break;

            case "Add New Engineer":
                createEngineer();
                break;

            case "Add New Intern":
                createIntern();
                break;

            default:
                console.log("Team Added to board")
                console.table(myEmployees);
                // call rendering using myEmployees Array
                // render(myEmployees);
                break;
        }
    })
}

function createManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "Enter Manager's name: ",
                name: "name"
            }, {
                type: "input",
                message: "Enter Manager's email: ",
                name: "email"
            }, {
                type: "input",
                message: "Enter Manager's office phone: ",
                name: "officePhone"
            }
        ]).then(function (answers) {
            // Set a placeholder variable
            let selectedManager;
            // Use placeholder to create new intern object
            // selectedManager.addManager(answers.name, idHolder, answers.email, answers.officePhone);
            myEmployees.push(new Manager(answers.name, idHolder, answers.email, answers.officePhone));
            // increment for new id number for next employee
            idHolder++;
            buildTeam();
        })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineer's name: ",
            name: "name"
        }, {
            type: "input",
            message: "Enter Engineer's email: ",
            name: "email"
        }, {
            type: "input",
            message: "Enter Engineer's Github: ",
            name: "github"
        }
    ]).then(function (answers) {
        // Set a placeholder variable
        let selectedEngineer;
        // Use placeholder to create new intern object
        // selectedEngineer.addEngineer(answers.name, idHolder, answers.email, answers.github);
        myEmployees.push(new Engineer(answers.name, idHolder, answers.email, answers.github));
        // building the new 
        // increment for new id number for next employee
        idHolder++;
        buildTeam();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's name: ",
            name: "name"
        }, {
            type: "input",
            message: "Enter Intern's email: ",
            name: "email"
        }, {
            type: "input",
            message: "Enter Intern's school: ",
            name: "school"
        }
    ]).then(function (answers) {
        // Set a placeholder variable
        let selectedIntern;
        // Use placeholder to create new intern object
        // selectedIntern.addIntern(answers.name, idHolder, answers.email, answers.school);
        myEmployees.push(new Intern(answers.name, idHolder, answers.email, answers.school));
        // increment for new id number for next employee
        idHolder++;
        buildTeam();
    })
}

buildTeam();