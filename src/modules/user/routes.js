const express = require('express')
const validate = require('express-validation')

const contract = require('./contract')
const { create, signIn, list } = require('./actions')

const { tokenVerify } = require('./../../middlewares/authentication')

const router = express.Router()

router.get('/', tokenVerify, list)

router.post('/', validate(contract.createUser), create)

router.post('/sign-in', validate(contract.signIn), signIn)

module.exports = { router, endpoint: '/user' }
