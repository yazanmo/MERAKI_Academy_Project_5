const express = require("express");
const { createUserDoctor } = require("./../../routers/controllers/dashboard");

const createUserDoctorRouter = express.Router();

createUserDoctorRouter.post("/registerDoctor", createUserDoctor);

module.exports = createUserDoctorRouter;
