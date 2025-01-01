# Levantar xampp en ubuntu
sudo /opt/lampp/lampp start  

# Levantar node 
npm run server  


CREATE TABLE `sales` (
  `id_sale` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `payment_method` varchar(20) NOT NULL,
  `registered` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `invoice` int(11) DEFAULT NULL,
  `reference` int(11) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `brand` varchar(60) DEFAULT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

# Las opciones que me brinda you

CREATE TABLE `product_variants` (
  `id_variant` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) NOT NULL,
  `size` varchar(10) NOT NULL,
  `color` varchar(30) NOT NULL,
  PRIMARY KEY (`id_variant`),
  FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

