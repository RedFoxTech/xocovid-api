const { Schema, model } = require('mongoose')

const productsSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        index: true
    },
    title: {
        type: String,
        required: true
    },
    reviewScore: {
        type: Number,
        required: false
    }
})

const customerSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            index: true
        },
        productsFavorites: [productsSchema],
        createdAt: Date,
        updatedAt: Date
    }
)

module.exports = model('Customer', customerSchema)
