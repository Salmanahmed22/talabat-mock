const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,   
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    addresses:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    defaultAddressIndex: {
        type: Number,
        default: 0
    },
    wallet:{
        type: Number,
        default: 0
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    sex:{
        type: String,
        enum:["male", "female"],
    },
    profilePictureUrl:{
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    },
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

const Customer = mongoose.model("Customer", customerSchema,);
module.exports = Customer