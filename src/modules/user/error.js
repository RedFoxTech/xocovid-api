
const HttpStatus = require('http-status-codes')

const { mapperError } = require('../../mappers/error')
const moduleError = {
    E11000: {
        status: HttpStatus.CONFLICT,
        message: 'user with this key already exists        '
    },
    passwordInvalid: {
        status: HttpStatus.UNAUTHORIZED,
        message: 'invalid password or key'
    },
    notFound: {
        status: HttpStatus.UNAUTHORIZED,
        message: 'invalid password or key'
    }
}
module.exports = (error) => {
    return mapperError(moduleError[error])
}
