const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");
const socket = require("socket.io");

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
  
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST", "DELETE", "PUT"],
  },
});
io.on("connection", (socket) => {
  socket.on("join_room", (data) => {
    socket.join(data);
   
  });

  socket.on("send_message", (data) => {
   
    socket.to(data.room).emit("receive_message", data.message);
  });

  socket.on("disconnect", () => {
  
  });
});
