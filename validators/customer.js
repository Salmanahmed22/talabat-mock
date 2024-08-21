const {body} = require('express-validator');

const createCustomer = [
    body('firstName', 'first name is required').isString(),
    body('lastName', 'last name is required').isString(),
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8}, {max: 32}),
    body('phoneNumber', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    body('sex','sex must be either male or female').isIn(['male', 'female']),
    body('profilePictureUrl','profile picture url must be a valid url if provided').isURL(),
    body('coordinates', 'coordinates is required').isArray().isLength({min: 2, max: 2}),
    body('addresses', 'addresses is required').isArray().isLength({min: 1})
]

const loginCustomer = [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8}, {max: 32})
]

module.exports = {createCustomer, loginCustomer}