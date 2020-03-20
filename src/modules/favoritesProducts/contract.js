const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = {
    findProducts: {
        params: {
            _id: Joi.objectId().required()
        }
    },
    addProductsFavorites: {
        params: {
            _id: Joi.objectId().required()
        },
        body: {
            idProduct: Joi.string().required()
        }
    }
}
