const Point = require('../../models/point')

exports.saveCustomer = async point => {
    const newPoint = new Point(point)
    return newPoint.save()
}

exports.findByEmail = async email => Point.findOne({ email })

exports.findById = async _id => Point.findById(_id)

exports.findByPoints = async ({ lat, long, maxDistance }) => Point.aggregate([
    {
        $geoNear: {
            near: { type: 'Point', coordinates: [parseFloat(lat), parseFloat(long)] },
            distanceField: 'calculated',
            maxDistance: parseFloat(maxDistance) || 500,
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

exports.find = async (query = {}) => Point.find(query)

exports.findOne = async (query = {}, projection) => Point.findOne(query, projection)

exports.updateOne = async (query, data) => Point.updateOne(query, data)

exports.findOneAndUpdate = async (query, data) => Point.findOneAndUpdate(query, data)

exports.removeOne = async (query) => Point.deleteOne(query)
