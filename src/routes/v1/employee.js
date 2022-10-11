
import express from 'express';
const employee = express.Router()
const { findAll_employees_GET, createNew_employee_POST, findOne_employee_GET, update_employee_PUT, delete_employee_DELETE}  = require('../../controlers/employeeOperations')
import { numberValidation } from '../../controlers/helpers';


employee.route('/')
.get(findAll_employees_GET)
.post(createNew_employee_POST)

employee.route('/:id')
.get(numberValidation, findOne_employee_GET)
.put(numberValidation,update_employee_PUT)
.delete(numberValidation,delete_employee_DELETE)

module.exports = employee;
