const { sendEmail } = require('./repository')

exports.sendEmailRecoveryPassword = async (user, code) => {
    try {
        const msg = {
            to: user.email,
            from: 'xocovid-recovery-password@redfox.tech',
            subject: 'Código para redefinir a sua senha',
            text: `Código para redefinir a sua senha através do app: ${code}`
        }
        return sendEmail(msg)
    } catch (err) {
        throw new Error(err)
    }
}
