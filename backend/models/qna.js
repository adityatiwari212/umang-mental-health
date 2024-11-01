const mongoose = require('mongoose');

// Define the schema for answers
const answerSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    askedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model
        required: true
    }
}, { timestamps: true });

// Define the schema for questions
const questionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    askedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model
        required: true
    },
    answers: [answerSchema]  // Embed multiple answers within the question
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
