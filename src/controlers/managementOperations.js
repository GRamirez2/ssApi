const ManagementModel = require('../models/Management');
const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');

/**
 * route = 'management/'
 * */
const findAll_manager_GET = function(req, res){
    ManagementModel.findAll()
        .then(listOfEmployees =>{
            res.send({data:listOfEmployees})
        } )
        .catch(err =>{
            console.log(err)
            res.send({error: `${err}`})
        })

} 

const createNew_manager_POST = function(req, res){
   // validate that all fields are passed in or return error
   const newManager = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        seniority_level: req.body.seniority_level,
        department: req.body.department,
    };

    ManagementModel.create(newManager)
    .then(
        manager => {
            res.send({data: manager})
            // res.send({'data': manager, 'msg': 'New manager added'})
        }
    )
    .catch(err => {
        res.status(400).send({'ERROR': `Error in inserting new record to Management Table. ${err}`})
    })
} 

/**
 * route = 'management/:id'
 * */
const findOne_manager_GET = function(req, res){
    ManagementModel.findOne({
        where:{
            id: req.params.id
            }
        }
        )
        .then(manager =>{
            res.send({data:manager})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
} 

const update_manager_PUT = function(req, res){
    // need to add validation, maybe use the Joi library?
    ManagementModel.update(
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            seniority_level: req.body.seniority_level,
            department: req.body.department,
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

const findReports_manager_GET = function(req, res){
    EmployeeModal.findAll({
        where:{
            manager_id: req.params.id
            },
        include:[
            {model:SkillsModel}
        ]
        }
        )
        .then(employees =>{
            res.send({data:employees})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

const delete_manager_DELETE  = function(req, res){
    ManagementModel.destroy({
        where:{
            id: req.params.id
            }
        }
        )
        .then( () => {
            res.send({msg: `Manager ${req.params.id} has been deleted`})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `There was an problem deleting this id. ${err}`})
        })
} 

module.exports = {findAll_manager_GET, createNew_manager_POST, findOne_manager_GET, update_manager_PUT, findReports_manager_GET, delete_manager_DELETE };