const {body} = require('express-validator');


 const createDriver = [
    body('firstName', 'first name is required').isString(),
    body('lastName', 'last name is required').isString(),
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8}, {max: 32}),
    body('phoneNumber', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    body('vehicle', 'vehicle must be either car, motorcycle, bicycle or on_foot').isIn(['car', 'motorcycle', 'bicycle', 'on_foot']),
]

const loginDriver = [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8}, {max: 32})
]

module.exports = {createDriver, loginDriver}
 