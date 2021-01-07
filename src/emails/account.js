const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhaval.akabri@gmail.com',
        subject: 'welcome sendgrid mail',
        text: `Welcome to app, ${name}, How are you`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhaval.akabri@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye ${name}, I hope to see you back sometime soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
