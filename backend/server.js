
const  server = require ("./app")
const dotenv = require ("dotenv")

dotenv.config({path:"backend/config/config.env"})


const connectDatabase = require("./config/database")

connectDatabase();
server.listen(process.env.PORT , ()=>{
console.log("server is running on port " , process.env.PORT);
    
})