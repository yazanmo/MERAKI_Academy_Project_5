const express = require("express");
const auth=require('./../middlewares/authentication')
const {getUserInformation,updateUserInformationById}=require('./../controllers/user')
const userRouter = express.Router();
userRouter.get("/profile",auth,getUserInformation)
userRouter.put("/profile",auth,updateUserInformationById)
module.exports = userRouter;