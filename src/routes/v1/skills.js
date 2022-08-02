import express from 'express';
const skills = express.Router()
const { numberValidation } = require('../../controlers/helpers');
const {findAll_skill_GET, findOne_skill_GET, update_skill_PUT, findAll_primary_skill_GET, findAll_secondary_skill_GET, findAll_desired_skill_GET, findAll_employees_primary_skill_GET, findAll_employees_secondary_skill_GET, findAll_employees_desired_skill_GET } = require('../../controlers/skillOperations');


skills.route('/')
.get(findAll_skill_GET)

skills.route('/primary')
.get(findAll_primary_skill_GET)
skills.route('/secondary')
.get(findAll_secondary_skill_GET)
skills.route('/desired')
.get(findAll_desired_skill_GET)


skills.route('/primary/employees/:skill')
.get(findAll_employees_primary_skill_GET)
skills.route('/secondary/employees/:skill')
.get(findAll_employees_secondary_skill_GET)
skills.route('/desired/employees/:skill')
.get(findAll_employees_desired_skill_GET)


skills.route('/employee/:id')
.get(numberValidation, findOne_skill_GET)
.put(numberValidation,update_skill_PUT)


module.exports = skills;