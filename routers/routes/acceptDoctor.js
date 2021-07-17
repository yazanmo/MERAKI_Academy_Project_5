const express=require("express")

const {acceptDoctor}=require("./../controllers/acceptDoctor")

const acceptDoctorRouter = express.Router()

acceptDoctorRouter.post("/accept/doctor/:doctor_id",acceptDoctor)




module.exports = acceptDoctorRouter