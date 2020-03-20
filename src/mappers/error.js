const HttpStatus = require('http-status-codes')

exports.mapperError = (params) => params ? {
    status: params.status,
    message: params.message,
    stack: params.stack
} : {
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    message: 'Houve um erro inesperado.'
}
