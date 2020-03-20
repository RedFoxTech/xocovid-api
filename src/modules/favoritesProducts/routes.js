const express = require('express')
const validate = require('express-validation')

const contract = require('./contract')
const { findProducts, addProductsFavorites } = require('./actions')

const router = express.Router()

const { tokenVerify } = require('./../../middlewares/authentication')

router.get('/:_id', tokenVerify, validate(contract.findProducts), findProducts)

router.post('/:_id', tokenVerify, validate(contract.addProductsFavorites), addProductsFavorites)

module.exports = { router, endpoint: '/favorites-products' }
