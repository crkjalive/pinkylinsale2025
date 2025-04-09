const connection = require("../connection");

const getDay = (req, res) => {
  res.render("searchDay");
};

const day = (req, res) => {

  const month = req.body.searchMonth

  const months = {
    enero: 1,
    febrero: 2,
    marzo: 3,
    abril: 4,
    mayo: 5,
    junio: 6,
    julio: 7,
    agosto: 8,
    septiembre: 9,
    octubre: 10,
    noviembre: 11,
    diciembre: 12,
  }

  let numberMonth = months[month]

  const sql = ` SELECT *, 
    sum((total_price) - (products.price * sales.quantity)) as utilidad, 
    sum(total_price) as total, 
    registered, 
    sum(sales.quantity) as prendas 
    FROM sales NATURAL JOIN products 
    WHERE ((registered >= '2025-${numberMonth}-01') AND (registered <= '2025-${numberMonth}-31' )) 
    GROUP BY registered ;
  `;

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
