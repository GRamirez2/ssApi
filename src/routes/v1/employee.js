
import express from 'express';
const employee = express.Router()
const { findAll_employees,createNew_employee, findOne_employee, update_employee, delete_employee } = require('../../controlers/employeeOperations')


employee.route('/')
.get(findAll_employees)
.post(createNew_employee)

employee.route('/:id')
.get(findOne_employee)
.put(update_employee)
.delete(delete_employee)

module.exports = employee;
