const Email = require('../model/emailModel');
const moment = require('moment')
const { validationResult } = require('express-validator')

const ad = require('../emails/cache')

function call(cache) {
    ad.cache();
}

const addEmail = async (req, res) => {
    // req.body.scheduleTime = moment(req.body.scheduleTime);

    const mailDetails = new Email(req.body);
    // console.log(mailDetails)
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).send(error)
        }
        await mailDetails.save()
        call();
        res.status(201).send({ mailDetails });
    } catch (e) {
        res.status(400).send(e);
    }
}

const deleteEmail = async (req, res) => {
    try {
        const mailDetails = await Email.findOneAndDelete({ email: req.body.email })

        if (!mailDetails) {
            res.status(404).send()
        }
        call();
        res.send(mailDetails)
    } catch (e) {
        res.status(500).send()
    }
}

const updateEmail = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const mailDetails = await Email.findOne({ email: req.body.email })
        if (!mailDetails) {
            throw new Error();
        }
        updates.forEach(update => mailDetails[update] = req.body[update]);
        await mailDetails.save(function (err, doc) {
            if (err) return console.error(err);
            call()
        });
        res.send(mailDetails)
    } catch (e) {
        res.status(400).send(e)
    }
}

const readEmail = async (req, res) => {
    try {
        const mailDetails = await Email.findOne({ email: req.body.email });
        if (!mailDetails) {
            throw new Error();
        }
        mailDetails.scheduleTime = moment(ele.scheduleTime)
        res.send(mailDetails)
    } catch (err) {
        res.status(400).send(err)
    }
}

const listEmail = async (req, res) => {
    try {
        const mailDetails = await Email.find({ sent: false });
        if (!mailDetails) {
            throw new Error();
        }
        res.send(mailDetails)
    } catch (err) {
        res.status(400).send(err)
    }
}

const deleteAllEmail = async (req, res) => {
    try {
        const mailDetails = await Email.deleteMany()

        call();
        res.send(mailDetails)
    } catch (e) {
        res.status(500).send()
    }
}

module.exports = {
    addEmail,
    updateEmail,
    deleteEmail,
    readEmail,
    listEmail,
    deleteAllEmail
}