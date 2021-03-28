const { addEmail, deleteEmail, updateEmail, readEmail, listEmail, deleteAllEmail } = require('../controller/emailController')
const router = require('express').Router();
const duplicateEmailCounter = require('../middleware/duplicateEmailCounter')
const validate = require('./validations')

router.post('/add', duplicateEmailCounter, validate.validateCreateScheduler, addEmail);
router.delete('/delete', deleteEmail);
router.delete('/deleteall', deleteAllEmail);
router.patch('/update', updateEmail);
router.get('/read', readEmail);
router.get('/list', listEmail);

module.exports = router