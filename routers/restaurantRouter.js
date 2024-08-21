const createRestaurantValidator = require('../validators/restaurant');
const restaurantController = require('../controllers/restaurantController');
const router = require('express').Router();

router.post('/signup',createRestaurantValidator, restaurantController.signup);
// router.post('/login', restaurantController.login);
module.exports = router
