const express = require("express");
const authentication = require("./../middlewares/authentication");


const{bookTime,getBookTime,getMyDoctorById,getScheduleUser,deleteScheduleUser,deleteScheduleDoctor}=require("./../controllers/schedule")

const scheduleRoute = express.Router();

scheduleRoute.post("/schedule/:id", authentication, bookTime);
scheduleRoute.get("/schedule", authentication, getBookTime);
scheduleRoute.get("/userSchedule",authentication,getScheduleUser)
scheduleRoute.delete("/delete-scheduleUser",authentication,deleteScheduleUser)
scheduleRoute.delete("/delete-scheduleDoctor",deleteScheduleDoctor)

module.exports = scheduleRoute;

