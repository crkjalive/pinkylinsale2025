const express = require('express')
const searchRouter = express.Router()
const searchController = require('../controller/searchController.js')

searchRouter.get('/', searchController.getSearch)
searchRouter.post('/add', searchController.search)

module.exports = searchRouter
