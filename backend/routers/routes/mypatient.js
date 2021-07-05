const express = require("express");
const authentication = require("./../middlewares/authentication");

const { buyService, getMyDoctor } = require("./../controllers/mypatient");

const myPatient = express.Router();

myPatient.post("/mypatient/:id", authentication, buyService);
myPatient.get("/mydoctor", authentication, getMyDoctor);

module.exports = myPatient;
