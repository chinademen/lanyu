/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2018-08-20 20:29:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `resourceId` smallint(6) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `resourceName` varchar(10) NOT NULL,
  `resourceUrl` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`resourceId`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '0', '首页', '/');
INSERT INTO `menu` VALUES ('2', '0', '会员管理', null);
INSERT INTO `menu` VALUES ('3', '0', '产品管理', null);
INSERT INTO `menu` VALUES ('4', '0', '价格管理', null);
INSERT INTO `menu` VALUES ('5', '0', '常用组件', null);
INSERT INTO `menu` VALUES ('21', '2', '会员信息列表', '/views/member/info');
INSERT INTO `menu` VALUES ('22', '2', '会员操作详情', '/views/member/work');
INSERT INTO `menu` VALUES ('31', '3', '医药', '/views/product/medical');
INSERT INTO `menu` VALUES ('32', '3', '图书', '/views/product/book');
INSERT INTO `menu` VALUES ('33', '3', '体育', '/views/product/sport');
INSERT INTO `menu` VALUES ('41', '4', '价格列表', '/views/price/list');
INSERT INTO `menu` VALUES ('42', '4', '价格设置', '/views/price/set');
