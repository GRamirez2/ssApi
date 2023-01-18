const ManagementModel = require('../models/Management');
const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skills');

/**
 * route = 'skills/'
 * */
export const findAll_skill_GET = function(req, res){
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
 * route = 'skills/employee/:id'
 * */
export const findOne_skill_GET = function(req, res){
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

export const update_skill_PUT = function(req, res){
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

/**
 * route = 'skills/primary
 */
export const findAll_primary_skill_GET = function(req, res){
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

/**
 * route = 'skills/secondary
 */
export const findAll_secondary_skill_GET = function(req, res){
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

/**
 * route = 'skills/desired
 */
export const findAll_desired_skill_GET = function(req, res){
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

/*
* route = '/employees/:level/:skill'
* level options are: primary_tech, secondary_tech, desired_tech
*/
export const findAll_employees_skill_level_GET = function(req, res){

    let key = req.params.level.toLowerCase().trim().toString();
    const skill_ = req.params.skill.toLowerCase().trim().toString();
    let query = {};
    query[key] = skill_

    EmployeeModal.findAll({
            include: [{ 
                model: SkillsModel,
                where:query
            }]
        })
        .then(skill =>{
            res.send({data:skill})
        })
        .catch(err =>{
            res.status(400).send({ERROR: `${err}`})
        })
}
