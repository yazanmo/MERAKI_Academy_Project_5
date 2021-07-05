const express = require("express");
const authentication = require("./../middlewares/authentication");

const{BookTime}=require("./../controllers/schedule")

const scheduleRoute=express.Router();



scheduleRoute.post("/schedule/:id",authentication,BookTime)
module.exports = scheduleRoute;