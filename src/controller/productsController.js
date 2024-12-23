const connection = require("../connection")

const getProducts = (req, res) => {
  const sql = `SELECT id_product, invoice, reference, description, stock, FORMAT(round(price ,0) ,0) as price, FORMAT(round(stock * price, 0), 0) as total, created 
  FROM products ORDER BY reference`
  connection.query(sql, (err, result) => {
    if (err) { console.log("Error en la consulta: " + err) }
    else { res.render("products", { products: result }) }
  })
}

const getProductsAdd = (req, res) => {
  res.render("productsAdd")
}

const getProductsUpdate = (req, res) => {
  const sql = `SELECT * FROM products WHERE id_product=${req.params.id_product}`
  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al consultar: " + err) }
    else { res.render("productsUpdate", { data: result }) }
  })
}

const getProductsDelete = (req, res) => {
  const id = req.params.id_product
  const sql = "SELECT * FROM products WHERE id_product = ?"
  connection.query(sql, id, (err, result) => {
    if (err) { console.log("Error al consultar: " + err) }
    else { res.render("productsDelete", { data: result }) }
  })
}

const getSearchStock = (req, res) => {
  res.render('searchStock')
}

const getStock = (req, res) => {

  const sql = `SELECT products.id_product, products.reference, products.description,FORMAT(round(price / (1 - 30 / 100), 0),0) as venta, products.stock, products.stock - sum(sales.quantity) as stockActual, sum(sales.quantity) AS sales, category FROM products LEFT JOIN sales ON products.id_product = sales.id_product GROUP BY products.id_product ORDER BY products.reference ASC;
  `
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al consultar el Stock: ' + err)
    } else {
      // console.log(result)
      res.render('stock', { stock: result })
    }
  })
}

const productsAdd = (req, res) => {
  const iva = 1.19
  const invoice = req.body.invoice
  const reference = req.body.reference
  const description = req.body.description.toUpperCase()
  const price = req.body.price * iva
  const stock = req.body.stock
  const total = stock * price
  const created = req.body.created

  const sql = `INSERT INTO products (invoice, reference, description, price, stock, total, created)
  VALUES (${invoice}, ${reference}, '${description}', ${price}, ${stock}, ${total}, '${created}')`

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al agregar: " + err) }
    else { res.redirect("/products") }
  })
}

const productsUpdate = (req, res) => {
  const invoice = req.body.invoice
  const reference = req.body.reference
  const description = req.body.description.toUpperCase()
  const stock = parseInt(req.body.stock) + parseInt(req.body.addStock)
  const price = req.body.price
  const total = stock * price
  const created = req.body.created
  const addStock = req.body.addStock

  const sql = `UPDATE products 
  SET invoice=${invoice},
  reference=${reference},
  description='${description}', 
  stock=${stock},
  price=${price},
  total=${total},
  created='${created}'
  WHERE id_product=${req.body.id_product}
  `
  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error al actualizar: " + err)
      res.send('Error al actualizar' + err)
    }
    else { res.redirect("/products") }
  })
}

const productsDelete = (req, res) => {
  const id = req.params.id_product
  const sql = `DELETE FROM products WHERE id_product=${id}`
  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al eliminar: " + err) }
    else { res.redirect("/products") }
  })
}

const searchStock = (req, res) => {

  const sql = `SELECT * FROM products WHERE reference=${req.body.reference}`
  connection.query(sql, (err, result) => {
    if (err) {
      res.send('error en la consulta: ' + err)
    } else {
      if (result == '') {
        result = req.body.reference
        res.render('productsAdd', { data: result })
      } else {
        res.render('addProductStock', { data: result })
      }
    }
  })
}

const addUpdate = (req, res) => {
  const sql = `UPDATE products SET stock = ${req.body.stock}, total = ${req.body.price * req.body.stock}, created = '${req.body.created}' WHERE products.reference = ${req.body.reference}`

  connection.query(sql, (err, result) => {
    if (err) {
      console.log('error al actualizar: ' + err)
    } else {
      res.redirect('/products')
    }
  })
}

module.exports = {
  getProducts,
  getProductsAdd,
  getProductsUpdate,
  getProductsDelete,
  getStock,
  getSearchStock,
  productsAdd,
  productsUpdate,
  productsDelete,
  searchStock,
  addUpdate,
}
