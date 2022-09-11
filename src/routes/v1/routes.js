import express from 'express';
export const v1 = express()

v1.use('/employee', require('./employee'))
v1.use('/skills', require('./skills'))
v1.use('/management', require('./management'))
v1.use('/engagement', require('./engagement'))

module.exports = v1;