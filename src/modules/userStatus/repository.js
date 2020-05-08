const UserStatus = require('../../models/userStatus')
const UserStatusHistoric = require('../../models/userStatusHistoric')

exports.saveCustomer = async userStatus => {
    const newUserStatus = new UserStatus(userStatus)
    return newUserStatus.save()
}

exports.findByEmail = async email => UserStatus.findOne({ email })

exports.findById = async _id => UserStatus.findById(_id)

exports.findByPoints = async (user, { lat, long, maxDistance }) => UserStatus.aggregate([
    {
        $geoNear: {
            near: { type: 'Point', coordinates: [parseFloat(lat), parseFloat(long)] },
            distanceField: 'calculated',
            query: { 'user.email': { $ne: user.email || '' }, probability: { $ne: 0 } },
            maxDistance: parseFloat(maxDistance) || 1000,
            spherical: true
        }
    },
    {
        $group: {
            _id: '$user.email',
            name: { $last: '$user.name' },
            distance: { $last: '$calculated' },
            coordinates: { $last: '$location.coordinates' },
            date: { $last: '$createdAt' }
        }
    }
])

exports.find = async (query = {}) => UserStatus.find(query)

exports.findOne = async (query = {}, projection) => UserStatus.findOne(query, projection)

exports.updateOneAndCreateHistoric = async (...params) => {
    const newUserStatus = new UserStatusHistoric(params[1])
    await newUserStatus.save()
    return UserStatus.updateOne(...params)
}

exports.updateOne = async (...params) => UserStatus.updateOne(...params)

exports.findOneAndUpdate = async (query, data) => UserStatus.findOneAndUpdate(query, data)

exports.removeOne = async (query) => UserStatus.deleteOne(query)
