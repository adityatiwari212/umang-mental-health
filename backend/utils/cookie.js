// const user = require("../models/user")

exports.cookie = (user )=>{
    const token = user.getJwtToken();

    
    return token;
}