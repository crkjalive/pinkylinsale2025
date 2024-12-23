const connection = require("../connection");

const getSearch = (req, res) => {
  res.render('search')
}

const search = (req, res) => {
  const sql = `SELECT * FROM products WHERE reference=${req.body.reference} GROUP BY reference`
  connection.query(sql, (err, result) => {
    if (err) {
      console.log('Error al buscar: ' + err)
    }
    else {
      if (result == "") {
        res.render('search')
      } else {
        res.render('searchData', {data: result})
      }
    }    
  })
}

module.exports = {
  getSearch,
  search,
}