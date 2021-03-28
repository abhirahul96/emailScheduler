const nodeCache = require('node-cache');
const myCache = new nodeCache();
const moment = require('moment');
const sendMail = require('../emails/account')
const Email = require('../model/emailModel')

const cache = async function () {
    console.log('cache is called')
    var allMail = await Email.find();
    myCache.set('cache', allMail)
}
const check = async function () {
    console.log('check is called')
    var cacheOpertaion = (myCache.get('cache'));
    cacheOpertaion.forEach(ele => {
        var time = moment(ele.scheduleTime);
        // console.log(moment().isSame(time, 'day') && moment().isSame(time, 'hour') && moment().isSame(time, 'minute'))
        if (moment().isSame(time, 'day') && moment().isSame(time, 'hour') && moment().isSame(time, 'minute')) {
            sendMail(ele)
        }
        // console.log(moment().isSame(time, 'day') && moment().isSame(time, 'hour') && moment().isSame(time, 'minute'));
    })
}

module.exports = {
    cache,
    check
}