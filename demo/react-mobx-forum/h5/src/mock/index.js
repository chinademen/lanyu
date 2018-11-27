import gg from './gg';
import forumListZone from './forumListZone';

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

Mock.mock('/api/gg', 'post', options => gg(options, getPostData)); // 内容区域所有广告图片
Mock.mock('/api/forumListZone', 'post', options => forumListZone(options, getPostData)); // 获取对应的贴吧分区列表