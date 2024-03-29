import express from 'express';
export const management = express.Router();
import  { numberValidation } from '../../controlers/helpers';
import { findAll_manager_GET, createNew_manager_POST, findOne_manager_GET, update_manager_PUT, delete_manager_DELETE, findReports_manager_GET } from '../../controlers/managementOperations';



management.route('/')
.get(findAll_manager_GET)
.post(createNew_manager_POST)

management.route('/:id')
.get(numberValidation, findOne_manager_GET)
.put(numberValidation,update_manager_PUT)
.delete(numberValidation,delete_manager_DELETE)

management.route('/:id/reports')
.get(numberValidation, findReports_manager_GET)


