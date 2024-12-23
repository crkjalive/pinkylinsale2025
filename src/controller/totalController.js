const connection = require("../connection");

const getTotal = (req, res) => {

  let nequi = 0;
  let daviplata = 0;
  let bold = 0;
  let efectivo = 0;

  const sql = `SELECT *, 
  sum(quantity) AS cantidad, 
  sum(total_price) AS total, 
  sum((total_price) - (products.price * sales.quantity)) as utilidad,
  sum(quantity * price) as costo,
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