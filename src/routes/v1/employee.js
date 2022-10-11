
import express from 'express';
const employee = express.Router()
const { findAll_employees_GET, createNew_employee_POST, findOne_employee_GET, update_employee_PUT, delete_employee_DELETE}  = require('../../controlers/employeeOperations')
import { numberValidation } from '../../controlers/helpers';
 
/**
 * @openapi
 *  components:
 *      schema:
 *          employee:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                  manager_id:
 *                      type: integer
 *                  first_name:
 *                      type: string
 *                  last_name:
 *                      type: string
 *                  active:
 *                      type: boolean
 *                  status:
 *                      type: string
 *                  appAdmin:
 *                      type: boolean
 *                  email:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  linkedIn:
 *                      type: string
 *                  github:
 *                      type: string
 *                  start_date:
 *                      type: string
 *                  extended:
 *                      type: boolean
 *                  extended_start_date:
 *                      type: string
 *                  createdAt:
 *                      type: string
 *                  updatedAt:
 *                      type: string
 *                  Skill:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          employee_id:
 *                              type: string
 *                          primary_tech:
 *                              type: string
 *                          secondary_tech:
 *                              type: string
 *                          desired_tech:
 *                              type: string
 *                          createdAt:
 *                              type: string
 *                          updatedAt:
 *                              type: string
 *                  Management:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          first_name:
 *                              type: string
 *                          last_name:
 *                              type: string
 *                          seniority_level:
 *                              type: string
 *                          department:
 *                              type: string
 *                          createdAt:
 *                              type: string
 *                          updatedAt:
 *                              type: string
 *                  Engagement:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                          client:
 *                              type: string
 *                          project:
 *                              type: string
 *                          start_date:
 *                              type: string
 *                          end_date:
 *                              type: string
 *                          extended:
 *                              type: boolean
 *                          notes:
 *                              type: string
 *                          project_type:
 *                              type: string
 *                          size:
 *                              type: integer
 *                          project_length:
 *                              type: string
 *                          createdAt:
 *                              type: string
 *                          updatedAt:
 *                              type: string
 *                          
 *                          
 *              
 */


/**
 * @openapi
 * /employee:
 *  get:
 *    summary: Returns an object with the number of employees and a list of employee objects
 *    description: Returns an object with the number of employees and a list of employee objects
 *    responses:
 *      200:
 *          description: length is the number of employees, data is the array of employee objects
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          length:
 *                              type: integer
 *                          data:
 *                              type: array
 *                              items:
 *                                  $ref: '#components/schema/employee'
 */
employee.route('/')
.get(findAll_employees_GET)
.post(createNew_employee_POST)

employee.route('/:id')
.get(numberValidation, findOne_employee_GET)
.put(numberValidation,update_employee_PUT)
.delete(numberValidation,delete_employee_DELETE)

module.exports = employee;
