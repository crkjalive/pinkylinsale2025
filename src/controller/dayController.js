const connection = require("../connection");

const getDay = (req, res) => {
  res.render("searchDay");
};

const day = (req, res) => {
  const start = req.body.date_start;
  const end = req.body.date_end || start;

  const rent = 1857000

  const sql = `SELECT *, 
  sum((total_price) - (products.price * sales.quantity)) as utilidad, 
  sum(total_price) as total, 
  registered, 
  sum(sales.quantity) as prendas
  FROM sales NATURAL JOIN products 
  WHERE ((registered >= '${start}') AND (registered <= '${end}')) 
  GROUP BY registered 
  ORDER BY registered ASC, id_sale + 0`;

  connection.query(sql, (err, result) => {
    if (err) {
      console.log("Error al consultar: " + err);
    } else {
      // res.send(result);
      res.render('day', { data: result })

      // res.render("salesDateResult", { salesDate: result });
    }
  });
};

module.exports = {
  getDay,
  day,
};
