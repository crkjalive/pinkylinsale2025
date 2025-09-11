-- Consulta Mensuales: totales, costo, utilidad, agrupado por mes

SELECT
  DATE_FORMAT(sales.registered, '%Y-%m') AS mes,
  SUM(sales.total_price) AS precio_venta_total,
  SUM(products.price * sales.quantity) AS costo_total,
  SUM((sales.unit_price - products.price) * sales.quantity) AS utilidad_total,
  SUM(sales.quantity) AS total_items_vendidos
FROM sales NATURAL JOIN products
GROUP BY
  mes
ORDER BY
  mes;

--   Consultas basicas AI

-- ventas por producto
SELECT id_product, SUM(quantity) AS cantidad_vendida, SUM(total_price) AS total_vendido
FROM sales
GROUP BY id_product;

-- Ventas por método de pago
SELECT payment_method, COUNT(*) AS cantidad_ventas, SUM(total_price) AS total_vendido
FROM sales
GROUP BY payment_method;

-- Ventas por día
SELECT registered, COUNT(*) AS cantidad_ventas, SUM(total_price) AS total_vendido
FROM sales
GROUP BY registered
ORDER BY registered DESC;

-- Ventas en un rango de fechas
SELECT *
FROM sales
WHERE registered BETWEEN '2025-07-01' AND '2025-07-31';

-- Producto más vendido (por cantidad)
SELECT id_product, SUM(quantity) AS total_vendido
FROM sales
GROUP BY id_product
ORDER BY total_vendido DESC
LIMIT 1;

-- Venta de mayor valor
SELECT *
FROM sales
ORDER BY total_price DESC
LIMIT 1;

-- Ingresos promedio por venta
SELECT AVG(total_price) AS ingreso_promedio
FROM sales;