const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        select : false

    },
    location: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    yearOfExp: {
        type: Number,
        required: true
    },
    speciality: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
