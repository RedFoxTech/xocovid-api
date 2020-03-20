const Point = require('../../models/point')

exports.saveCustomer = async point => {
    const newPoint = new Point(point)
    return newPoint.save()
}

exports.findByEmail = async email => Point.findOne({ email })

exports.findById = async _id => Point.findById(_id)

// return City.create({ name: 'Denver', location: denver }).
//   then(() => City.findOne({
//     location: {
//       $geoWithin: {
//         $geometry: colorado
//       }
//     }
//   })).

exports.findByPoints = async _id => Point.aggregate([
    {
        $geoNear: {
            near: { type: 'Point', coordinates: [-4.101198, -38.456351] },
            distanceField: 'calculated',
            maxDistance: 28000,
            minDistance: 2,
            spherical: true
        }
    }
])

// exports.findByPoints = async _id => Point.findOne({
//     location: {
//         // $geoWithin: {
//         //     $geometry: colorado
//         // }
//         $near: {
//             $geometry: {
//                 type: 'Point',
//                 coordinates: [-3.842254, -38.488863]
//             },
//             $maxDistance: 0,
//             $minDistance: 10000000
//         }
//     }
// })
// exports.findByPoints = async _id => Point.geoNear(
//     { type: 'Point', coordinates: [-3.842254, -38.488863] },
//     { maxDistance: 10000, spherical: true }
// )

exports.find = async (query = {}) => Point.find(query)

exports.findOne = async (query = {}, projection) => Point.findOne(query, projection)

exports.updateOne = async (query, data) => Point.updateOne(query, data)

exports.findOneAndUpdate = async (query, data) => Point.findOneAndUpdate(query, data)

exports.removeOne = async (query) => Point.deleteOne(query)
