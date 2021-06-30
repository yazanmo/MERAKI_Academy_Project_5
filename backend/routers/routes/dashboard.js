const express = require("express");
const {
  createUserDoctor,
  deleteDoctorById,
  creatAdmin,
} = require("./../../routers/controllers/dashboard");

const createUserDoctorRouter = express.Router();

createUserDoctorRouter.post("/doctor", createUserDoctor);
createUserDoctorRouter.delete("/doctor", deleteDoctorById);
createUserDoctorRouter.post("/admin", creatAdmin);


module.exports = createUserDoctorRouter;
