const error = require('./error')
const { pointMapper } = require('./../../mappers/point')
const { factoryLogger } = require('../../helpers/logger/logger')
const { saveCustomer, updateOne, find, findOne, removeOne, findByPoints } = require('./repository')

const logger = factoryLogger({ dir: __dirname, locale: 'service.js' })

exports.createPoint = async (body) => {
    try {
        const location = pointMapper(body)
        const resp = await saveCustomer(location)

        logger.info({ endpoint: 'points/', method: 'createPoint', request: body, response: resp })

        return resp
    } catch (err) {
        console.log(err)
        if (err.message.startsWith('E11000')) throw error('E11000')

        logger.error({ endpoint: 'points/', method: 'createPoint', err: String(err), request: body })

        throw error(err.message)
    }
}

exports.findCustomer = async (query) => {
    try {
        const resp = await find(query)

        logger.info({ endpoint: 'points/', method: 'findCustomer', request: query, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'points/', method: 'findCustomer', err: String(err), request: query })

        throw error(err.message)
    }
}

exports.findPoints = async (query) => {
    try {
        const resp = await findByPoints(query)

        logger.info({ endpoint: 'points/', method: 'findPoints', request: query, response: resp })

        return resp
    } catch (err) {
        console.log('error find point: ', err)
        logger.error({ endpoint: 'points/', method: 'findPoints', err: String(err), request: query })

        throw error(err.message)
    }
}

exports.findOneCustomer = async (params) => {
    try {
        const resp = await findOne(params)

        logger.info({ endpoint: 'points/', method: 'findOneCustomer', request: params, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'points/', method: 'findOneCustomer', err: String(err), request: params })
        throw error(err.message)
    }
}

exports.updateCustomer = async (params, body = {}) => {
    try {
        const resp = await updateOne(params, body)

        logger.info({ endpoint: 'points/', method: 'updateCustomer', request: body, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'points/', method: 'updateCustomer', err: String(err), request: body })

        throw error(err.message)
    }
}

exports.remove = async (params) => {
    try {
        const resp = await removeOne(params)

        logger.info({ endpoint: 'points/', method: 'remove', request: params, response: resp })

        return resp
    } catch (err) {
        logger.error({ endpoint: 'points/', method: 'remove', err: String(err), request: params })

        throw error(err.message)
    }
}
