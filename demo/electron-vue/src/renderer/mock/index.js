import login from './login';

const Mock = require('mockjs');
const Random = Mock.Random;

Mock.mock('/api/login', 'post', login);