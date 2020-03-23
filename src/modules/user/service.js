const error = require('./error')
const { factoryLogger } = require('./../../helpers/logger/logger')
const { userMapper, userMapperSignIn } = require('./../../mappers/user')
const { generateHash } = require('./../../helpers/bcrypt/bcrypt')
const { compare } = require('./../../helpers/bcrypt/bcrypt')
const { createToken } = require('./../../helpers/jwt')
const { saveUser, list, findByEmail, updateOne, findByEmailAndCode } = require('./repository')
const { sendEmailRecoveryPassword } = require('./../../services/email/service')

const logger = factoryLogger({ dir: __dirname, locale: 'service.js' })
function makeCode (length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
exports.createCodeRecoveryPassword = async (user) => {
    try {
        const codeRecovery = makeCode(6).toLocaleLowerCase()

        sendEmailRecoveryPassword(user, codeRecovery)

        const resp = await updateOne({ _id: user._id }, { codeRecovery })

        logger.info({ endpoint: 'user/recovery-password', method: 'createCodeRecoveryPassword', request: user, response: resp })
        return {
            result: 'code generate'
        }
    } catch (err) {
        if (err.message.startsWith('E11000')) throw error('E11000')

        logger.error({ endpoint: 'user/', method: 'createUserService', err: String(err), request: user })
        throw error(err.message)
    }
}

exports.updateNewPassword = async (user, body) => {
    try {
        const data = await findByEmailAndCode(user.email, body.code)
        if (!data) {
            return {
                msg: 'code invalid'
            }
        }
        const password = generateHash(body.password)
        const resp = await updateOne({ _id: user._id }, { password, codeRecovery: '' })

        logger.info({ endpoint: 'user/recovery-password', method: 'createCodeRecoveryPassword', request: user, response: data })
        return {
            resp
        }
    } catch (err) {
        console.log('errororror', err)
        if (err.message.startsWith('E11000')) throw error('E11000')

        logger.error({ endpoint: 'user/', method: 'createUserService', err: String(err), request: user })
        throw error(err.message)
    }
}

exports.createUserService = async (body) => {
    console.log('bodyy: ', body)
    try {
        body.password = generateHash(body.password)
        const user = userMapper(body)

        const resp = await saveUser(user)

        resp.password = undefined

        logger.info({ endpoint: 'user/', method: 'createUserService', request: body, response: resp })
        return resp
    } catch (err) {
        console.log('errororror', err)
        if (err.message.startsWith('E11000')) throw error('E11000')

        logger.error({ endpoint: 'user/', method: 'createUserService', err: String(err), request: body })
        throw error(err.message)
    }
}
exports.listUserService = async (body) => {
    try {
        const resp = await list(body)

        logger.info({ endpoint: 'user/', method: 'listUserService', request: body, response: resp })
        return resp
    } catch (err) {
        logger.error({ endpoint: 'user/', method: 'listUserService', err: String(err), request: body })
        throw error(err.message)
    }
}
exports.signInService = async (body) => {
    try {
        const user = await findByEmail(body.email)

        if (!user) throw new Error('notFound')

        if (!compare(body.password, user.password)) throw new Error('passwordInvalid')

        const resultUser = userMapperSignIn(user)

        const token = await createToken(resultUser)

        logger.info({ endpoint: 'user/', method: 'signInService', request: body, response: body })
        return {
            user: resultUser,
            token
        }
    } catch (err) {
        logger.error({ endpoint: 'user/', method: 'signInService', err: String(err), request: body })
        throw error(err.message)
    }
}
