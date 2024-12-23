const connection = require("../connection");


const getSearchSales = (req, res) => {
  res.render('searchSales')
}

const searchSales = (req, res) => {

  const referenceSearch = req.body.reference

  const sql = `SELECT * FROM sales NATURAL JOIN products WHERE like = ${referenceSearch} ORDER BY registered DESC`
  
  connection.query(sql, (err, result) => {
    if (err) {console.log('Error al buscar: ' + err)}
    else {
      if (result == "") {
        res.send('No ahí datos')
      } else {
        // console.log(result)
        // res.send(result)
        res.render('searchSalesResults', {data: result})
      }
    }
  })
}


module.exports = {
  getSearchSales,
  searchSales,
}