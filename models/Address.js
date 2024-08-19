const mongoose = require('mongoose');

const  addressSchema = new mongoose.Schema({
    name: {
        String,
        required: true
    },
    type:{
        type:String,
        enum:["point"],
        required: true
    },
    coordinates:{
        type: [Number],
        required: true
    }
})

const Address = mongoose.model('Address', addressSchema);
module.exports = Address