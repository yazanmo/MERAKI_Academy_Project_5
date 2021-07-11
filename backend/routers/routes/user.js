const express = require("express");
const auth = require("./../middlewares/authentication");

//functions
const {
  getUserInformation,
  updateUserInformationById,
  deleteUserById,
  getUserBreakfast,
  getUserSnack,
  getUserLunch,
  getUserDinner,
  getUserGlassesOfWater,
  getUserActiveTime,
} = require("./../controllers/user");

const userRouter = express.Router();

//APIs
userRouter.get("/profile", auth, getUserInformation);
userRouter.post("/patient/breakfast", getUserBreakfast);
userRouter.get("/patient/snack/:date/:id", getUserSnack);
userRouter.get("/patient/lunch", getUserLunch);
userRouter.get("/patient/dinner/:date/:id", getUserDinner);
userRouter.get("/patient/glassesofwater/:date/:id", getUserGlassesOfWater);
userRouter.get("/patient/activetime/:date/:id", getUserActiveTime);

userRouter.put("/profile", auth, updateUserInformationById);
userRouter.delete("/profile", auth, deleteUserById);

module.exports = userRouter;
