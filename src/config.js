require('dotenv').config()
module.exports = {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET,
    NODE_ENV: process.env.NODE_ENV,
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_DATABASE: process.env.MONGODB_DATABASE,
    BASE_URL_MAGALU: process.env.BASE_URL_MAGALU || 'http://challenge-api.luizalabs.com/api/',
    REDIS_URL: process.env.REDIS_URL,
    REDIS_EXPIRES: process.env.REDIS_EXPIRES || 15 * 60 * 1000 // 15 minutos padrão
}
