
import express from 'express';
export const employee = express.Router()
import { findAll_employees_GET, createNew_employee_POST, findOne_employee_GET, update_employee_PUT, delete_employee_DELETE }from '../../controlers/employeeOperations'
import { numberValidation, primary_techValidation } from '../../controlers/helpers';
 

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
 *          postErrorSkills:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: Object
 *                  Location: 
 *                      type: string
 *                      description: Error inserting new record to Skills Table
 *          postErrorEmployee:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: Object
 *                  Location: 
 *                      type: string
 *                      description: Error inserting new record to Employees Table
 *          noIdError:
 *              type: object
 *              properties:
 *                  ERROR:
 *                      type: string
 *                      description: Did not find this employee id
 *                  Location: 
 *                      type: string
 *                      description: Can not delete Employee ID ${id} if it doens't exist
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
 *          newEmployee:
 *              type: object
 *              required: [manager_id, engagement_id, first_name, last_name, status, email, primary_tech, start_date ]
 *              properties:
 *                  manager_id:
 *                      type: integer
 *                      required: true
 *                  engagement_id:
 *                      type: integer
 *                      required: true
 *                  first_name:
 *                      type: string
 *                      required: true
 *                  last_name:
 *                      type: string
 *                      required: true
 *                  active:
 *                      type: boolean
 *                  status:
 *                      type: string
 *                      required: true
 *                  appAdmin:
 *                      type: boolean
 *                  email:
 *                      type: string
 *                      required: true
 *                  primary_tech:
 *                      type: string
 *                      required: true
 *                  secondary_tech:
 *                      type: string
 *                  desired_tech:
 *                      type: string
 *                  phone:
 *                      type: string
 *                  linkedIn:
 *                      type: string
 *                  github:
 *                      type: string
 *                  start_date:
 *                      type: string
 *                      required: true
 *                  extended:
 *                      type: boolean
 *                  extended_start_date:
 *                      type: string              
 *                          
 *          newEmployeeResponse:
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
 * 
 *          putEmployee:
 *              type: object
 *              properties:
 *                  manager_id:
 *                      type: integer
 *                  engagement_id:
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
 *  post:
 *    summary: Create a new employee
 *    description: Create a new employee
 *    tags:
 *      - Employee
 *    consumes:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: New Employee
 *        description: Information to create new employee, see schema to see required fields.
 *        schema:
 *            $ref: '#components/schemas/newEmployee'
 *    responses:
 *      200:
 *          description: Update the POST description
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/newEmployeeResponse'
 *      400:
 *          description: Database errors
 *          content:
 *              application/json:
 *                  schema:
 *                    oneOf:
 *                      - $ref: '#components/schemas/postErrorEmployee'
 *                      - $ref: '#components/schemas/postErrorSkills'
 *                                  
 */
employee.route('/')
.get(findAll_employees_GET)
.post(primary_techValidation, createNew_employee_POST)

/**
 * @openapi
 * /employee/{id}:
 *  get:
 *    summary: An object with information for one employee 
 *    description: An object with information for one employee
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
 * 
 *  put:
 *    summary: Update employee data
 *    description: Update employee data
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
 *          description: Updated employee object is returned
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/putEmployee'
 *      400:
 *          description: Database error
 *          content:
 *              application/json:
 *                  schema:
 *                    oneOf:
 *                      - $ref: '#components/schemas/errorEmployeeIdGet'
 *                      - $ref: '#components/schemas/postErrorEmployee'
 * 
 * 
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
 *          description: Database errors or Not an employee id
 *          content:
 *              application/json:
 *                  schema:
 *                    oneOf:
 *                      - $ref: '#components/schemas/paramNotInteger'
 *                      - $ref: '#components/schemas/deleteError'
 *                      - $ref: '#components/schemas/noIdError'
 *                                  
 */
employee.route('/:id')
.get(numberValidation, findOne_employee_GET)
.put(numberValidation,update_employee_PUT)
.delete(numberValidation,delete_employee_DELETE)
