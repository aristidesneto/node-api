CREATE TABLE `node_api`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `node_api`.`messages` (`data`) VALUES ('Hello World');
