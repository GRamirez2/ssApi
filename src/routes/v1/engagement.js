import express from 'express';
const engagement = express.Router();
const { numberValidation } = require('../../controlers/helpers');
const { findAll_engagements_GET, createNew_engagements_POST, findOne_engagement_GET, update_engagement_PUT, delete_engagement_DELETE, findemployees_engagement_GET } = require('../../controlers/engagementOperations');



engagement.route('/')
.get( findAll_engagements_GET )
.post( createNew_engagements_POST )

engagement.route('/:id')
.get(numberValidation, findOne_engagement_GET)
.put(numberValidation,update_engagement_PUT)
.delete(numberValidation,delete_engagement_DELETE)

engagement.route('/:id/employees')
.get(numberValidation, findemployees_engagement_GET)

module.exports = engagement;