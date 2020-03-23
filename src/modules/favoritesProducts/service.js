const error = require('./error')
const { factoryLogger } = require('../../helpers/logger/logger')
const { updateOne, findOne } = require('./repository')

const { findProducts } = require('../../services/email/service')

const logger = factoryLogger({ dir: __dirname, locale: 'service.js' })

exports.addProductsFavorites = async (params, body) => {
    try {
        const products = await findProducts(body.idProduct)

        if (!products) throw Error('productNotFound')

        const resp = await updateOne({ _id: params._id, 'productsFavorites.id': { $ne: body.idProduct } }, { $push: { productsFavorites: products } })

        logger.info({ endpoint: 'favorites-products/', method: 'addProductsFavorites', request: body, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'favorites-products/', method: 'addProductsFavorites', err: String(err), request: body })

        if (err.message.endsWith('404')) throw error('productNotFound')

        throw error(err.message)
    }
}

exports.findProductsOfCustomer = async (params, body) => {
    try {
        const resp = await findOne(params, 'productsFavorites')

        if (!resp) throw Error('customerNotFound')

        logger.info({ endpoint: 'favorites-products/', method: 'findProductsOfCustomer', request: body, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'favorites-products/', method: 'findProductsOfCustomer', err: String(err), request: body })

        throw error(err.message)
    }
}
