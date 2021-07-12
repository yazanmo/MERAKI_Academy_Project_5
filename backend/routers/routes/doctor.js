const express = require("express");

//functions
const {
  getAllDoctors,
  getDoctorById,
  doctorDetailsFilter,
  allInfoOfDoctor,
  getAllDoctorsAdmin,
  deleteDoctorAdmin,
  searchDoctor,
  deleteDoctorUsers,
  
} = require("./../controllers/doctor");

const doctorRouter = express.Router();

//APIs
doctorRouter.get("/doctor", getAllDoctors);
doctorRouter.get("/doctor/:id", getDoctorById);
doctorRouter.post("/doctors", doctorDetailsFilter);
doctorRouter.post("/info", allInfoOfDoctor);
doctorRouter.get("/doctoradmin", getAllDoctorsAdmin);
doctorRouter.put("/doctordelete", deleteDoctorAdmin);
doctorRouter.post("/search", searchDoctor);
doctorRouter.put("/admin/delete/:id",deleteDoctorUsers)

module.exports = doctorRouter;
