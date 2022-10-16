const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');
const ManagementModel = require('../models/Management');
const EngagementModel = require('../models/Engagement');


/**
 * route = 'employee/'
 * */
export const findAll_employees_GET = function(req, res){
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
            res.status(400).send({ERROR: err, msg: 'Problem fetching employee list'})
        })
}

export const createNew_employee_POST = function(req, res){
    // validation in model
    const newEmployee = {
        manager_id: req.body.manager_id,
        engagement_id: req.body.engagement_id,
        first_name: req.body.first_name ? req.body.first_name.toString().toLowerCase().trim() : '',
        last_name: req.body.last_name ? req.body.last_name.toString().toLowerCase().trim() : '',
        active: req.body.active,
        status: req.body.status ? req.body.status.toString().toLowerCase().trim() : '',
        appAdmin: req.body.appAdmin,
        email: req.body.email ? req.body.email.toString().toLowerCase().trim(): '',
        phone: req.body.phone ? req.body.phone.toString().toLowerCase().trim() : '',
        linkedIn: req.body.linkedIn ? req.body.linkedIn.toString().toLowerCase().trim() : '',
        github: req.body.github ? req.body.github.toString().toLowerCase().trim() : '',
        start_date: req.body.start_date ? new Date(req.body.start_date): null,
        extended: req.body.extended,
        extended_start_date: req.body.extended_start_date ? new Date(req.body.extended_start_date): null
    };
    EmployeeModal.create(newEmployee)
    .then(
        e => {
            SkillsModel.create({
                employee_id: e.dataValues.id,
                primary_tech: req.body.primary_tech ? req.body.primary_tech.toString().toLowerCase().trim() : '',
                secondary_tech: req.body.secondary_tech ? req.body.secondary_tech.toString().toLowerCase().trim() : '',
                desired_tech: req.body.desired_tech ? req.body.desired_tech.toString().toLowerCase().trim() : ''
            })
            .then(
                employee => {res.send({'data': {...e.dataValues, Skill: employee.dataValues}})}
            )
            .catch(err => {
                res.status(400).send({'ERROR': err, 'Location': `Error inserting new record to Skills Table.`})
            })
        }
    )
    .catch(err => {
        res.status(400).send({'ERROR': err, 'Location': `Error inserting new record to Employees Table.`})
    })
}

/**
 * route = 'employee/:id'
 * */
export const findOne_employee_GET = function(req, res){
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
            res.status(400).send({ERROR: err,  'msg': `There was a problem finding Employee ID ${req.params.id}`})
        })
}

export const update_employee_PUT = function(req, res){
// Validation in model, maybe use the Joi library?
    EmployeeModal.update(
        {
            manager_id: req.body.manager_id,
            engagement_id: req.body.engagement_id,
            first_name: req.body.first_name?.toString().toLowerCase().trim(),
            last_name: req.body.last_name?.toString().toLowerCase().trim(),
            active: req.body.active,
            status: req.body.status?.toString().toLowerCase().trim(),
            appAdmin: req.body.appAdmin,
            email: req.body.email?.toString().toLowerCase().trim(),
            phone: req.body.phone?.toString().toLowerCase().trim(),
            linkedIn: req.body.linkedIn?.toString().toLowerCase().trim(),
            github: req.body.github?.toString().toLowerCase().trim(),
            ...(req.body.start_date && {start_date: new Date(req.body.start_date)}),
            extended: req.body.extended,
           ...( req.body.extended_start_date && {extended_start_date: new Date(req.body.extended_start_date)})
        },
        {returning: true, where: {id: req.params.id} }
      )
      .then(function([ rowsUpdate, [updatedEmployee] ]){
        res.json(updatedEmployee)
      })
      .catch(err =>{
        res.status(400).send({ERROR: err, 'Location': `Error updating record to Employees Table.`})
    })
}

export const delete_employee_DELETE = function(req, res){
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
            res.send({msg: `Employee ID ${req.params.id} - has been deleted`})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: err, 'msg': `There was a problem deleting Employee ID:  ${req.params.id}`})
        })
}