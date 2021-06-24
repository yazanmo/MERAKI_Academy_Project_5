const express = require("express");
const auth = require("./../middlewares/authentication");
const {
  getUserInformation,
  updateUserInformationById,
  deleteUserById,
} = require("./../controllers/user");
const userRouter = express.Router();
userRouter.get("/profile", auth, getUserInformation);
userRouter.put("/profile", auth, updateUserInformationById);
userRouter.delete("/profile", auth, deleteUserById);
module.exports = userRouter;
