const sql = `
   SELECT 
    payment_method, 
    SUM(quantity) AS total_quantity, 
    SUM(total_price) AS total_sales,
    SUM(CASE WHEN payment_method LIKE '%THERE' THEN total_price ELSE 0 END) AS THERE, -- Condición aplicada correctamente
    COUNT(id_sale) AS number_of_sales
FROM 
    sales 
NATURAL JOIN 
    products 
GROUP BY 
    payment_method
ORDER BY 
    total_sales DESC;
`;




const sql = `SELECT id_product, id_sale, quantity, unit_price, total_price, payment_method, 
    registered, invoice, reference, description, stock, price, total, created
    FROM sales NATURAL JOIN products 
    ORDER BY registered DESC, id_sale DESC, reference ASC;`



const sql = `
    SELECT 
        payment_method,
        -- Total de ventas por método de pago
        FORMAT(SUM(total_price), 0, 'de_DE') AS total_sales,
        
        -- Total de "there"
        FORMAT(SUM(CASE 
            WHEN payment_method LIKE '%there%' THEN total_price 
            ELSE 0 
        END), 0, 'de_DE') AS total_there,
        
        -- Total de "nequi" + "there"
        FORMAT(SUM(CASE 
            WHEN payment_method LIKE '%nequi%' AND payment_method LIKE '%there%' THEN total_price 
            ELSE 0 
        END), 0, 'de_DE') AS total_nequi_there,
        
        -- Total de "daviplata" + "there"
        FORMAT(SUM(CASE 
            WHEN payment_method LIKE '%daviplata%' AND payment_method LIKE '%there%' THEN total_price 
            ELSE 0 
        END), 0, 'de_DE') AS total_daviplata_there,
        
        -- Suma de "daviplatathere" + "nequithere"
        FORMAT(SUM(CASE 
            WHEN (payment_method LIKE '%daviplata%' AND payment_method LIKE '%there%') 
                 OR (payment_method LIKE '%nequi%' AND payment_method LIKE '%there%') THEN total_price 
            ELSE 0 
        END), 0, 'de_DE') AS total_daviplata_nequi_there,
        
        -- Suma de "nequikhriz" + "daviplatakhriz" + "bold"
        FORMAT(SUM(CASE 
            WHEN (payment_method LIKE '%nequi%' AND payment_method LIKE '%khriz%') 
                 OR (payment_method LIKE '%daviplata%' AND payment_method LIKE '%khriz%') 
                 OR payment_method LIKE '%bold%' THEN total_price 
            ELSE 0 
        END), 0, 'de_DE') AS total_nequi_daviplata_khriz_bold,
        
        -- Suma de todos los ítems menos lo separado
        FORMAT(SUM(total_price) - 
               SUM(CASE 
                   WHEN (payment_method LIKE '%daviplata%' AND payment_method LIKE '%there%') 
                        OR (payment_method LIKE '%nequi%' AND payment_method LIKE '%there%') THEN total_price 
                   ELSE 0 
               END) - 
               SUM(CASE 
                   WHEN (payment_method LIKE '%nequi%' AND payment_method LIKE '%khriz%') 
                        OR (payment_method LIKE '%daviplata%' AND payment_method LIKE '%khriz%') 
                        OR payment_method LIKE '%bold%' THEN total_price 
                   ELSE 0 
               END), 0, 'de_DE') AS total_otros,
        
        -- Total general
        FORMAT(SUM(total_price), 0, 'de_DE') AS total_general
    FROM 
        sales 
    NATURAL JOIN 
        products 
    GROUP BY 
        payment_method
    ORDER BY 
        total_sales DESC;
  `;