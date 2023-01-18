import express from 'express';
export const skills = express.Router()
const { numberValidation } = require('../../controlers/helpers');
const {findAll_skill_GET, findOne_skill_GET, update_skill_PUT, findAll_primary_skill_GET, findAll_secondary_skill_GET, findAll_desired_skill_GET, findAll_employees_skill_level_GET } = require('../../controlers/skillOperations');


skills.route('/')
.get(findAll_skill_GET)

skills.route('/primary')
.get(findAll_primary_skill_GET)
skills.route('/secondary')
.get(findAll_secondary_skill_GET)
skills.route('/desired')
.get(findAll_desired_skill_GET)

skills.route('/employees/:level/:skill')
.get(findAll_employees_skill_level_GET)

skills.route('/employee/:id')
.get(numberValidation, findOne_skill_GET)
.put(numberValidation,update_skill_PUT)
