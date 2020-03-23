const { SENDGRID_API_KEY } = require('./config')
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(SENDGRID_API_KEY)
// const msg = {
//     to: 'israel.dantas@redfox.tech',
//     from: 'redfox@redfox.tech',
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'and easy to do anywhere, even with Node.js',
//     html: '<strong>and easy to do anywhere, even with Node.js</strong>'
// }
// ES6
module.exports = (msg) => sgMail.send(msg)
// // ES8
// (async () => {
//     try {
//         const data = await sgMail.send(msg)
//         console.log('dataasa: ', data)
//     } catch (err) {
//         console.error('errror: ', err)
//     }
// })()
