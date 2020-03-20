const express = require('express')
const validate = require('express-validation')

const contract = require('./contract')
const { create, update, find, findOne, removeOneCustomer } = require('./actions')

const router = express.Router()

const { tokenVerify } = require('./../../middlewares/authentication')

router.get('/', tokenVerify, find)

router.get('/:_id', tokenVerify, validate(contract.findOneCustomer), findOne)

router.post('/', tokenVerify, validate(contract.createPoint), create)

router.put('/:_id', tokenVerify, validate(contract.updateCustomer), update)

router.delete('/:_id', tokenVerify, validate(contract.removeCustomer), removeOneCustomer)

module.exports = { router, endpoint: '/customer' }
