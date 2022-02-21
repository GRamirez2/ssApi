import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

import { sequelize } from './utils/dbConnect';
import { Employee } from  './models/employee';
import { Skills } from  './models/skills';


export const app = express()

const v1 = express.Router()

app.disable('x-powered-by')

//hook into db
(async () => {
  Employee.hasMany(Skills);
  await sequelize
  .sync()
  .then((result) => {
    console.log('sync result:',result)
  })
  .catch((err) => {
    console.err('err caught:', err);
  })

})();

// Employee.hasMany(Skills);
// sequelize
//   .sync()
//   .then((result) => {
//     console.log('sync result:',result)
//   })
//   .catch((err) => {
//     console.err(err);
//   })


app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/ssc/api/v1', v1)

//root Router
app.get('/', (req, res) => {
    res.send({message: 'hello, this is a get test'})
})

app.post('/', (req, res) => {
    console.log('req:', req.body)
    // make sure the raw post body is json in postman, or just use insomnia
    res.send({reqest: req.body})
})

//v1 Router
// v1.get('/', (req, res)=>{
//     res.send({'message': '/api/v1'})
// })
// V1 using route - move this to separate dir

v1.route('/employee')
  .get((req, res) => {
    res.send({'data': 'api/v1/ GET employee'})
  })
  .post((req, res) => {
    res.send({'data': 'api/v1/ POST employee'})
  })

v1.route('/employee/:id')
  .get((req, res) => {
    console.log('req.params', req.params)
    res.send({'data': 'api/v1/ GET employee with id ' + req.params.id})
  })
  .put((req, res) => {
    res.send({'data': 'api/v1/ PUT employee with id ' + req.params.id})
  })
  .delete((req, res) => {
    res.send({'data': 'api/v1/ DELETE employee with id ' + req.params.id})
  })

// Start app
export const start = () => {
  app.listen( 1972, () => {
    console.log('Server is on 1972')
  })
}