-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Blue_Canary
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Blue_Canary
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Blue_Canary` DEFAULT CHARACTER SET utf8 ;
USE `Blue_Canary` ;

-- -----------------------------------------------------
-- Table `Blue_Canary`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`User` (
  `USER_ID` INT NOT NULL AUTO_INCREMENT,
  `USER_NAME` VARCHAR(45) NOT NULL,
  `PROFILE_PICTURE` BLOB NULL,
  `PASSWORD` VARCHAR(45) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  `DATE_OF_BIRTH` DATE NOT NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE INDEX `userID_UNIQUE` (`USER_ID` ASC) VISIBLE,
  UNIQUE INDEX `USER_NAME_UNIQUE` (`USER_NAME` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`POST`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`POST` (
  `POST_ID` INT NOT NULL AUTO_INCREMENT,
  `POST_DATE_AND_TIME` DATETIME NOT NULL,
  `POST_DESC` VARCHAR(200) NULL,
  `POST_TEXT` TEXT NULL,
  `POST_IMAGE` BLOB NULL,
  `POST_VIDEO` BLOB NULL,
  `User_USER_ID` INT NOT NULL,
  PRIMARY KEY (`POST_ID`),
  UNIQUE INDEX `POST_ID_UNIQUE` (`POST_ID` ASC) VISIBLE,
  INDEX `fk_POST_User1_idx` (`User_USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_POST_User1`
    FOREIGN KEY (`User_USER_ID`)
    REFERENCES `Blue_Canary`.`User` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`LIKE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`LIKE` (
  `LIKE_ID` INT NOT NULL AUTO_INCREMENT,
  `LIKE` INT NULL,
  `POST_POST_ID` INT NOT NULL,
  PRIMARY KEY (`LIKE_ID`),
  UNIQUE INDEX `LIKE_ID_UNIQUE` (`LIKE_ID` ASC) VISIBLE,
  INDEX `fk_LIKE_POST1_idx` (`POST_POST_ID` ASC) VISIBLE,
  CONSTRAINT `fk_LIKE_POST1`
    FOREIGN KEY (`POST_POST_ID`)
    REFERENCES `Blue_Canary`.`POST` (`POST_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`DISLIKE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`DISLIKE` (
  `DISLIKE_ID` INT NOT NULL AUTO_INCREMENT,
  `DISLIKE` INT NULL,
  `POST_POST_ID` INT NOT NULL,
  PRIMARY KEY (`DISLIKE_ID`),
  UNIQUE INDEX `LIKE_ID_UNIQUE` (`DISLIKE_ID` ASC) VISIBLE,
  INDEX `fk_DISLIKE_POST1_idx` (`POST_POST_ID` ASC) VISIBLE,
  CONSTRAINT `fk_DISLIKE_POST1`
    FOREIGN KEY (`POST_POST_ID`)
    REFERENCES `Blue_Canary`.`POST` (`POST_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`COMMENT`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`COMMENT` (
  `COMMENT_ID` INT NOT NULL AUTO_INCREMENT,
  `COMMENT` TEXT(300) NULL,
  `POST_POST_ID` INT NOT NULL,
  PRIMARY KEY (`COMMENT_ID`),
  UNIQUE INDEX `LIKE_ID_UNIQUE` (`COMMENT_ID` ASC) VISIBLE,
  INDEX `fk_COMMENT_POST1_idx` (`POST_POST_ID` ASC) VISIBLE,
  CONSTRAINT `fk_COMMENT_POST1`
    FOREIGN KEY (`POST_POST_ID`)
    REFERENCES `Blue_Canary`.`POST` (`POST_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`RE_SHARE_POST`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`RE_SHARE_POST` (
  `RE_SHARE_POST` INT NOT NULL AUTO_INCREMENT,
  `RE_SHARE` INT NULL,
  `POST_POST_ID` INT NOT NULL,
  PRIMARY KEY (`RE_SHARE_POST`),
  UNIQUE INDEX `LIKE_ID_UNIQUE` (`RE_SHARE_POST` ASC) VISIBLE,
  INDEX `fk_RE_SHARE_POST_POST1_idx` (`POST_POST_ID` ASC) VISIBLE,
  CONSTRAINT `fk_RE_SHARE_POST_POST1`
    FOREIGN KEY (`POST_POST_ID`)
    REFERENCES `Blue_Canary`.`POST` (`POST_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`FOLLOW`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`FOLLOW` (
  `FOLLOW_ID` INT NOT NULL AUTO_INCREMENT,
  `FOLLOW_USER` INT NULL,
  `User_USER_ID` INT NOT NULL,
  PRIMARY KEY (`FOLLOW_ID`),
  UNIQUE INDEX `HUTCH_ID_UNIQUE` (`FOLLOW_ID` ASC) VISIBLE,
  INDEX `fk_FOLLOW_User1_idx` (`User_USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOLLOW_User1`
    FOREIGN KEY (`User_USER_ID`)
    REFERENCES `Blue_Canary`.`User` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`FOLLOW_BACK`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`FOLLOW_BACK` (
  `FOLLOW_BACK_ID` INT NOT NULL AUTO_INCREMENT,
  `FOLLOW_BACK_USER` INT NULL,
  `User_USER_ID` INT NOT NULL,
  PRIMARY KEY (`FOLLOW_BACK_ID`),
  UNIQUE INDEX `FOLLOW_BACK_ID_UNIQUE` (`FOLLOW_BACK_ID` ASC) VISIBLE,
  INDEX `fk_FOLLOW_BACK_User1_idx` (`User_USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_FOLLOW_BACK_User1`
    FOREIGN KEY (`User_USER_ID`)
    REFERENCES `Blue_Canary`.`User` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`CANARY_MODE`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`CANARY_MODE` (
  `CANARY_MODE_ID` INT NOT NULL AUTO_INCREMENT,
  `CANARY_MODE` BLOB NULL,
  `User_USER_ID` INT NOT NULL,
  PRIMARY KEY (`CANARY_MODE_ID`),
  UNIQUE INDEX `CANARY_MODE_ID_UNIQUE` (`CANARY_MODE_ID` ASC) VISIBLE,
  INDEX `fk_CANARY_MODE_User1_idx` (`User_USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_CANARY_MODE_User1`
    FOREIGN KEY (`User_USER_ID`)
    REFERENCES `Blue_Canary`.`User` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Blue_Canary`.`CANRY_HUTCH`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Blue_Canary`.`CANRY_HUTCH` (
  `CANRY_HUTCH_ID` INT NOT NULL AUTO_INCREMENT,
  `HOST_USERS` INT NULL,
  `GUEST_USERS` INT NULL,
  `User_USER_ID` INT NOT NULL,
  PRIMARY KEY (`CANRY_HUTCH_ID`),
  UNIQUE INDEX `CANRY_HUTCH_ID_UNIQUE` (`CANRY_HUTCH_ID` ASC) VISIBLE,
  INDEX `fk_CANRY_HUTCH_User1_idx` (`User_USER_ID` ASC) VISIBLE,
  CONSTRAINT `fk_CANRY_HUTCH_User1`
    FOREIGN KEY (`User_USER_ID`)
    REFERENCES `Blue_Canary`.`User` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
