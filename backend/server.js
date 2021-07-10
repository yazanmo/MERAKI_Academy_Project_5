const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");
const socket = require('socket.io');

//routers
const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const registerDoctorRouter = require("./routers/routes/dashboard");

const acceptDoctorRouter = require("./routers/routes/acceptDoctor");
const doctorDetailsRouter = require("./routers/routes/doctorProfile");
const myPatient = require("./routers/routes/mypatient");

const storyRouter = require("./routers/routes/story");

const sendEmailRouter = require("./routers/routes/email");

const scheduleRoute = require("./routers/routes/schedule");
const foodTrackerRouter = require("./routers/routes/foodTracker");
const reviewRouter = require("./routers/routes/review");
// const storyRouter = require("./routers/routes/story")

const doctorRouter = require("./routers/routes/doctor");
const userRouter = require("./routers/routes/user");
const Conversation = require("./routers/routes/conversation");

const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(registerRouter);
app.use(loginRouter);
app.use(registerDoctorRouter);
app.use(acceptDoctorRouter);

app.use(reviewRouter);
app.use(storyRouter);
app.use(doctorDetailsRouter);
app.use(foodTrackerRouter);

app.use(doctorRouter);
app.use(userRouter);
app.use(myPatient);
app.use(scheduleRoute);

app.use(sendEmailRouter);
app.use(Conversation);





const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});


const io = socket(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST', 'DELETE', 'PUT'],
	},
});

// let users =[]

// const addUser =(userId,socketId)=>{
//   !users.some((user)=>user.userId===userId) &&
//   users.push({userId,socketId})
// }


// const removeUser =(socketId)=>{
//   users =  users.filter((user)=> {
//    user.socketId !== socketId
//   })
// }

// const getUser = (userId)=>{
//   return users.find((user)=>{
//     user.userId===userId
//   })
// }


// //when connect
// io.on('connection', (socket) => {
// 	console.log("user is connection ",socket.id);
// io.emit("welcome","hello from server")

// //take userId and socketId
// socket.on("addUser",userId =>{
//   addUser(userId,socket.id)
// })

// io.emit("getUsers",users)

// // send and get message
// socket.on("sendMessage",({userId,receiver,text})=>{
//   const user = getUser(receiver)
//   io.to(user.socketId,"getMessage",{
//     userId,
//     text
//   })
// })


// //when disconnect
// socket.on("disconnect",socketId=>{
//   console.log("user disconnected");
//   removeUser(socket.id)
//   io.emit("getUsers",users)
// })
// });


let users = [];
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};
const getUser = (userId) => {
  // console.log('hello',users);
 let test;
 users.forEach(user =>{
   console.log()
   console.log(user);
   if(user.userId === userId){
     console.log('__test__', user);
     test = user;
   }
 })
 return test;
//  console.log('__test__', test)
//   return users.find((user) => user.userId === userId);
};
io.on("connection", (socket) => {
  //when connect
  // console.log("a user connected.");
  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ userId, receiverId, text }) => {
    console.log('sended message',userId, receiverId, text);
    const user = getUser(userId);

    io.to(user.socketId).emit("getMessage", {
      userId,
      text,
    });
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});