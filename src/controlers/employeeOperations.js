const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');
const ManagementModel = require('../models/Management');

/**
 * route = '/'
 * */
const findAll_employees_GET = function(req, res){
    EmployeeModal.findAll(
        { include:[
            {model:SkillsModel},
            {model:ManagementModel}
            ]
        }
        )
        .then(listOfEmployees =>{
            res.send({data:listOfEmployees})
        } )
        .catch(err =>{
            console.log(err)
            res.send({error: `${err}`})
        })
}

const createNew_employee_POST = function(req, res){
   // validate that all fields are passed in or return error
    const newEmployee = {
        manager_id: req.body.manager_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        active: req.body. active,
        status: req.body.status,
        appAdmin: req.body.appAdmin,
        email: req.body.email,
        phone: req.body.phone,
        linkedIn: req.body.linkedIn,
        github: req.body.github
    };

    EmployeeModal.create(newEmployee)
    .then(
        e => {
            SkillsModel.create({
                employee_id: e.dataValues.id,
                primary_tech: req.body.primary_tech,
                secondary_tech: req.body.secondary_tech,
                desired_tech: req.body.desired_tech
            })
            .then(
                employee => {res.send({'data': {...e.dataValues, Skill: employee.dataValues}})}
            )
            .catch(err => {
                res.status(400).send({'ERROR': `Error in inserting new record to Skills Table. ${err}`})
            })
        }
    )
    .catch(err => {
        res.status(400).send({'ERROR': `Error in inserting new record to Employees Table. ${err}`})
    })
}

/**
 * route = '/:id'
 * */
const findOne_employee_GET = function(req, res){

    EmployeeModal.findOne({
        where:{
            id: req.params.id
            },
        include:[
            {model:SkillsModel},
            {model:ManagementModel}
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
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            active: req.body.active,
            status: req.body.status,
            appAdmin: req.body.appAdmin,
            email: req.body.email,
            phone: req.body.phone,
            linkedIn: req.body.linkedIn,
            github: req.body.github,
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