const express = require('express')
const salesRouter = express.Router()
const salesController = require('../controller/salesController')

salesRouter.get('/', salesController.getSales)

salesRouter.get('/add', salesController.getSalesAdd)
salesRouter.get('/update/:id_sale', salesController.getSalesUpdate)
salesRouter.get('/delete/:id_sale', salesController.getSalesDelete)
salesRouter.get('/date', salesController.getSalesDate)
salesRouter.get('/separado', salesController.getSeparado)


salesRouter.post('/add', salesController.salesAdd)
salesRouter.post('/update/:id_sale', salesController.salesUpdate)
salesRouter.post('/delete/:id_sale', salesController.salesDelete)
salesRouter.post('/date', salesController.salesDate)
salesRouter.post('/dateResult', salesController.salesDate)

module.exports = salesRouter