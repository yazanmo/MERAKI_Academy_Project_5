const express = require("express");

//functions
const {getAllDoctors,getDoctorById}=require("./../controllers/doctor");


const doctorRouter = express.Router();


//APIs
doctorRouter.get("/doctor",getAllDoctors);
doctorRouter.get('/doctor/:id',getDoctorById)

module.exports = doctorRouter;