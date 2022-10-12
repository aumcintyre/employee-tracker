const inquirer = require('inquirer')
const mysql = require('mysql2')
const conTable = require('console.table')

require('dotenv').config()

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
  );

  db.connect(err => {
    if (err) throw (err);
    console.log("Connected to " + process.env.DB_NAME);
    nowConnected();
  });

nowConnected = () => {
    console.log("EMPLOYEE MANAGER");
    runPrompt();
}

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
                showRoles();
            }

            if (response.choice === 'Add Role') {
                console.log('Adding new role');
            }

            if (response.choice === 'View All Departments') {
                showDepartments();
            }

            if (response.choice === 'Add Department') {
                console.log('Adding new department');
            }
        })
}

// console.log("Welcome to the Employee Tracker!");
// runPrompt()

showEmployees = () => {
    console.log('Showing all employees');

    const sql = `SELECT * FROM employee`

    db.query(sql, (err, rows)=> {
        if (err) throw (err);
        console.table(rows);
        runPrompt();
    })
};

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

showRoles = () => {
    console.log('Showing all roles');

    const sql = `SELECT * FROM role`

    db.query(sql, (err, rows)=> {
        if (err) throw (err);
        console.table(rows);
        runPrompt();
    })
}

addRole = () => {
    console.log('Showing all employees');
}

showDepartments = () => {
    console.log('Showing all departments');

    const sql = `SELECT * FROM department`

    db.query(sql, (err, rows)=> {
        if (err) throw (err);
        console.table(rows);
        runPrompt();
    })
}

addDepartment = () => {
    console.log('Showing all employees');
}