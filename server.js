const express = require('express');
const dotenv = require('dotenv');
// const moment = require('moment')
const cron = require('node-cron')
const { cache, check } = require('./emails/cache')
const emailRouter = require('./router/emailRoutes')

const account = require('./emails/account')

dotenv.config();

const app = express();

app.use(express.json())

require('./db/mongoose')
app.use(emailRouter)


const port = process.env.PORT || 3000;




app.listen(port, () => {
    console.log(`Server is in session now on ${port}...`)
    cache()
    // var dt = moment('2021-03-28 10:34');
    // var min = dt.minutes();
    // var hr = dt.hours();
    // var day = dt.date();
    // var mon = dt.month() + 1;
    // console.log(dt, day, mon, hr, min);
    // cron.schedule(`${min} ${hr} ${day} ${mon} *`, cache)
    // console.log(moment('2021-03-28 14:20:01'))
    cron.schedule(`* 00 * * *`, cache)
    cron.schedule('*/1 * * * *', check);
})
