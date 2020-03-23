const sendGrid = require('./../../sendGrid')

exports.sendEmail = (msg) => sendGrid(msg)
