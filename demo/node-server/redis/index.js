var co = require('co');
var redis = require('redis');
var wrapper = require('co-redis');
var log = Log('models.redis');

// redis配置参数
var redis_config = {
    "host": "127.0.0.1",
    "port": 6379
};
var redisClient = redis.createClient(redis_config);
