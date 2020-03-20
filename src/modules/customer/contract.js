const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    createPoint: {
        body: {
            name: Joi.string().required(),
            email: Joi.string().email().required()
        }
    },
    findOneCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    },
    updateCustomer: {
        params: {
            _id: Joi.objectId().required()
        },
        body: {
            name: Joi.string().optional(),
            email: Joi.string().email().optional()
        }
    },
    removeCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    }
}
