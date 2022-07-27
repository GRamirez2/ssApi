import express from 'express';
const management = express.Router()

// These can out to a controler. 
const management_GET =  function (req, res) {
  res.send({'data': 'GET => api/v1/managment'})
}

const management_POST =  function (req, res) {
  res.send({'data': 'POST => api/v1/management'})
}

management.route('/')
.get(management_GET)
.post(management_POST)

module.exports = management;

