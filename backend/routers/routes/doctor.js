const express = require("express");

//functions
const {getAllDoctors,getDoctorById,doctorDetailsFilter,allInfoOfDoctor,getAllDoctorsAdmin,deleteDoctorAdmin}=require("./../controllers/doctor");


const doctorRouter = express.Router();


//APIs
doctorRouter.get("/doctor",getAllDoctors);
doctorRouter.get('/doctor/:id',getDoctorById);
doctorRouter.post('/doctors',doctorDetailsFilter);
doctorRouter.post('/info',allInfoOfDoctor);
doctorRouter.get("/doctoradmin",getAllDoctorsAdmin);
doctorRouter.delete("/doctordelete/:id", deleteDoctorAdmin);;


module.exports = doctorRouter;