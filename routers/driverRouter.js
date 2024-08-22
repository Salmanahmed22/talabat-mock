const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');
const {createDriver, loginDriver} = require('../validators/driver');


router.post('/signup',createDriver, driverController.signup);
router.post('/login',loginDriver, driverController.login);


module.exports = router