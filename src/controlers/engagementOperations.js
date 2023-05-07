const EngagementModel = require('../models/Engagement');
const ManagementModel = require('../models/Management');
const EmployeeModal = require('../models/Employees');
const SkillsModel = require('../models/Skill');
const { Op } = require("sequelize");

/**
 * route = 'engagement/'
 * */
export const findAll_engagements_GET = function(req, res){
    EngagementModel.findAll({
        where: {
            end_date:{
                [Op.or]: {
                    [Op.gte]: new Date(),
                    [Op.eq]: null
                  }
            }

        }
    })
    .then(engagements =>{
        res.send({
            length: engagements.length,
            data: engagements
        })
    } )
    .catch(err =>{
        console.log(err)
        res.send({error: `${err}`})
    })

} 

export const createNew_engagements_POST = function(req, res){
   // validate that all fields are passed in or return error !!!
   const newEngagement = {
        client: req.body.client.trim(),
        project: req.body.project.trim(),
        start_date: new Date(req.body.start_date),
        end_date: new Date(req.body.end_date),
        extended: req.body.extended,
        notes: req.body.notes.trim(),
        project_type: req.body.project_type.trim(),
        size: req.body.size,
        project_length: req.body.project_length.trim(),
    };

    EngagementModel.create(newEngagement)
    .then(
        engagement => {
            res.send({
                data: engagement,
                msg: 'New engagement added'
            })
        }
    )
    .catch(err => {
        res.status(400).send({'ERROR': `Error in inserting new record to Engagment Table. ${err}`})
    })
} 

/**
 * route = 'engagement/:id'
 * */
export const findOne_engagement_GET = function(req, res){
    EngagementModel.findOne({
        where:{
            id: req.params.id
            }
        }
        )
        .then(engagement =>{
            res.send({data:engagement})
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
} 

export const update_engagement_PUT = function(req, res){
    // need to add validation, maybe use the Joi library?
    EngagementModel.update(
        {
            client: req.body.client?.trim(),
            project: req.body.project?.trim(),
            ...(req.body.start_date && {start_date: new Date(req.body.start_date)}),
            ...(req.body.end_date && {end_date: new Date(req.body.end_date)}),
            extended: req.body.extended,
            notes: req.body.notes?.trim(),
            project_type: req.body.project_type?.trim(),
            size: req.body.size,
            project_length: req.body.project_length?.trim(),
        },
        {returning: true, where: {id: req.params.id} }
      )
      .then(function([ rowsUpdate, [updatedEngagement] ]){
        res.json({
            data: updatedEngagement,
            msg: 'Engagement updated'    
        })
      })
      .catch(err =>{
        res.status(400).send({ERROR: `${err}`})
    })
} 

export const delete_engagement_DELETE  = function(req, res){
    EngagementModel.destroy({
        where:{
            id: req.params.id
            }
        }
        )
        .then( () => {
            res.send({msg: `Engagement ${req.params.id} has been deleted`})
        } )
        .catch(err =>{
            res.status(400).send({ERROR: `There was a problem deleting this id. ${err}`})
        })
}

/**
 * route = 'engagement/:id/employees
 */
export const findemployees_engagement_GET = function(req, res){
    EmployeeModal.findAll({
        where:{
            engagement_id: req.params.id
            },
        include:[
            {model:SkillsModel}
        ]
        }
        )
        .then(employees =>{
            res.send({
                length: employees.length,
                data:employees
            })
        } )
        .catch(err =>{
            res.send({ERROR: `${err}`})
        })
}