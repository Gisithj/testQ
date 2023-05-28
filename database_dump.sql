-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 28, 2023 at 09:10 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `nic` int(11) NOT NULL,
  `fName` varchar(45) NOT NULL,
  `lName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `adress` varchar(100) NOT NULL,
  `zipCode` int(11) NOT NULL,
  `telNo` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`nic`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`nic`, `fName`, `lName`, `email`, `adress`, `zipCode`, `telNo`, `username`, `password`) VALUES
(986598659, 'jgfddsyhbghdd', 'nhgtytfyi', 'kjkjggfbunvb@fjfyk.vom', '7058/k,hujhjuyfhj,htgyfygbhhg', 10250, '0752485587', 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

DROP TABLE IF EXISTS `business`;
CREATE TABLE IF NOT EXISTS `business` (
  `b_Id` int(11) NOT NULL AUTO_INCREMENT,
  `bName` varchar(45) NOT NULL,
  `bType` varchar(45) NOT NULL,
  `fName` varchar(45) NOT NULL,
  `lName` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `nicNo` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `zipCode` int(11) NOT NULL,
  `telNo` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`b_Id`),
  UNIQUE KEY `nicNo_UNIQUE` (`nicNo`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`b_Id`, `bName`, `bType`, `fName`, `lName`, `email`, `nicNo`, `address`, `zipCode`, `telNo`, `username`, `password`) VALUES
(7, 'rgfdfdsf', 'Retail', 'dgdfgg', 'hgfhfgh', '4655464@gmail.com', '45665', 'bfgbfg', 6757, '1212', 'hh', '$2b$10$pTaBbya9u7oMB7HdTjb4nObZ0qfo3WCKJDxGO17NxAeWZIz2zZrOS'),
(8, 'litro', 'wholesale', 'litro', 'gas', 'kadladn@afa.com', '556464', 'xfbhf', 64654, '42256465', 'litro', '$10$LN5w3eItJLsNWaQDFCN80.WXnJz65SY3ixQwxdqLMGgNerC2WAEDW'),
(9, 'sdsada', 'Retail', 'gg', 'gg', 'gg@gmail.com', '12', 'dsfsdfs', 23, '78', 'qq', '$2b$10$qc.EO05IPBZIVUe3nqvhBeRXTyh7XxitFLAxlp.KGROJhev33x1Hu'),
(10, 'fsdfsdfds', 'Retail', 'dsfsdf', 'dsfsdfd', 'erwer@gmail.com', '3242', 'rwerff', 2147483647, '45345345', 'aa', '$2b$10$bHvUPCkCokGh9hRwzaeZ2OKJyslvu3V82yPuf/A4TDjeHhT9kVIyW'),
(11, 'dfsdf', 'Gas', 'sdfsdf', 'dfgvdf', 'erwerrww@gmail.com', '231312', 'sdfsdf', 43, '5567675', 'zz', '$2b$10$exo/.//WgkjAw4I1Yft3heAGtGd9AjHqIVkUX.cEQV5ysOE2C9q9a');

-- --------------------------------------------------------

--
-- Table structure for table `business_userr`
--

DROP TABLE IF EXISTS `business_userr`;
CREATE TABLE IF NOT EXISTS `business_userr` (
  `b_id` int(11) NOT NULL,
  `userr_id` int(11) NOT NULL,
  PRIMARY KEY (`b_id`,`userr_id`),
  KEY `FK_BUSINESS_USERR_USERR` (`userr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `business_userr`
--

INSERT INTO `business_userr` (`b_id`, `userr_id`) VALUES
(8, 13);

-- --------------------------------------------------------

--
-- Table structure for table `queue`
--

