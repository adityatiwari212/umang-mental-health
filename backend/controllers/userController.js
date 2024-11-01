const User = require('../models/user'); // Adjust the path as necessary
const { cookie } = require('../utils/cookie');

exports.createUser = async (req, res , next) => {
    try {
        console.log("req is " , req.body);
        
        // Extract user data from request body
        const { email, password, firstName, lastName, age, location } = req.body;

        // Check if all required fields are provided
        if (!email || !password || !firstName || !lastName || !age || !location) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with this email" });
        }

        // Create a new user
        const newUser = new User({ email, password, firstName, lastName, age, location });

        // Save the user to the database
        await newUser.save();

        // Respond with success
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
       
        
        // Handle errors
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
exports.login = async (req  , res  )=>{
    const {email  , password} = req.body;
    if(!email || !password){
        res.status(500).json({message : "Please enter mail and password"});
    }
    const user = await User.findOne({email}).select('+password');

    if(!user) res.status(500).json({message : "Invalid User or Password"})
        console.log(user);
        
    if(!user.checkPassword(password)) {
        res.status(500).json({message : "Invalid User or Password"})
    }
    const token = cookie(user);
    const options = {
        expires : new Date (
            Date.now() + process.env.COOKIE_EXPIRE * 24*60*60*1000

        ) , 
        httpOnly : true
    }
    user.password = undefined;
    res.status(201).cookie('token' , token , options).json(
        {
            message : "Succcessfully Logged In" , token , user
        }
    )
}