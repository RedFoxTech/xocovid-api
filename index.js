const HttpStatus = require('http-status-codes')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')

const helmet = require('helmet')
const compression = require('compression')
const morgan = require('morgan')

const mongo = require('./src/mongo')
const mongoConnection = mongo()

const routes = require('./routes')
const { Logger } = require('./src/helpers/logger/logger')
const contractError = require('./src/middlewares/contractError')

const { PORT, NODE_ENV } = require('./src/config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json({ limit: '10mb' }))

app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(morgan('combined'))
app.use(compression())
app.use(helmet())

const port = PORT
const server = http.createServer(app)

app.use('/api', routes)

app.use((_, res) => res.status(HttpStatus.NOT_FOUND).json([{ title: '404', message: 'Route not found' }]))

app.use(contractError)
app.use((err, _, res, next) => {
    const error = {
        status: parseInt(err.status) || 500,
        message: err.message || 'Erro interno no servidor',
        value: err.value,
        stack: err.stack
    }
    if (NODE_ENV !== 'development') delete error.stack
    res.status(error.status)
    res.json(err)
})

const listen = () => server.listen(port, () => Logger.info(`Server start in port: http://localhost:${port}`))

mongoConnection
    .on('error', console.log)
    .on('disconnected', mongo)
    .once('open', listen)

module.exports = app
