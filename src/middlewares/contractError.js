const expressValidation = require('express-validation')
/* istanbul ignore next */
// eslint-disable-next-line handle-callback-err
module.exports = (err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        const convertedError = {
            message: 'Erro de Validação',
            errors: err.errors,
            status: err.status,
            stack: err.stack
        }
        res.status(convertedError.status || 400).json(convertedError)
    } else next(err)
}
