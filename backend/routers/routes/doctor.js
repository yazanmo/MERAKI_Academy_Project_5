const express = require("express");

const {getAllDoctors}=require("./../controllers/doctor");
const doctorRouter = express.Router();

doctorRouter.get("/doctor",getAllDoctors);


module.exports = doctorRouter;