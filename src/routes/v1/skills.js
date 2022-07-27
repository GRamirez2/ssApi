import express from 'express';
const skills = express.Router()


skills.route('/')
.get((req, res) => {
  res.send({'data': 'api/v1/ GET skills'})
})
.post((req, res) => {
  res.send({'data': 'api/v1/ POST skills'})
})

module.exports = skills;