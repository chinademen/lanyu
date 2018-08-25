/*
Navicat MySQL Data Transfer

Source Server         : 本机
Source Server Version : 50640
Source Host           : localhost:3306
Source Database       : game

Target Server Type    : MYSQL
Target Server Version : 50640
File Encoding         : 65001

Date: 2018-08-24 21:19:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for memberinfo
-- ----------------------------
DROP TABLE IF EXISTS `memberinfo`;
CREATE TABLE `memberinfo` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `userAccount` varchar(20) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `registTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `level` varchar(20) NOT NULL,
  `balance` decimal(15,2) DEFAULT NULL,
  `userPassword` varchar(50) NOT NULL,
  `currentCompanyName` varchar(30) NOT NULL,
  `info1` int(11) DEFAULT NULL,
  `info2` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userAccount` (`userAccount`),
  UNIQUE KEY `userAccount_2` (`userAccount`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of memberinfo
-- ----------------------------
INSERT INTO `memberinfo` VALUES ('1', 'admin', '总管理员', '2018-08-18 22:22:33', '一级', '666888.00', '698d51a19d8a121ce581499d7b701668', '微软', '66', '99');
INSERT INTO `memberinfo` VALUES ('2', 'admin2', '总管理员2', '2018-08-18 22:23:08', '一级', '99999999.00', '698d51a19d8a121ce581499d7b701668', '微软', '5', '88');
INSERT INTO `memberinfo` VALUES ('3', 'zhangsan', '张三', '2018-08-19 12:09:32', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '微软', '55', '7');
INSERT INTO `memberinfo` VALUES ('4', 'lisi', '李四', '2018-08-19 12:10:17', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '微软', '5', '22');
INSERT INTO `memberinfo` VALUES ('5', 'wangwu', '王五', '2018-08-19 12:10:20', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某东', '7', '44');
INSERT INTO `memberinfo` VALUES ('6', 'ma1', '马总1', '2018-08-19 12:10:34', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某东', '66', '44');
INSERT INTO `memberinfo` VALUES ('7', 'ma2', '马总2', '2018-08-19 12:16:07', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某东', '2', '44');
INSERT INTO `memberinfo` VALUES ('8', 'ma3', '马总3', '2018-08-19 12:16:14', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某东', '44', '22');
INSERT INTO `memberinfo` VALUES ('9', 'ma4', '马总4', '2018-08-19 12:16:18', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某巴', '24', '77');
INSERT INTO `memberinfo` VALUES ('10', 'ma5', '马总5', '2018-08-19 12:16:19', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某巴', '89', '5');
INSERT INTO `memberinfo` VALUES ('11', 'ma6', '马总6', '2018-08-19 12:16:19', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某巴', '8', '78');
INSERT INTO `memberinfo` VALUES ('12', 'ma7', '马总7', '2018-08-19 12:16:19', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'oracle', '24', '8');
INSERT INTO `memberinfo` VALUES ('13', 'ma8', '马总8', '2018-08-19 12:16:19', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'oracle', '55', '7');
INSERT INTO `memberinfo` VALUES ('14', 'ma9', '马总9', '2018-08-19 12:16:19', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'oracle', '2', '5');
INSERT INTO `memberinfo` VALUES ('15', 'ma10', '马总10', '2018-08-19 12:16:20', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'oracle', '0', '1');
INSERT INTO `memberinfo` VALUES ('16', 'dog1', '狗东1', '2018-08-19 12:16:20', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某华', '0', '44');
INSERT INTO `memberinfo` VALUES ('17', 'dog2', '狗东2', '2018-08-19 12:16:20', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某华', '1', '44');
INSERT INTO `memberinfo` VALUES ('18', 'dog3', '狗东3', '2018-08-19 12:16:20', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某华', '14', '41');
INSERT INTO `memberinfo` VALUES ('19', 'dog4', '狗东4', '2018-08-19 12:16:21', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某华', '75', '5');
INSERT INTO `memberinfo` VALUES ('20', 'dog5', '狗东5', '2018-08-19 12:16:21', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'google', '66', '77');
INSERT INTO `memberinfo` VALUES ('21', 'dog6', '狗东6', '2018-08-19 12:16:21', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'google', '75', '32');
INSERT INTO `memberinfo` VALUES ('22', 'dog7', '狗东7', '2018-08-19 12:16:21', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'google', '18', '25');
INSERT INTO `memberinfo` VALUES ('23', 'dog8', '狗东8', '2018-08-19 12:16:22', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', 'google', '99', '77');
INSERT INTO `memberinfo` VALUES ('24', 'dog9', '狗东9', '2018-08-19 12:16:22', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某腾', '78', '55');
INSERT INTO `memberinfo` VALUES ('25', 'dog10', '狗东10', '2018-08-19 12:16:22', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某腾', '85', '76');
INSERT INTO `memberinfo` VALUES ('26', 'zhangsan2', '张三', '2018-08-19 12:16:23', '二级', '88888.00', '698d51a19d8a121ce581499d7b701668', '某腾', '15', '18');
INSERT INTO `memberinfo` VALUES ('29', 'adai', '阿呆', '2018-08-20 18:42:57', '二级', '0.00', '698d51a19d8a121ce581499d7b701668', '暂无公司', null, null);
INSERT INTO `memberinfo` VALUES ('30', 'mahuateng', '麻花藤', '2018-08-20 19:10:32', '二级', '0.00', '698d51a19d8a121ce581499d7b701668', '暂无公司', null, null);
INSERT INTO `memberinfo` VALUES ('31', 'mayun', '马芸', '2018-08-20 19:16:09', '二级', '0.00', '698d51a19d8a121ce581499d7b701668', '阿里妈妈', null, null);
INSERT INTO `memberinfo` VALUES ('32', 'jingdong', '刘东强', '2018-08-20 19:17:20', '二级', '0.00', '698d51a19d8a121ce581499d7b701668', '京西', null, null);
INSERT INTO `memberinfo` VALUES ('33', 'amao333', '猫爷', '2018-08-21 18:42:54', '二级', '0.00', '698d51a19d8a121ce581499d7b701668', '暂无公司', null, null);
