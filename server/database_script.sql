-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users` ;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_seller` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

DROP TABLE IF EXISTS `product` ;

CREATE TABLE IF NOT EXISTS `product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `title` MEDIUMTEXT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `description` MEDIUMTEXT NULL,
  `image` MEDIUMTEXT NULL,
  `sale_price` FLOAT NOT NULL,
  `actual_price` FLOAT NOT NULL,
  `seller_id` INT NOT NULL,
  PRIMARY KEY (`product_id`),
  FOREIGN KEY (`seller_id`) REFRENCES users(`user_id`)
  );


-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` MEDIUMTEXT DEFAULT NULL,
  `mobile` MEDIUMTEXT DEFAULT NULL,
  `street` MEDIUMTEXT DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) 
);


-- -----------------------------------------------------
-- Table `orders`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `orders` ;

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `address_id` int(11) DEFAULT NULL,
  `delivery_status` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
);


-- -----------------------------------------------------
-- Table `order_detail`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `order_detail` ;

CREATE TABLE IF NOT EXISTS `order_detail` (
  `order_detail_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL,
  `order_id` INT NULL,
  `quantity` INT NULL,
  `selling_price` FLOAT NULL,
  PRIMARY KEY (`order_detail_id`));

-- -----------------------------------------------------
-- Table `cart`
-- -----------------------------------------------------
CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);




-- -----------------------------------------------------
-- Table `cart_product_lists`
-- -----------------------------------------------------
CREATE TABLE `cart_product_lists` (
  `cart_product_id` int(11) NOT NULL AUTO_INCREMENT,
  `cart_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`cart_product_id`),
  KEY `cart_id_idx` (`cart_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `cart_id` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
);


-- -----------------------------------------------------
-- Table `payments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `payments` ;

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `card_number` int(11) DEFAULT NULL,
  `payment_date` datetime DEFAULT NULL,
  `payment_amount` float DEFAULT NULL,
  PRIMARY KEY (`payment_id`),
  KEY `order_id` (`order_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `payments_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
);


-- -----------------------------------------------------
-- Table `product_review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `product_review` ;

CREATE TABLE IF NOT EXISTS `product_review` (
  `product_review_id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `rating` INT NOT NULL,
  `comment` VARCHAR(45) NOT NULL,
  `number_of_likes` INT DEFAULT 0,
  `number_of_dislikes` INT DEFAULT 0,
  PRIMARY KEY (`product_review_id`));


-- -----------------------------------------------------
-- Table `complaint`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `complaint` ;

CREATE TABLE IF NOT EXISTS `complaint` (
  `complaint_id` INT NOT NULL,
  `email_id` VARCHAR(45) NULL,
  `message` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`complaint_id`));


-- -----------------------------------------------------
-- Table `FAQ`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `FAQ` ;

CREATE TABLE IF NOT EXISTS `FAQ` (
  `faq_id` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`faq_id`));

-- -----------------------------------------------------
-- Table `user_address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_address` ;

CREATE TABLE `user_address`(
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT NOT NULL REFERENCES user(`user_id`),
  `address_id` INT NOT NULL REFERENCES address(`address_id`)
);
