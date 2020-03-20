const Customer = require('../../models/customer')

exports.saveCustomer = async customer => {
    const newCustomer = new Customer(customer)
    return newCustomer.save()
}

exports.findByEmail = async email => Customer.findOne({ email })

exports.findById = async _id => Customer.findById(_id)

exports.find = async (query = {}) => Customer.find(query)

exports.findOne = async (query = {}, projection) => Customer.findOne(query, projection)

exports.updateOne = async (query, data) => Customer.updateOne(query, data)

exports.findOneAndUpdate = async (query, data) => Customer.findOneAndUpdate(query, data)

exports.removeOne = async (query) => Customer.deleteOne(query)
