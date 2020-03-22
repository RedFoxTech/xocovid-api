const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    createPoint: {
        body: {
            symptoms: Joi.array().required(),
            probability: Joi.number().required(),
            point: Joi.array().required()
        }
    },
    findOneCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    },
    addOrUpdateUserStatus: {
        body: {
            symptoms: Joi.array().required(),
            probability: Joi.number().required(),
            point: Joi.array().required()
        }
    },
    removeCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    }
}
