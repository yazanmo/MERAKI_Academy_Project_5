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
userRouter.get("/patient/breakfast/:date/:id", getUserBreakfast);
userRouter.post("/patient/lunch", getUserLunch);
userRouter.post("/patient/snack", getUserSnack);
userRouter.post("/patient/dinner", getUserDinner);
userRouter.post("/patient/glassesofwater", getUserGlassesOfWater);
userRouter.post("/patient/activetime", getUserActiveTime);
userRouter.put("/profile", auth, updateUserInformationById);
userRouter.delete("/profile", auth, deleteUserById);

module.exports = userRouter;
