const express = require("express");
const authentication = require("./../middlewares/authentication");

const { buyService } = require("./../controllers/mypatient");

const myPatient = express.Router();

myPatient.post("/mypatient/:id", authentication, buyService);

module.exports = myPatient;
