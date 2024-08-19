const mongoose = require('mongoose');

const itemVersionSchema = new mongoose.Schema({
    sizeName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},
{ timestamps: true }
)