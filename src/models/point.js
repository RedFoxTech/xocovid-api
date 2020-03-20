const { Schema, model } = require('mongoose')

const point = new Schema({
    user: {
        type: Object,
        required: true
    },
    location: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },
        coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
        }
    },
    createdAt: Date,
    updatedAt: Date
})

module.exports = model('Point', point)
