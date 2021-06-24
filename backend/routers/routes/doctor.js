const express = require("express");

const {getAllDoctors,getDoctorById}=require("./../controllers/doctor");
const doctorRouter = express.Router();

doctorRouter.get("/doctor",getAllDoctors);
doctorRouter.get('/doctor/:id',getDoctorById)

module.exports = doctorRouter;