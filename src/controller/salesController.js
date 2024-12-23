const connection = require("../connection");

/* Métodos GET 
me trae la solicitud por get, para renderizar la vista a mostrar */

const getSales = (req, res) => {

  const sql = `SELECT id_product, id_sale, quantity, unit_price, total_price, payment_method, 
  registered, invoice, reference, description, stock, price, total, created
  FROM sales NATURAL JOIN products 
  ORDER BY registered DESC, id_sale DESC, reference ASC;`

  /* limit 400, pero no me muestra completo renta anual */

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error en la consulta: " + err); }
    else { res.render("sales", { sales: result }); }
  });
};

const getSalesAdd = (req, res) => res.render("salesAdd");

const getSalesUpdate = (req, res) => {

  const sql = `SELECT * FROM sales NATURAL JOIN products 
  WHERE id_sale = ${req.params.id_sale}`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al consultar: " + err); }
    else { res.render("salesUpdate", { data: result }); }
  });
};

const getSalesDelete = (req, res) => {

  const sql = `SELECT * FROM sales WHERE id_sale=${req.params.id_sale}`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al consultar: " + err); }
    else { res.render("salesDelete", { data: result }); }
  });
};

const getSalesDate = (req, res) => {
  res.render("salesDate");
};

const getSeparado = (req, res) => {

  const sql = `SELECT * FROM sales NATURAL JOIN products 
  WHERE payment_method ='separado'`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("error al consultar separado: " + err); }
    else { res.render("salesSeparado", { data: result }); }
  });
};

/* Métodos POST
son las funciones que hacen la consulta SQL y general un resultado de la operación,
que usamos para mostrar los datos en las vistas */

const salesAdd = (req, res) => {
  const id_product = req.body.id_product;
  const quantity = req.body.quantity;
  let unit_price = req.body.unit_price;
  let total_price = 0;
  let payment_method = req.body.payment_method.toUpperCase();

  if (payment_method == 'BOLD') {
    unit_price = Math.round(unit_price - (((unit_price * 3.104) / 100) + 300))
    total_price = unit_price * quantity;
  }
  else {
    total_price = unit_price * quantity;
  }

  const registered = req.body.registered;

  const sql = `INSERT INTO sales (id_product, quantity, unit_price, total_price, payment_method, registered) 
  VALUES (${id_product}, ${quantity}, ${unit_price}, ${total_price},'${payment_method}','${registered}')`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("ERROR AL INSERTAR: " + err); }
    else { res.redirect("/sales"); }
  });
};

const salesUpdate = (req, res) => {
  const id_sale = req.params.id_sale;
  const quantity = req.body.quantity;
  const registered = req.body.created;
  let unit_price = req.body.unit_price;
  let payment_method = req.body.payment_method.toUpperCase();
  let total_price = unit_price * quantity;

  if (payment_method == 'BOLD') {
    unit_price = Math.round(unit_price - (unit_price * 3.404) / 100)
    total_price = unit_price * quantity;
  }

  const sql = `UPDATE sales SET quantity=${quantity}, unit_price=${unit_price}, payment_method='${payment_method}', registered='${registered}', total_price=${total_price} 
  WHERE id_sale='${id_sale}'`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al actualizar: " + err); }
    else { res.redirect("/sales"); }
  });
};

const salesDelete = (req, res) => {

  const sql = `DELETE FROM sales WHERE id_sale='${req.params.id_sale}'`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al eliminar: " + err); }
    else { res.redirect("/sales"); }
  });
};

const salesDate = (req, res) => {
  const start = req.body.date_start;
  const end = req.body.date_end || start;

  const sql = `SELECT *,
  id_sale, quantity, unit_price, total_price, registered, payment_method,
  id_product, reference, description, stock, price, created,

  count(*) as conteo,
  sum(quantity) as cantidad_total,
  sum(total_price) as venta_total,unit_price,
  sum(quantity * price) as costo_total,
  (sum(total_price) - sum(quantity * price)) as utilidad_total
  
  FROM sales NATURAL JOIN products
  WHERE ((registered >= '${start}') AND (registered <= '${end}')) AND payment_method != 'SEPARADO' 
  GROUP BY reference 
  ORDER BY reference + 0, id_sale + 0, registered DESC`;

  connection.query(sql, (err, result) => {
    if (err) { console.log("Error al consultar: " + err); }

    else {
      // res.send(result);
      // console.log(result)
      res.render("salesDateResult", { salesDate: result });
    }
  });
};

module.exports = {
  getSales,
  getSalesAdd,
  getSalesUpdate,
  getSalesDelete,
  getSalesDate,
  getSeparado,
  salesAdd,
  salesUpdate,
  salesDelete,
  salesDate,
};
