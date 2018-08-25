/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2018-08-24 21:19:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `companyLogo` varchar(255) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `companyId` smallint(5) unsigned NOT NULL AUTO_INCREMENT COMMENT '公司ID',
  PRIMARY KEY (`companyId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w2.jpg', '微软', '1');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w2.jpg', '某东', '2');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w2.jpg', '某巴', '3');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w.jpg', 'oracle', '4');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/wow.jpg', '某华', '5');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w.jpg', 'google', '6');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w3.jpg', '某腾', '7');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w3.jpg', '阿里妈妈', '8');
INSERT INTO `company` VALUES ('http://192.168.28.9:9000/images/w3.jpg', '京西', '9');
