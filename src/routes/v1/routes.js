import express from 'express';
export const v1 = express();
import { employee } from './employee'
import { skills } from './skills'
import { management } from './management'
import { engagement } from './engagement'


v1.use('/employee', employee)
v1.use('/skills', skills)
v1.use('/management', management)
v1.use('/engagement', engagement)
