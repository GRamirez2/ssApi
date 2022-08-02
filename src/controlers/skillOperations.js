const ManagementModel = require('../models/Management');
const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');

/**
 * route = 'skills/'
 * */
const findAll_skill_GET = function(req, res){
    EmployeeModal.findAll({ include:[
            {model:SkillsModel}
            ]
        })
        .then(listOfEmployees =>{
            res.send({data:listOfEmployees})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })

} 

/**
 * route = 'Skills/:id'
 * */
const findOne_skill_GET = function(req, res){
    EmployeeModal.findOne({
        where:{
            id: req.params.id
            },
        include: [{ model: SkillsModel }]
        }
        )
        .then(skill =>{
            res.send({data:skill})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `${err}`})
        })
} 

const update_skill_PUT = function(req, res){
    // need to add validation, maybe use the Joi library?
    SkillsModel.update(
        {
            primary_tech: req.body.primary_tech,
            secondary_tech: req.body.secondary_tech,
            desired_tech: req.body.desired_tech
        },
        {returning: true, where: {id: req.params.id} }
      )
    //   INDLUDE EMPLOYEE HERE
      .then(function([ rowsUpdate, [updatedSkill] ]){
        res.json({data: updatedSkill, msg: `Skills updated`})
      })
      .catch(err =>{
        res.status(400).send({ERROR: `${err}`})
    })
} 

const findAll_primary_skill_GET = function(req, res){
    SkillsModel.findAll()
        .then(skills =>{
            let cleanList = skills.map(s => s.primary_tech.toUpperCase())
            let cleanNoDupes = [...new Set(cleanList)]
            res.send({data:cleanNoDupes})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

const findAll_secondary_skill_GET = function(req, res){
    SkillsModel.findAll()
        .then(skills =>{
            let cleanList = skills.map(s => s.secondary_tech.toUpperCase())
            let cleanNoDupes = [...new Set(cleanList)]
            res.send({data:cleanNoDupes})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

const findAll_desired_skill_GET = function(req, res){
    SkillsModel.findAll()
        .then(skills =>{
            let cleanList = skills.map(s => s.desired_tech.toUpperCase())
            let cleanNoDupes = [...new Set(cleanList)]
            res.send({data:cleanNoDupes})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}

/**
 * route = 'skills/primary/employees/:skill'
 * */
const findAll_employees_primary_skill_GET = function(req, res){
    EmployeeModal.findAll({
        include: [{ 
            model: SkillsModel,
            where:{
                primary_tech: req.params.skill.toLowerCase()
            }
        }]
        }
        )
        .then(skill =>{
            res.send({data:skill})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `${err}`})
        })
}
const findAll_employees_secondary_skill_GET = function(req, res){
    EmployeeModal.findAll({
        include: [{ 
            model: SkillsModel,
            where:{
                secondary_tech: req.params.skill.toLowerCase()
            }
        }]
        }
        )
        .then(skill =>{
            res.send({data:skill})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `${err}`})
        })
}
const findAll_employees_desired_skill_GET = function(req, res){
    EmployeeModal.findAll({
        include: [{ 
            model: SkillsModel,
            where:{
                desired_tech: req.params.skill.toLowerCase()
            }
        }]
        }
        )
        .then(skill =>{
            res.send({data:skill})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `${err}`})
        })
}

module.exports = {findAll_skill_GET, findOne_skill_GET, update_skill_PUT, findAll_primary_skill_GET, findAll_secondary_skill_GET, findAll_desired_skill_GET,findAll_employees_primary_skill_GET, findAll_employees_secondary_skill_GET, findAll_employees_desired_skill_GET };