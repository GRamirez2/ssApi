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
const options = {
  definition:{
    openapi: '3.0.0',
    info: {
      title: 'API Skills & Engagements for SingleStone Consulting',
      version: '1.0.0'
    },
    servers: [
      {
          url: 'http://localhost:1972/'
      }
    ]
  },
  apis: ['./routes/v1/employee.js', './routes/v1/engagement.js', './routes/v1/management.js', './routes/v1/skills.js']
}

const swaggerSpec = swaggerJSDoc(options);
app.use('/ssc/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


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

//root Router
app.get('/', (req, res) => {
    res.send({message: 'hello, this is a get test at the root, no /ssc/api/v1 needed'})
})

app.post('/', (req, res) => {
    console.log('req:', req.body)
    // make sure the raw post body is json in postman, or just use insomnia
    res.send({data: req.body})
})

// PORT
const PORT = process.env.PORT || 1972;

// Start app
export const start = () => {
  app.listen( PORT, console.log('Server is on 1972'))
}