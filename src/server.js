import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const v1 = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/ssc/api/v1', v1)

//root Router
app.get('/', (req, res) => {
    res.send({message: 'hello, this is a test'})
})

app.post("/ ", (req, res) => {
    console.log('body:', req)
    res.send({message: 'req received'})
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
  app.listen( 5000, () => {
    console.log('Server is on 5000')
  })
}