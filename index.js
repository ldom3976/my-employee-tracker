const cTable = require('console.table');
const inquirer = require('inquirer');
const { query } = require('./db/connection');
const db = require('./db/connection');

// prompt user function
const promptUser = () => {
    menu();
}

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update employee role', 'Delete a department', 'Delete a role', 'Delete an employee', 'EXIT']
        }
    ])
        .then(data => {

            if (data.options === 'View all departments') {
                viewDepartments();
            }
            if (data.options === 'View all roles') {
                viewRoles();
            }
            if (data.options === 'View all employees') {
                viewEmployees();
            }
            if (data.options === 'Add a department') {
                addDepartment();
            }
            if (data.options === 'Add a role') {
                addRole();
            }
            if (data.options === 'Add an employee') {
                addEmployee();
            }
            if (data.options === 'Update employee role') {
                updateRole();
            }
            if (data.options === 'Delete a department') {
                deleteDepartment();
            }
            if (data.options === 'Delete a role') {
                deleteRole();
            }
            if (data.options === 'Delete an employee') {
                deleteEmployee();
            }
            if (data.options === 'EXIT') {
                db.end();
            }
        })
}

