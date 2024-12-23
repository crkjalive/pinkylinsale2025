const express = require('express')
const serachSalesRoutes = express.Router()
const serachSalesController = require('../controller/serachSalesController.js')

serachSalesRoutes.get('/', serachSalesController.getSearchSales)
serachSalesRoutes.post('/results', serachSalesController.searchSales)

module.exports = serachSalesRoutes