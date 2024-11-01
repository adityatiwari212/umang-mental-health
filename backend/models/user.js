const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    password: {
        type: String,
        required: true,
        select : false
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age cannot be negative'],
    },
    location: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

// setting up bcrypt js

userSchema.pre("save" ,async function (next) {
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password , 16);
    }
    next();
})
userSchema.methods.getJwtToken = ()=>{
    return jwt.sign({id : this._id} , process.env.JWT_SECRET , {
        expiresIn : process.env.JWT_EXPIRE
    })
}
userSchema.methods.checkPassword = async function(Password){
    return await bcrypt.compare(Password , this.password);
}
const User = mongoose.model('User', userSchema);

module.exports = User;
