const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    listOneCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    },
    createUser: {
        body: {
            email: Joi.string().email().required(),
            name: Joi.string().required(),
            age: Joi.number().required(),
            password: Joi.string().required()
        }
    },
    signIn: {
        body: {
            email: Joi.string().required(),
            password: Joi.string().required()
        }
    }
}
