-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-01-2025 a las 23:03:02
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `stocky2025`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `invoice` int(11) DEFAULT NULL,
  `reference` varchar(11) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `size32` char(8) DEFAULT NULL,
  `size34` char(8) DEFAULT NULL,
  `size36` char(8) DEFAULT NULL,
  `size38` char(8) DEFAULT NULL,
  `size` varchar(20) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `brand` varchar(60) DEFAULT NULL,
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE `products` (
    `id_product` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `invoice` INT UNSIGNED DEFAULT NULL,
    `reference` VARCHAR(50) NOT NULL,
    `description` TEXT DEFAULT NULL,
    `size32` TINYINT UNSIGNED DEFAULT NULL,
    `size34` TINYINT UNSIGNED DEFAULT NULL,
    `size36` TINYINT UNSIGNED DEFAULT NULL,
    `size38` TINYINT UNSIGNED DEFAULT NULL,
    `size` VARCHAR(20) DEFAULT NULL,
    `stock` INT UNSIGNED NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `total` DECIMAL(10, 2) NOT NULL,
    `category` VARCHAR(50) DEFAULT NULL,
    `brand` VARCHAR(60) DEFAULT NULL,
    `created` DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id_product`, `invoice`, `reference`, `description`, `size32`, `size34`, `size36`, `size38`, `size`, `stock`, `price`, `total`, `category`, `brand`, `created`) VALUES
(1, 1012025, '8880', 'WE DONT OPEN ', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2025-01-01'),
(2, 1012025, '8881', 'WE WENT TO THE HOUSE', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2025-01-01'),
(3, 1012025, '8882', 'CLOSES DIAN STOPWORK', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2025-01-01'),
(4, 1012025, '8888', 'NOT SOLD', NULL, NULL, NULL, NULL, NULL, 0, 0, 0, NULL, NULL, '2025-01-01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id_sale` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `payment_method` varchar(20) NOT NULL,
  `registered` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


CREATE TABLE `sales` (
    `id_sale` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `id_product` INT UNSIGNED NOT NULL,
    `quantity` INT UNSIGNED NOT NULL,
    `unit_price` DECIMAL(10, 2) NOT NULL,
    `total_price` DECIMAL(10, 2) NOT NULL,
    `payment_method` VARCHAR(20) NOT NULL,
    `registered` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`id_product`) REFERENCES `products`(`id_product`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id_sale`, `id_product`, `quantity`, `unit_price`, `total_price`, `payment_method`, `registered`) VALUES
(1, 1, 0, 0.00, 0.00, 'EFECTIVO', '2025-01-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id_sale`),
  ADD KEY `fk_sale_product` (`id_product`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id_sale` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `fk_sale_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
