import line from './line';
import login from './login';
import logout from './logout';
import currentLottery from './currentLottery';
import lotteryNumber from './lotteryNumber';

const Mock = require('mockjs');
const Random = Mock.Random;

// common
Mock.mock('/api/line', 'post', line);
Mock.mock('/api/login', 'post', login);
Mock.mock('/api/logout', 'post', logout);
Mock.mock('/api/currentLottery', 'post', currentLottery);

// lottery
Mock.mock('/api/lotteryNumber', 'post', lotteryNumber);