DROP TABLE IF EXISTS `queue`;
CREATE TABLE IF NOT EXISTS `queue` (
  `q_Id` int(11) NOT NULL AUTO_INCREMENT,
  `qName` varchar(45) NOT NULL,
  `qType` varchar(45) NOT NULL,
  `maxToken` int(11) DEFAULT NULL,
  `tokenRemain` int(11) DEFAULT NULL,
  `qStatus` varchar(45) NOT NULL,
  `b_id` int(11) NOT NULL,
  `currentToken` int(11) NOT NULL,
  PRIMARY KEY (`q_Id`),
  KEY `FK_QUEUE_BUSINESS` (`b_id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `queue`
--

INSERT INTO `queue` (`q_Id`, `qName`, `qType`, `maxToken`, `tokenRemain`, `qStatus`, `b_id`, `currentToken`) VALUES
(1, '17gas', 'limit', 100, 98, 'going', 8, 2),
(2, '18gas', 'limit', 50, NULL, 'to', 8, 0),
(3, '19thel', 'limit', 500, NULL, 'anidda', 8, 0),
(4, '15ll', 'limit', 200, 0, 'stop', 9, 1),
(35, 'test', 'test', 0, NULL, 'test', 8, 0),
(36, 'test', 'test', 0, 0, 'test', 8, 1),
(37, 'test', 'test', 0, 0, 'test', 8, 1),
(38, 'test', 'test', 0, NULL, 'test', 8, 0),
(39, 'test', 'test', 0, NULL, 'test', 8, 0),
(40, 'sdefsd', 'Unlimited', NULL, NULL, 'distribution started', 10, 0),
(42, 'fsf', 'sff', 0, NULL, 'sfs', 8, 0),
(43, 'fsf', 'sff', 8, NULL, 'sfs', 8, 0),
(52, 'milk', 'Limited', 123, 120, 'distribution pending', 7, 6);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(10) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('wCq1o68ymZ1vpD5Cjyd0byWqAEkNf2sL', 1685349970, '{\"cookie\":{\"originalMaxAge\":86400000,\"expires\":\"2023-05-29T08:46:07.191Z\",\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":{\"id\":16,\"username\":\"cc\"}}}');

-- --------------------------------------------------------

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
CREATE TABLE IF NOT EXISTS `token` (
  `token_id` int(11) NOT NULL,
  `q_id` int(11) NOT NULL,
  `userr_id` int(11) NOT NULL,
  PRIMARY KEY (`q_id`,`userr_id`),
  KEY `q_id_idx` (`q_id`),
  KEY `FK_USER_ID_idx` (`userr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `token`
--

INSERT INTO `token` (`token_id`, `q_id`, `userr_id`) VALUES
(0, 1, 14),
(2, 1, 19),
(5, 1, 21),
(1, 1, 25),
(4, 2, 13),
(6, 2, 24),
(10, 2, 25),
(10, 3, 25),
(1, 4, 25),
(8, 35, 17),
(10, 35, 25),
(1, 36, 25),
(1, 37, 25),
(10, 40, 25),
(6, 52, 25);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_Id` int(11) NOT NULL AUTO_INCREMENT,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `nicNo` varchar(12) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `zipCode` varchar(12) NOT NULL,
  `telNo` varchar(10) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  PRIMARY KEY (`user_Id`),
  UNIQUE KEY `nicNo_UNIQUE` (`nicNo`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_Id`, `fName`, `lName`, `email`, `nicNo`, `address`, `zipCode`, `telNo`, `username`, `password`) VALUES
(13, 'Nipun', 'Jayasekara', 'nvjayasekara323@gmail.com', '993151456v', 'No.231/3, Honnanthara', '10300', '0752498852', 'Nipun jayasekara', '$2b$10$ZmUb/ntLjjjLdL7m5zQig.Olc7JuotNkGpVeyMIdyWX6nWdipf04q'),
(14, 'wda', 'sdasd', '1@gmail.com', '454354', '212', '0', '888', 'gg', 'yy'),
(15, 'mmmmmmmm', 'mmm', 'malinduperera2000@gmail.com', '453453', 'mmmm', '546456', '5464', 'mm', '$2b$10$vG9by6cH4OKtMZCxB3JjLOffRMQBCYahSPu.6zqdFzno6tknL2vny'),
(16, 'asdas', 'dasdasdsa', 'adsssddsa@dada.com', '34334', 'sdfdsfs', '565464', '345345', 'cc', '$2b$10$44lPzq/BmEshG35jBdQ2C.a.s/48YwUb.fUduKVG7YxWun1bv51lC'),
(17, 'rgr', 'grgrgrg', 'grgrg@gmail.com', '45454', 'ghgfhfgh', '656', '5654', 'kk', '$2b$10$UPmBedrV9arxaFLBR0W/CO57qtCLEMJ0e3kzPBFRX3BlRWMIka8CS'),
(18, 'rgrsdd', 'grgrgrgsdsd', 'gdsdsrgrg@gmail.com', '234324324', 'ghgfhfghuuyi', '6567886', '56547878', 'bb', '$2b$10$KdHyNWOF.mOam1XOv8/tHuyU9noCh/gMA8nx2dBAwJYtZv86WS6YG'),
(19, 'asdasd', 'dvsdvsd', 'tt@gmail.com', '32', 'gfdgdf', '98789', '564564', 'aa', '$2b$10$F1a6WeeCDsPC2ClgZmbKL.1xJgYz5u2OY3epv2eyckKl/H88/qGGO'),
(20, 'dvx', 'vxvxv', 'xcv@gfadf.com', 'rtert', 'gngng', '6756756', '4354353', 'ccc', '$2b$10$aqK0UGfF4P3DhqliOvfPj.lAiq0/nPyBBTjuO4mRYVE7WOw9hwMtS'),
(21, 'sdfsdf', 'fgfdgdfgh', 'dfsdf@gmail.com', '5646464', 'ghfghgfhf', '78768', '98978', 'vv', '$2b$10$8trZVqfPIORyWaTvCpBoieJJ61XvH7vRkDdmrJbOB9XW3gQ7SVGe6'),
(22, 'ddfsdfd', 'fsdfsdf', 'nn@dd.com', '65767', 'nn', '5555', '111', 'jj', 'kk'),
(23, 'Gisith', 'Boss', 'pakaya@gmail.com', '782436952315', 'No.231/3, Honnanthara', '10300', '0761853472', 'gisithboss', '$2b$10$D0F4EfcpLGzXpdEt23TcseVFETJvJWD3dMYS8iJcdo.LF9NrZIRNS'),
(24, 'Nipun', 'Jayasekara', '4464564@sfg.com', '456456', 'No.231/3, Honnanthara', '10400', '454154685', 'nn', 'nn'),
(25, 'vadadss', 'asdcasdcasd', 'wdwdad@gmail.com', '342341324124', 'bdgfgjj', '75675', '567575', 'qq', '$2b$10$5d2LeAUbuMu75tmmHcmPyuR/VIyPu0TGbHNXGhALAYZcI8XLll/E.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fName` varchar(50) NOT NULL,
  `lName` varchar(50) NOT NULL,
  `uAddress` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `indexNo` int(11) NOT NULL,
  `fArea` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `aYear` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fName`, `lName`, `uAddress`, `email`, `username`, `indexNo`, `fArea`, `gender`, `aYear`) VALUES
(4, 'Gisithj', 'Jay', 'piliyandala', 'gisithj@gmail.com', 'gj', 123, 'software', 'male', '2'),
(6, 'g', 'Jay', 'a', 'ccccc@gmail.com', 'gj', 456, 'software', 'male', '4');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `business_userr`
--
ALTER TABLE `business_userr`
  ADD CONSTRAINT `FK_BUSINESS_USERR_BUSINESS` FOREIGN KEY (`b_id`) REFERENCES `business` (`b_Id`),
  ADD CONSTRAINT `FK_BUSINESS_USERR_USERR` FOREIGN KEY (`userr_id`) REFERENCES `user` (`user_Id`);

--
-- Constraints for table `queue`
--
ALTER TABLE `queue`
  ADD CONSTRAINT `FK_QUEUE_BUSINESS` FOREIGN KEY (`b_id`) REFERENCES `business` (`b_Id`);

--
-- Constraints for table `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `FK_TOKEN_QUEUE` FOREIGN KEY (`q_id`) REFERENCES `queue` (`q_Id`),
  ADD CONSTRAINT `FK_TOKEN_USERR` FOREIGN KEY (`userr_id`) REFERENCES `user` (`user_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
