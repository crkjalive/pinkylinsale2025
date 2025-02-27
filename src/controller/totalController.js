const connection = require("../connection");

const getTotal = (req, res) => {

  const sql = `SELECT 
  sum(sales.quantity) AS cantidad,
  sum(sales.quantity * sales.unit_price) AS total,
  sum(sales.quantity * products.price) AS costo,
  sum((sales.quantity * sales.unit_price) - (sales.quantity *products.price)) as utilidad,
  MONTHNAME(registered) AS mes 
  FROM sales NATURAL join products 
  GROUP BY mes ORDER BY registered`

  connection.query(sql, (err, result) => {
    if (err) { console.log('Error al buscar: ' + err) }
    else {
      if (result == "") {
        res.send('No ahí datos')
      } else {
        // console.log(result)
        // res.send(result)        
        res.render('total', { data: result })
      }
    }
  })
}

module.exports = {
  getTotal
}