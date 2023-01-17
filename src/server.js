import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { db } from './utils/dbConnect';
import { v1 } from './routes/v1/routes'

export const app = express()

const swaggerJSDoc = require ('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const host = `http://${process.env.IP}:${process.env.PORT}`;

const options = {
  definition:{
    info: {
      title: 'SingleStone Consulting: Employee Information + Management/Team + Skills + Engagements',
      version: '1.0.0',
      description: 'REST API for employees, their managers, teams, skills and engagements. \n\n API created and maintained by gramirez@singlestoneconsulting.com \n\n DOB: Oct 2022'
    },
    openapi: '3.0.0',
    servers: [
      {
          url: 'http://localhost:1972/ssc/api/v1/'
      }
    ]
  },
  apis: ['./src/routes/v1/*']
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/ssc/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.disable('x-powered-by')

// db test
db.authenticate()
  .then( () => console.log('db connected!') )
  .catch( (err) => console.log('db connection Error' + err) )


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


app.use('/ssc/api/v1', v1)

// PORT
const PORT = process.env.PORT || 1972;

// Start app
export const start = () => {
  app.listen( PORT, console.log('Server is on 1972'))
}