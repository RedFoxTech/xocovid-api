const bluebird = require('bluebird')
const redis = require('redis')
const { REDIS_URL } = require('./config')

bluebird.promisifyAll(redis.RedisClient.prototype)
bluebird.promisifyAll(redis.Multi.prototype)

exports.client = redis.createClient(REDIS_URL)
