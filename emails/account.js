const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Email = require('../model/emailModel');

const sendMail = (task) => {
    console.log('sendEmail is called')
    sgMail.send({
        to: task.emailId,
        from: 'abhi.rahulnayak@gmail.com',
        subject: 'hello',
        text: 'Welcome to email scheduler'
    }).then(async () => {
        console.log('Email sent');
        const sentMail = await Email.findOne({ emailId: task.emailId, counter: task.counter });
        sentMail['sent'] = true;
        await sentMail.save();
    })
        .catch((error) => {
            console.error(error)
        })
}
module.exports = sendMail
