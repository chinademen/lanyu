import cqssc from './ssc/cqssc';
import xjssc from './ssc/xjssc';

const Mock = require('mockjs');
const Random = Mock.Random;

// Mock.mock(url, post/get, 返回的数据)
Mock.mock('/api/cqssc', 'post', cqssc);
Mock.mock('/api/xjssc', 'post', xjssc);