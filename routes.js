const fs = require('fs')
const express = require('express')

const apiRouter = express.Router()

const routerModuleList = fs.readdirSync('./src/modules')

const router = routerModuleList.reduce((acc, item) => {
    const moduleApplication = require(`./src/modules/${item}/routes.js`)

    acc.use(moduleApplication.endpoint, moduleApplication.router)

    return acc
}, apiRouter)

module.exports = router
