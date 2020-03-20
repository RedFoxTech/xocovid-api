const mongoose = require('mongoose')
const config = require('./config')
module.exports = () => {
    console.log('MONGODB_URI: ', config.MONGODB_URI)
    mongoose.connect(`${config.MONGODB_URI}/${config.MONGODB_DATABASE}`, { useNewUrlParser: true })
    return mongoose.connection
}
