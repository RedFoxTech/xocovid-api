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
    addOrUpdateUserStatus: {
        body: {
            point: Joi.array().required()
        }
    },
    removeCustomer: {
        params: {
            _id: Joi.objectId().required()
        }
    }
}
