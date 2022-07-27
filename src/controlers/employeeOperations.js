const EmployeeModal = require('../models/Employees');
const skillsModel = require('../models/Skills');
const ManagementModel = require('../models/Management');

const findAll_employees = function(req, res){
    EmployeeModal.findAll(
        { include:[
            {model:skillsModel},
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

const createNew_employee = function(req, res){
        //do stuff
        // .then(listOfEmployees =>{
        //     res.send({data:listOfEmployees})
        // } )
        // .catch(err =>{
        //     console.log(err)
        //     res.send({error: `${err}`})
        // })
        res.send({'data': 'POST => api/v1/employee'})

}

const findOne_employee = function(req, res){
    EmployeeModal.findOne({
        where:{
            id: req.params.id
            },
        include:[
            {model:skillsModel},
            {model:ManagementModel}
            ]
        }
        )
        .then(employee =>{
            res.send({data:employee})
        } )
        .catch(err =>{
            console.log(err)
            res.send({error: `${err}`})
        })
}

const update_employee = function(req, res){
    res.send({'data': 'PUT => api/v1/employee' + req.params.id})
}

const delete_employee = function(req, res){
    res.send({'data':'DELETE => api/v1/employee/' +req.params.id})
}

module.exports = {findAll_employees, createNew_employee, findOne_employee, update_employee, delete_employee};