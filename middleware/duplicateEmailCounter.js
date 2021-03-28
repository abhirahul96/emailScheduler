
const Email = require('../model/emailModel')

const duplicateEmailCounter = async (req, res, next) => {
    try {
        const duplicateEmail = await Email.find({ emailId: req.body.emailId });
        // console.log(duplicateEmail.length)
        if (duplicateEmail.length) {
            req.body.counter = duplicateEmail[duplicateEmail.length - 1]['counter'] + 1

        }
        else {
            req.body.counter = 1
        }

        next()
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports = duplicateEmailCounter