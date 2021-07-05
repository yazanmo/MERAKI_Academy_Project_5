
const express = require("express");
require("dotenv").config();
require("./db/db");
const cors = require("cors");




//routers
const registerRouter = require("./routers/routes/auth/signUp");
const loginRouter = require("./routers/routes/auth/login");
const registerDoctorRouter = require("./routers/routes/dashboard");
const acceptDoctorRouter = require("./routers/routes/acceptDoctor")
const doctorDetailsRouter=require('./routers/routes/doctorProfile')

const storyRouter = require("./routers/routes/story")

const scheduleRoute=require("./routers/routes/schedule")
const foodTrackerRouter = require("./routers/routes/foodTracker");
const reviewRouter=require("./routers/routes/review")
// const storyRouter = require("./routers/routes/story")

const doctorRouter=require("./routers/routes/doctor")
const userRouter=require('./routers/routes/user')

const app = express();

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());


//app routers
app.use(registerRouter);
app.use(loginRouter);
app.use(registerDoctorRouter);
app.use(acceptDoctorRouter)

app.use(reviewRouter)
app.use(storyRouter)
app.use(doctorDetailsRouter)
app.use(foodTrackerRouter);


app.use(doctorRouter)
app.use(userRouter)
app.use(scheduleRoute)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
