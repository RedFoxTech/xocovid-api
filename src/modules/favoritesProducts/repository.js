const Customer = require('../../models/customer')

exports.findOne = async (query = {}, projection) => Customer.findOne(query, projection)

exports.updateOne = async (query, data) => Customer.updateOne(query, data)
