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
                addEmployee();
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

    db.query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        runPrompt();
    })
};

addEmployee = () => {
    console.log('Adding new employees');

    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?"
        },
        // {
        //     type: 'list',
        //     name: 'employeeRole',
        //     message: "What is the employee's job title?",
        //     choices: ['Software Engineer', 'Full Stack Developer', 'Accountant', 'Financial Analyst', 'Brand Ambassador', 'Project Manager']
        // },
        // {
        //     type: 'input',
        //     name: 'managerId',
        //     default: null,
        //     message: "Enter the manager's ID for this employee. If none, leave blank."
        // }
    ])
        .then(response => {
            const newEmployee = [response.firstName, response.lastName]

            //Get roles from role table to use as choices in prompt list

            const roleSql = 'Select role.id, role.title FROM role';

            db.query(roleSql, (err, response) => {
                if (err) throw err;
                const roles = response.map(({ id, title }) => ({ name: title, value: id }))

                inquirer.prompt([
                    {
                        type: 'list',
                        name: 'role',
                        message: "What is the new employee's role?",
                        choices: roles
                    }
                ])
                    .then(roleResponse => {
                        const role = roleResponse.role;
                        newEmployee.push(role)

                        const managerSql = `Select * from employee`;

                        db.query(managerSql, (err, response) => {
                            if (err) throw err;

                            const managers = response.map(({ id, first_name, last_name }) => ({ name: first_name + last_name, value: id }));

                            inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'manager',
                                    message: "Who is the employee's manager?",
                                    choices: managers
                                }
                            ])
                                .then(managerResponse => {
                                    const manager = managerResponse.manager
                                    newEmployee.push(manager);

                                    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
                                    
                                    db.query(sql, newEmployee, (err, result) => {
                                        if (err) throw (err);
                                        console.log("Successfully added employee!");

                                        showEmployees();
                                    })
                                })
                        })
                    })
            }) 



      
    })
}

updateEmployee = () => {
    console.log('Showing all employees');
}

showRoles = () => {
    console.log('Showing all roles');

    const sql = `SELECT * FROM role`

    db.query(sql, (err, rows) => {
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

    db.query(sql, (err, rows) => {
        if (err) throw (err);
        console.table(rows);
        runPrompt();
    })
}

addDepartment = () => {
    console.log('Showing all employees');
}