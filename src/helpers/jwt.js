const jwt = require('jsonwebtoken')
const { SECRET } = require('./../config')
exports.createToken = (data) => {
    return jwt.sign({
        ...data
    }, SECRET)
}

exports.decodeToken = (data) => {
    return jwt.decode(data)
}
