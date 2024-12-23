const express = require('express')
const mounthRouter = express.Router()

const mounthController = require('../controller/mounthController.js')

mounthRouter.get('/', mounthController.getMounth)

module.exports = mounthRouter
