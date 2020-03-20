const { createPoint, updateCustomer, findCustomer, findPoints, findOneCustomer, remove } = require('./service')

module.exports.find = async (req, res, next) => {
    try {
        res.json(await findPoints(req.query))
    } catch (error) {
        next(error)
    }
}
module.exports.findOne = async (req, res, next) => {
    try {
        res.json(await findOneCustomer(req.params))
    } catch (error) {
        next(error)
    }
}

module.exports.findPoints = async (req, res, next) => {
    try {
        res.json(await findPoints(req.params))
    } catch (error) {
        next(error)
    }
}

module.exports.create = async (req, res, next) => {
    try {
        req.body.user = req.user
        res.json(await createPoint(req.body))
    } catch (error) {
        next(error)
    }
}

module.exports.update = async (req, res, next) => {
    try {
        res.json(await updateCustomer(req.params, req.body))
    } catch (error) {
        next(error)
    }
}
module.exports.removeOneCustomer = async (req, res, next) => {
    try {
        res.json(await remove(req.params))
    } catch (error) {
        next(error)
    }
}
