const validator = require('validator');

const customerValidator = [
    validator.body('name', 'name is required').isString(),
    validator.body('address', 'address is required').isString(),
    validator.body('phoneNumbwe', 'phone number is required to be the correct format (Egypt Code)').isMobilePhone("ar-EG"),
    validator.body('logoUrl','logo picture url must be a valid url if provided').isOptional().isURL(),
    validator.body('category', 'category is required').isArray().isLength({min: 1}),
    validator.body('owner', 'owner is required').isString(),
    
]