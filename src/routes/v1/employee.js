
import express from 'express';
export const employee = express.Router()
import { findAll_employees_GET, createNew_employee_POST, findOne_employee_GET, update_employee_PUT, delete_employee_DELETE }from '../../controlers/employeeOperations'
import { numberValidation } from '../../controlers/helpers';
 

/**
 * @openapi
 *  components:
 *      schemas:
 *          errorEmployeeGet:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: object
 *                  msg:
 *                      type: string
 *                      description: Problem fetching employee list
 *          errorEmployeeIdGet:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: object
 *                  msg:
 *                      type: string
 *                      description: There was a problem finding Employee ID {id}
 *          deleteSuccess:
 *              type: object
 *              properties:
 *                  msg:
 *                      type: string
 *                      description: Employee ID {id} has been deleted
 *          deleteError:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: Object
 *                  msg: 
 *                      type: string
 *                      description: There was a problem deleting Employee ID {id}
 *          paramNotInteger:
 *              type: object
 *              properties:
 *                  msg:
 *                      type: string
 *                      description: The id can only be a whole number
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
 *    summary: An object with the total number of employees and an array of employee objects
 *    description: An object with the total number of employees and an array of employee objects
 *    tags:
 *      - Employee
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
 *                                  $ref: '#components/schemas/employee'
 *      400:
 *          description: Unexpected error
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/errorEmployeeGet'
 *                                  
 */
employee.route('/')
.get(findAll_employees_GET)
.post(createNew_employee_POST)

/**
 * @openapi
 * /employee/{id}:
 *  get:
 *    summary: An object with one employee object
 *    description: An object with a key of data with one employee object
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID required
 *        schema:
 *          type: integer
 *    tags:
 *      - Employee
 *    responses:
 *      200:
 *          description: data is the key of the employee object
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          data:
 *                              $ref: '#components/schemas/employee'
 *      400:
 *          description: Unexpected error
 *          content:
 *              application/json:
 *                  schema:
 *                    oneOf:
 *                      - $ref: '#components/schemas/paramNotInteger'
 *                      - $ref: '#components/schemas/errorEmployeeIdGet'
 *  delete:
 *    summary: Delete one employee
 *    description: Delete one employee and all related engagement, skills, and management information
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Numeric ID required
 *        schema:
 *          type: integer
 *    tags:
 *      - Employee
 *    responses:
 *      200:
 *          description: Employee deleted successfully
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/deleteSuccess'
 *      400:
 *          description: Unexpected errors
 *          content:
 *              application/json:
 *                  schema:
 *                    oneOf:
 *                      - $ref: '#components/schemas/paramNotInteger'
 *                      - $ref: '#components/schemas/deleteError'
 *                                  
 */
employee.route('/:id')
.get(numberValidation, findOne_employee_GET)
.put(numberValidation,update_employee_PUT)
.delete(numberValidation,delete_employee_DELETE)
