const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4, maxlength: 30 },
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 300,
        unique: true,
    },
    password: { type: String, required: true, minlength: 6, maxlength: 1024 },
    phoneNumber: { type: Number, required: true, minlength: 4, maxlength: 20, unique: true }
},
    {
        timestamps: true,
    })


const userModel = mongoose.model('user', userSchema)

module.exports = userModel