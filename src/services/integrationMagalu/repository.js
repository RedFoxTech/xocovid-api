const { client } = require('./../../redis')
const { REDIS_EXPIRES } = require('./../../config')

exports.getProductsAsync = (id) => client.getAsync(`product/${id}`)

exports.setProducts = (id, data) => client.set(`product/${id}`, JSON.stringify(data), 'EX', REDIS_EXPIRES)
