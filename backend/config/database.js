const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((data) => {
        console.log("Mongo connected to", data.connection.host);
        // console.log("data is" , data);
        
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = connectDatabase;
