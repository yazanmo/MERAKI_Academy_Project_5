const express = require("express");
const {
  createUserDoctor,
  deleteDoctorById,
} = require("./../../routers/controllers/dashboard");

const createUserDoctorRouter = express.Router();

createUserDoctorRouter.post("/doctor", createUserDoctor);
createUserDoctorRouter.delete("/doctor", deleteDoctorById);

module.exports = createUserDoctorRouter;
