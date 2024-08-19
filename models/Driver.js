const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
        password: {
        type: String,
        required: true,
    },
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
    addresses:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    age: {
        type: Number,   
        required: true,
        validate: {
            validator: function(v) {
                return v > 18 && v < 60
            },
            message: props => `${props.value} is not a valid age`
        }
    },
    vehicle: {
        type: String,
        required: true
    },
    nationalId: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return v.length === 14
            },
            message: props => `${props.value} is not a valid national id`
        }
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: [] 
    }] 
},
{
    timestamps: true
})

const Driver = mongoose.model('Driver', driverSchema);
module.exports = Driver