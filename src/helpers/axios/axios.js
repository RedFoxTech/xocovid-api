const axios = require('axios')

exports.factoryApi = (baseURL) => axios.create({ baseURL })
