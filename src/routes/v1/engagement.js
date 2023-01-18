import express from 'express';
export const engagement = express.Router();
const { numberValidation } = require('../../controlers/helpers');
const { findAll_engagements_GET, createNew_engagements_POST, findOne_engagement_GET, update_engagement_PUT, delete_engagement_DELETE, findemployees_engagement_GET } = require('../../controlers/engagementOperations');

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
 * /engagement:
 *  get:
 *    summary: An object with the total number of employees and an array of employee objects
 *    description: An object with the total number of employees and an array of employee objects
 *    tags:
 *      - Engagement
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
engagement.route('/')
.get( findAll_engagements_GET )
.post( createNew_engagements_POST )

engagement.route('/:id')
.get(numberValidation, findOne_engagement_GET)
.put(numberValidation,update_engagement_PUT)
.delete(numberValidation,delete_engagement_DELETE)

engagement.route('/:id/employees')
.get(numberValidation, findemployees_engagement_GET)
