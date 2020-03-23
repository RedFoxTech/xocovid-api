const { Schema, model } = require('mongoose')

const userStatusHistoricSchema = new Schema({
    user: {
        type: Object,
        required: false
    },
    symptoms: {
        type: Array,
        required: true
    },
    probability: {
        type: Number,
        required: true
    },
    suspiciousPeople: {
        type: Boolean,
        required: false
    },
    casesConfirmed: {
        type: Boolean,
        required: false
    },
    yourCaseConfirmed: {
        type: Boolean,
        required: false
    },
    traveled: {
        type: Boolean,
        required: false
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

module.exports = model('UserStatusHistoric', userStatusHistoricSchema)
