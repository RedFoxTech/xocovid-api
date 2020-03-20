const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    createPoint: {
        body: {
            point: Joi.array().required()
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
