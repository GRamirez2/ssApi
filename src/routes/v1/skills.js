import express from 'express';
const skills = express.Router()
const { numberValidation } = require('../../controlers/helpers');
const {findAll_skill_GET, findOne_skill_GET, update_skill_PUT, findAll_primary_skill_GET, findAll_secondary_skill_GET, findAll_desired_skill_GET } = require('../../controlers/skillOperations');


skills.route('/')
.get(findAll_skill_GET)

skills.route('/tech/primary')
.get(findAll_primary_skill_GET)
skills.route('/tech/secondary')
.get(findAll_secondary_skill_GET)
skills.route('/tech/desired')
.get(findAll_desired_skill_GET)


skills.route('/:id')
.get(numberValidation, findOne_skill_GET)
.put(numberValidation,update_skill_PUT)



module.exports = skills;