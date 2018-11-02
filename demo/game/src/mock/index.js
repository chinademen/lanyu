// ssc
import cqssc from './ssc/cqssc';
import xjssc from './ssc/xjssc';
import txssc from './ssc/txssc';
import hljssc from './ssc/hljssc';
import hg2mssc from './ssc/hg2mssc';
import flb5mssc from './ssc/flb5mssc';
// 11x5
import ah11x5 from './ssc/ah11x5';
import gd11x5 from './ssc/gd11x5';
import js11x5 from './ssc/js11x5';
import sd11x5 from './ssc/sd11x5';
import sh11x5 from './ssc/sh11x5';
import sx11x5 from './ssc/sx11x5';
// k3
import ahk3 from './ssc/ahk3';
import gsk3 from './ssc/gsk3';
import hbk3 from './ssc/hbk3';
import hnk3 from './ssc/hnk3';
import jsk3 from './ssc/jsk3';
// 6hc
import xg6hc from './ssc/xg6hc';
// pk10
import bjpk10 from './ssc/bjpk10';
// other
import fc3d from './ssc/fc3d';
import shssl from './ssc/shssl';
import tcp3p5 from './ssc/tcp3p5';

const Mock = require('mockjs');
const Random = Mock.Random;

// Mock.mock(url, post/get, 返回的数据)
// ssc
Mock.mock('/api/cqssc', 'post', cqssc);
Mock.mock('/api/xjssc', 'post', xjssc);
Mock.mock('/api/txssc', 'post', txssc);
Mock.mock('/api/hljssc', 'post', hljssc);
Mock.mock('/api/hg2mssc', 'post', hg2mssc);
Mock.mock('/api/flb5mssc', 'post', flb5mssc);

// 11x5
Mock.mock('/api/ah11x5', 'post', ah11x5);
Mock.mock('/api/gd11x5', 'post', gd11x5);
Mock.mock('/api/js11x5', 'post', js11x5);
Mock.mock('/api/sd11x5', 'post', sd11x5);
Mock.mock('/api/sh11x5', 'post', sh11x5);
Mock.mock('/api/sx11x5', 'post', sx11x5);

// k3
Mock.mock('/api/ahk3', 'post', ahk3);
Mock.mock('/api/gsk3', 'post', gsk3);
Mock.mock('/api/hbk3', 'post', hbk3);
Mock.mock('/api/hnk3', 'post', hnk3);
Mock.mock('/api/jsk3', 'post', jsk3);

// 6hc
Mock.mock('/api/xg6hc', 'post', xg6hc);

// pk10
Mock.mock('/api/bjpk10', 'post', bjpk10);

// other
Mock.mock('/api/fc3d', 'post', fc3d);
Mock.mock('/api/shssl', 'post', shssl);
Mock.mock('/api/tcp3p5', 'post', tcp3p5);