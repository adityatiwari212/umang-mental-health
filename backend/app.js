const express= require ("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
// For parsing application/json
app.use(bodyParser.json());
app.use(cors())
// Route imports


// setting up socket io
const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('A user connected');
  
    // Listen for messages from clients
    socket.on('chat message', (msg) => {
      console.log('Message received: ' + msg);
      // Broadcast the message to all clients
      io.emit('chat message', msg);
    });
  
    // Handle disconnection
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

const blog = require("./routes/blogRoute");
const user  = require("./routes/userRoute")
const doctor = require("./routes/doctorRoutes")
const testimonial = require("./routes/testimonialRouter")
const qna = require("./routes/qnaRoutes")
app.use("/api/umang2/blog" , blog);
app.use("/api/umang2/user" , user)
app.use("/api/umang2/doctors" , doctor)
app.use("/api/umang2/testimonial" , testimonial)
app.use("/api/umang2/qna" , qna)
module.exports = server;