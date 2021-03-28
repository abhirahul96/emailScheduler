const mongoose = require('mongoose');
const moment = require('moment')
const emailSchema = new mongoose.Schema({
    emailId: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    scheduleTime: {
        type: Date,
        required: true,
        trim: true
    },
    counter: {
        type: Number,
        required: true
    },
    sent: {
        type: Boolean,
        default: false
    }
})

const Email = mongoose.model('Email', emailSchema);

module.exports = Email;