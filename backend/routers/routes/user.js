const express = require("express");
const auth = require("./../middlewares/authentication");

//functions
const {
  getUserInformation,
  updateUserInformationById,
  deleteUserById,
} = require("./../controllers/user");


const userRouter = express.Router();

//APIs
userRouter.get("/profile", auth, getUserInformation);
userRouter.put("/profile", auth, updateUserInformationById);
userRouter.delete("/profile", auth, deleteUserById);
module.exports = userRouter;
