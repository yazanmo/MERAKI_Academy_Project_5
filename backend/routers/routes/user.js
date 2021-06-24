const express = require("express");
const auth=require('./../middlewares/authentication')
const {getUserInformation}=require('./../controllers/user')
const userRouter = express.Router();
userRouter.get("/profile",auth,getUserInformation)
module.exports = userRouter;