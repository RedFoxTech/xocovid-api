const { Schema, model } = require('mongoose')

// user {
// 	"id": 1,
// 	"name": "Fulano",
// 	"gender": [
// 		"female",
// 		"male",
// 		"other/custom",
// 		null
// 	],
// 	"age": 1-99,
// 	"geopoint": {
// 		"lat": 100,
// 		"long": 100,
// 	},
// 	"zipcode": 0000000,
// 	"obs": "observações, se precisa de alguma ajuda",
// 	"created_at": "2020-01-01 00:00:00",
// 	"diagnosis": true|false,
// }

// userStatus {
// 	"userId": 1,
// 	"created_at": 2020-02-01 00:00:00,
// 	"probability": 3,
// 	"symptoms": [
// 		"dor de cabeça",
// 		"febre",
// 		"dor no corpo"
// 	],
// 	"zipcode": 0000000,
// 	"geopoint": {
// 		"lat": 100,
// 		"long": 100,
// 	},
// 	"obs": ""
// }

// map {
// 	"title": "Possivel caso",
// 	"probability": 3,
// 	"geopoint": {
// 		"lat": 100,
// 		"long": 100,
// 	},
// }
// }

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    codeRecovery: {
        type: String,
        required: false
    },
    createdAt: Date,
    updatedAt: Date
})

module.exports = model('User', userSchema)
