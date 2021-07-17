const express = require("express");
const authentication = require("./../middlewares/authentication");

const {
  buyService,
  getMyDoctor,
  getMyPatient,
} = require("./../controllers/mypatient");

const myPatient = express.Router();

myPatient.post("/mypatient", authentication, buyService);
myPatient.get("/mydoctor", authentication, getMyDoctor);
myPatient.get("/mypatient", authentication, getMyPatient);

module.exports = myPatient;
