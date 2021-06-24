const express = require("express");

const {getAllDoctors,cerateDoctor}=require("./../controllers/doctor");
const doctorRouter = express.Router();

doctorRouter.get("/doctor",getAllDoctors);
doctorRouter.post("/doctor",cerateDoctor)

module.exports = doctorRouter;