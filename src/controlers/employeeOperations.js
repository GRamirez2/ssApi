const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');
const ManagementModel = require('../models/Management');
const EngagementModel = require('../models/Engagement');

/**
 * route = 'employee/'
 * */
const findAll_employees_GET = function(req, res){
    EmployeeModal.findAll(
        { include:[
            {model:SkillsModel},
            {model:ManagementModel},
            {model:EngagementModel}
            ]
        }
        )
        .then(listOfEmployees =>{
            res.send({
                length: listOfEmployees.length,
                data:listOfEmployees
            })
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

const createNew_employee_POST = function(req, res){
   // validate that all fields are passed in or return error
    const newEmployee = {
        manager_id: req.body.manager_id,
        engagement_id: req.body.engagement_id,
        first_name: req.body.first_name.trim().toString(),
        last_name: req.body.last_name.trim().toString(),
        active: req.body.active,
        status: req.body.status.trim().toString(),
        appAdmin: req.body.appAdmin,
        email: req.body.email.trim().toString(),
        phone: req.body.phone.trim().toString(),
        linkedIn: req.body.linkedIn.trim().toString(),
        github: req.body.github.trim().toString(),
        start_date: req.body.start_date ? new Date(req.body.start_date): null,
        extended: req.body.extended,
        extended_start_date: req.body.extended_start_date ? new Date(req.body.extended_start_date): null
    };
    EmployeeModal.create(newEmployee)
    .then(
        e => {
            SkillsModel.create({
                employee_id: e.dataValues.id,
                primary_tech: req.body.primary_tech.trim().toString(),
                secondary_tech: req.body.secondary_tech.trim().toString(),
                desired_tech: req.body.desired_tech.trim().toString()
            })
            .then(
                employee => {res.send({'data': {...e.dataValues, Skill: employee.dataValues}})}
            )
            .catch(err => {
                res.status(400).send({'ERROR': `Error in inserting new record to Skills Table. ${err}`, data: e})
            })
        }
    )
    .catch(err => {
        res.status(400).send({'ERROR': `Error in inserting new record to Employees Table. ${err}`})
    })
}

/**
 * route = 'employee/:id'
 * */
const findOne_employee_GET = function(req, res){
    EmployeeModal.findOne({
        where:{
            id: req.params.id
            },
        include:[
            {model:SkillsModel},
            {model:ManagementModel},
            {model:EngagementModel}
            ]
        }
        )
        .then(employee =>{
            res.send({data:employee})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

const update_employee_PUT = function(req, res){
// need to add validation, maybe use the Joi library?
    EmployeeModal.update(
        {
            manager_id: req.body.manager_id,
            engagement_id: req.body.engagement_id,
            first_name: req.body.first_name?.trim(),
            last_name: req.body.last_name?.trim(),
            active: req.body.active,
            status: req.body.status?.trim(),
            appAdmin: req.body.appAdmin,
            email: req.body.email?.trim(),
            phone: req.body.phone?.trim(),
            linkedIn: req.body.linkedIn?.trim(),
            github: req.body.github?.trim(),
            ...(req.body.start_date && {start_date: new Date(req.body.start_date)}),
            extended: req.body.extended,
           ...( req.body.extended && {extended_start_date: new Date(req.body.extended_start_date)})
        },
        {returning: true, where: {id: req.params.id} }
      )
      .then(function([ rowsUpdate, [updatedEmployee] ]){
        res.json(updatedEmployee)
      })
      .catch(err =>{
        res.status(400).send({ERROR: `${err}`})
    })
}

const delete_employee_DELETE = function(req, res){
    SkillsModel.destroy({
        where:{
            employee_id: req.params.id
            }
        }
        )
        .then( () => {
            EmployeeModal.destroy({
                where:{
                    id: req.params.id
                }
            })
        })
        .then( () => {
            res.send({msg: `Employee ${req.params.id} has been deleted`})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `There was an problem deleting this id. ${err}`})
        })
}

module.exports = {findAll_employees_GET, createNew_employee_POST, findOne_employee_GET, update_employee_PUT, delete_employee_DELETE };