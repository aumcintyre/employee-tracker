const inquirer = require('inquirer')
const mysql2 = require('mysql2')

const runPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department']
        }
    ])
        .then((response) => {
console.log(response.choice);


//Prompt to ask the user where they would like to begin


            if (response.choice === 'View All Employees') {
                showEmployees();
            }

            if (response.choice === 'Add Employee') {
                console.log('Adding new employee');
            }

            if (response.choice === 'Update Employee Roles') {
                console.log('Updating employee role');
            }

            if (response.choice === 'View All Roles') {
                console.log('Showing all roles');
            }

            if (response.choice === 'Add Role') {
                console.log('Adding new role');
            }

            if (response.choice === 'View All Departments') {
                console.log('Showing all departments');
            }

            if (response.choice === 'Add Department') {
                console.log('Adding new department');
            }
        })
}

console.log("Welcome to the Employee Tracker!");
runPrompt()

showEmployees = () => {
    console.log('Showing all employees');


}

addEmployee = () => {
    console.log('Adding new employees');

    // inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'firstName',
    //         message: "What is the employee's first name?",
    //     }
    // ])
}

updateEmployee = () => {
    console.log('Showing all employees');
}

showEmployees = () => {
    console.log('Showing all employees');
}

showEmployees = () => {
    console.log('Showing all employees');
}

showEmployees = () => {
    console.log('Showing all employees');
}