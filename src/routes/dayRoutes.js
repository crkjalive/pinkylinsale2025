const express = require('express')
const dayRouter = express.Router()

const dayController = require('../controller/dayController.js')

dayRouter.get('/', dayController.getDay)
dayRouter.post('/date', dayController.day)


module.exports = dayRouter