const { body } = require("express-validator/check");
const moment = require('moment');

exports.validateCreateScheduler = [
    body('emailId', 'emailId should be valid and is required').isEmail().exists(),
    body('scheduleTime', 'scheduleTime should be in future').custom(value => {
        if (moment(value).isBefore(moment())) {
            return Promise.reject('scheduleTime should be in future ')
        } else {
            return Promise.resolve()
        }
    })
];

