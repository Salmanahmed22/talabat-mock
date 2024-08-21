const {body} = require('express-validator');


const  createRestaurantValidator = [
    body('email', 'email is required').isEmail(),
    body('password', 'password is required').isString().isLength({min: 8}, {max: 32}),
    body('name', 'name is required').isString(),
    body('address', 'address is required').isString(),
    body('phoneNumber', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    body('logoUrl','logo picture url must be a valid url if provided').isURL(),
    body('category', 'category is required').isArray().isLength({min: 1}),
    body('owner', 'owner is required').isString(),
]

module.exports = createRestaurantValidator  