const express = require('express')
const totalRoutes = express.Router()
const totalController = require('../controller/totalController')

totalRoutes.get('/', totalController.getTotal)

module.exports = totalRoutes