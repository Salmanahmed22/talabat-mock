const validator = require('validator');

const createCustomer = [
    validator.body('firstName', 'first name is required').isString(),
    validator.body('lastName', 'last name is required').isString(),
    validator.body('email', 'email is required').isEmail(),
    validator.body('password', 'password is required').isString().isLength({min: 8}, {max: 32}),
    validator.body('phoneNumber', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    validator.body('sex','sex must be either male or female').isIn(['male', 'female']),
    validator.body('profilePictureUrl','profile picture url must be a valid url if provided').isOptional().isURL(),
    validator.body('coordinates', 'coordinates is required').isArray().isLength({min: 2, max: 2}),
    validator.body('addresses', 'addresses is required').isArray().isLength({min: 1})
]

const loginCustomer = [
    validator.body('email', 'email is required').isEmail(),
    validator.body('password', 'password is required').isString().isLength({min: 8}, {max: 32})
]

module.exports = {createCustomer, loginCustomer}