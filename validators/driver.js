const validator = require('validator');

 const createDriver = [
    validator.body('firstName', 'first name is required').isString(),
    validator.body('lastName', 'last name is required').isString(),
    validator.body('email', 'email is required').isEmail(),
    validator.body('password', 'password is required').isString().isLength({min: 8}, {max: 32}),
    validator.body('phoneNumbwe', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    validator.body('vehicle', 'vehicle must be either car, motorcycle, bicycle or on_foot').isIn(['car', 'motorcycle', 'bicycle', 'on_foot']),
]

module.exports = createDriver
 