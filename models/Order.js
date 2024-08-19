const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    Date: {
        type: Date,
        default: Date.now    
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered'],
        default: 'pending'
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cart'
    },
    driver:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    deliveryTime:{
        type: Date
    }
})