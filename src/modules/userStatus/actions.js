const { createPoint, updateOrAddUserStatus, findPoints, findOneCustomer, remove } = require('./service')

module.exports.find = async (req, res, next) => {
    try {
        console.log('user: ', req.user)
        res.json(await findPoints(req.user, req.query))
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
        console.log('user: ', req.user, req.body);
        res.json(await updateOrAddUserStatus(req.user, req.body))
    } catch (error) {
        console.log(error)
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
