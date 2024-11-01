const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    user: {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        }
    },
    text: {
        type: String,
        required: true,
        trim: true
    },
    satisfactionRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    }
}, { timestamps: true });

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;
