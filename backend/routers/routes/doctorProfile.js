const express = require("express");
const authentication = require("./../middlewares/authentication");

const {createDetails,updateDetailsById,deleteDetailsById,getDoctorProfile} = require ('./../controllers/doctorProfile')

const doctorDetailsRouter = express.Router()
doctorDetailsRouter.get('/doctor/details',authentication,getDoctorProfile)
doctorDetailsRouter.post('/doctor/details',authentication,createDetails)
doctorDetailsRouter.put('/details',authentication,updateDetailsById)
doctorDetailsRouter.delete('/doctor/details',authentication,deleteDetailsById)



module.exports = doctorDetailsRouter