const {body} = require('express-validator');


const customerValidator = [
    body('name', 'name is required').isString(),
    body('address', 'address is required').isString(),
    body('phoneNumbwe', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    body('logoUrl','logo picture url must be a valid url if provided').isOptional().isURL(),
    body('category', 'category is required').isArray().isLength({min: 1}),
    body('owner', 'owner is required').isString(),
]

module.exports = customerValidator