/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2018-08-24 21:20:06
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
  `iconUrl` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`resourceId`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('1', '0', '首页', '/', 'global');
INSERT INTO `menu` VALUES ('2', '0', '会员管理', null, 'team');
INSERT INTO `menu` VALUES ('3', '0', '网站管理', null, 'tool');
INSERT INTO `menu` VALUES ('4', '0', '游戏管理', null, 'dribbble-square');
INSERT INTO `menu` VALUES ('21', '2', '会员信息列表', '/views/member/info', null);
INSERT INTO `menu` VALUES ('31', '3', '网站设置', '/views/web/set', null);
INSERT INTO `menu` VALUES ('41', '4', '飞机大战', '/views/game/plane', null);
