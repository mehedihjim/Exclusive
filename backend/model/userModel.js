const mongoose = require('mongoose');


var userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
    },
    address: String,
},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('user', userSchema);