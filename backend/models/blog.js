const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: String,
        required: true,
    },
    writtenBy: {
        firstName:{
            type : String , 
            required : true,
        },
        lastName:{
            type : String , 
            required : true,
        }
    },
    likes: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
