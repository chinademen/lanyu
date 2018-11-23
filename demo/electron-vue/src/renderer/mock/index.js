import line from './line';
import login from './login';
import logout from './logout';
import lotteryList from './lotteryList';
import currentLottery from './currentLottery';
import getBalance from './getBalance';
import lotteryNumber from './lotteryNumber';

const Mock = require('mockjs');
const Random = Mock.Random;

// 用于处理post接收到的 options.body数据，将 'a=1&b=2&c=3' 格式的数据 转换成 { a: 1, b: 2, c: 3 } 格式
function getPostData(bodyData) {
    const data = bodyData.split('&');
    let params = {};
    data.forEach(item => {
        const arr = item.split('=');
        params[arr[0]] = arr[1];
    });
    return params;
}

// common
Mock.mock('/api/line', 'post',  options => line(options, getPostData)); // 线路检测
Mock.mock('/api/login', 'post', options => login(options, getPostData)); // 登录
Mock.mock('/api/logout', 'post', options => logout(options, getPostData)); // 登出
Mock.mock('/api/lotteryList', 'post', options => lotteryList(options, getPostData)); // 获取彩种列表
Mock.mock('/api/currentLottery', 'post', options => currentLottery(options, getPostData)); // 获取当前彩种信息
Mock.mock('/api/getBalance', 'post', options => getBalance(options, getPostData)); // 刷新余额

// lottery
Mock.mock('/api/lotteryNumber', 'post', options => lotteryNumber(options, getPostData)); // 获取历史号码