const express = require('express')
const routerProductos = express.Router() 
const productsController = require('../controller/productsController.js')

// rutas de las vistas
routerProductos.get('/', productsController.getProducts)
routerProductos.get('/add', productsController.getProductsAdd)
routerProductos.get('/update/:id_product', productsController.getProductsUpdate)
routerProductos.get('/delete/:id_product', productsController.getProductsDelete)
routerProductos.get('/stock', productsController.getStock)
routerProductos.get('/searchStock', productsController.getSearchStock)

// registros post, put, delete
routerProductos.post('/add', productsController.productsAdd)
routerProductos.post('/update/:id_product', productsController.productsUpdate)
routerProductos.post('/delete/:id_product', productsController.productsDelete)
routerProductos.post('/searchStock', productsController.searchStock)
routerProductos.post('/addUpdate', productsController.addUpdate)


module.exports = routerProductos