const error = require('./error')
const { customerMapper } = require('./../../mappers/customer')
const { factoryLogger } = require('../../helpers/logger/logger')
const { saveCustomer, updateOne, find, findOne, removeOne } = require('./repository')

const logger = factoryLogger({ dir: __dirname, locale: 'service.js' })

exports.createPoint = async (body) => {
    try {
        const customer = customerMapper(body)
        const resp = await saveCustomer(customer)

        logger.info({ endpoint: 'customer/', method: 'createPoint', request: body, response: resp })

        return resp
    } catch (err) {
        if (err.message.startsWith('E11000')) throw error('E11000')

        logger.error({ endpoint: 'customer/', method: 'createPoint', err: String(err), request: body })

        throw error(err.message)
    }
}

exports.findCustomer = async (query) => {
    try {
        const resp = await find(query)

        logger.info({ endpoint: 'customer/', method: 'findCustomer', request: query, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'customer/', method: 'findCustomer', err: String(err), request: query })

        throw error(err.message)
    }
}

exports.findOneCustomer = async (params) => {
    try {
        const resp = await findOne(params)

        logger.info({ endpoint: 'customer/', method: 'findOneCustomer', request: params, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'customer/', method: 'findOneCustomer', err: String(err), request: params })
        throw error(err.message)
    }
}

exports.updateCustomer = async (params, body = {}) => {
    try {
        const resp = await updateOne(params, body)

        logger.info({ endpoint: 'customer/', method: 'updateCustomer', request: body, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'customer/', method: 'updateCustomer', err: String(err), request: body })

        throw error(err.message)
    }
}

exports.remove = async (params) => {
    try {
        const resp = await removeOne(params)

        logger.info({ endpoint: 'customer/', method: 'remove', request: params, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'customer/', method: 'remove', err: String(err), request: params })

        throw error(err.message)
    }
}
