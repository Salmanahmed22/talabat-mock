const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const {createCustomer, loginCustomer} = require('../validators/customer');


router.post('/signup',createCustomer, customerController.signup);
router.post('/login',loginCustomer, customerController.login);


module.exports = router