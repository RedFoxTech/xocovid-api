const HttpStatus = require('http-status-codes')
const jwt = require('jsonwebtoken')
const { SECRET } = require('./../config')
// const { findById } = require('./../modules/user/repository')

const decode = token => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err || !decoded) {
                return reject(err)
            }
            resolve(decoded)
        })
    })
}
exports.tokenVerify = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader) {
            return res.status(401).send({
                status: HttpStatus.UNAUTHORIZED,
                message: 'No token provided'
            })
        }

        const parts = authHeader.split(' ')

        if (!parts.length === 2) {
            return res.status(401).send(
                {
                    status: HttpStatus.UNAUTHORIZED,
                    message: 'Token error'
                })
        }

        const [scheme, token] = parts

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(HttpStatus.UNAUTHORIZED).json(
                {
                    status: HttpStatus.UNAUTHORIZED,
                    message: 'Token malformatted'
                }
            )
        }

        req.user = await decode(token, SECRET)

        next()
    } catch (err) {
        res.status(HttpStatus.UNAUTHORIZED).send({
            message: err.message,
            status: HttpStatus.UNAUTHORIZED
        })
    }
}
