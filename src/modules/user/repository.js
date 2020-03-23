const User = require('./../../models/user')

exports.saveUser = async user => {
    const newUser = new User(user)
    return newUser.save()
}

exports.findByKey = async key => User.findOne({ key })

exports.findByEmail = async email => User.findOne({ email })

exports.findByEmailAndCode = async (email, codeRecovery) => User.findOne({ email, codeRecovery })

exports.findById = async _id => User.findById(_id)

exports.updateToken = async (query, token) => User.updateOne(query, { token })

exports.updateOne = async (query, data) => User.updateOne(query, data)

exports.list = async (query = {}) => User.find(query, 'key _id')
