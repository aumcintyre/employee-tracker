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

//WHY ISN'T THIS LINKING???


            if (response === 'View All Employees') {
                showEmployees();
            }

            if (choices === 'Add Employee') {
                console.log('Adding new employee');
            }

            if (choices === 'Update Employee Roles') {
                console.log('Updating employee role');
            }

            if (choices === 'View All Roles') {
                console.log('Showing all roles');
            }

            if (choices === 'Add Role') {
                console.log('Adding new role');
            }

            if (choices === 'View All Departments') {
                console.log('Showing all departments');
            }

            if (choices === 'Add Department') {
                console.log('Adding new department');
            }
        })
}

console.log("Welcome to the Employee Tracker!");
runPrompt()

showEmployees = () => {
    console.log('Showing all employees');
}