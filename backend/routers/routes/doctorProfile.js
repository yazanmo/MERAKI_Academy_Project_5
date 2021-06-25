const express = require("express");
const authentication = require("./../middlewares/authentication");

const {createDetails,updateDetailsById} = require ('./../controllers/doctorProfile')

const doctorDetailsRouter = express.Router()
doctorDetailsRouter.post('/doctor/details/:id',authentication,createDetails)
doctorDetailsRouter.put('/doctor/details/:id',authentication,updateDetailsById)


module.exports = doctorDetailsRouter