const express = require("express");
const authentication = require("./../middlewares/authentication");
const {
  // createFoodTracker,
  // updateFoodTracker,

  addToBreakfast,
  addToSnack,
  addToLunch,
  addToDinner,
  addToGlassesOfWater,
  addToActiveTime,

  updateBreakfast,
  updateSnack,
  updateLunch,
  updateDinner,
  updateGlassesOfWater,
  updateActiveTime,

  deleteToBreakfast,
  deleteToSnack,
  deleteToLunch,
  deleteToDinner,
  deleteToGlassesOfWater,
  deleteToActiveTime,

  getBreakfast,
  getSnack,
  getLunch,
  getDinner,
  getGlassesOfWater,
  getActiveTime,
} = require("./../controllers/foodTracker");

const foodTracker = express.Router();

//get
foodTracker.get("/breakfast/:date", authentication, getBreakfast);
foodTracker.get("/snack", authentication, getSnack);
foodTracker.get("/lunch", authentication, getLunch);
foodTracker.get("/dinner", authentication, getDinner);
foodTracker.get("/glassesofwater", authentication, getGlassesOfWater);
foodTracker.get("/activetime", authentication, getActiveTime);

//post
foodTracker.post("/breakfast", authentication, addToBreakfast);
foodTracker.post("/snack", authentication, addToSnack);
foodTracker.post("/lunch", authentication, addToLunch);
foodTracker.post("/dinner", authentication, addToDinner);
foodTracker.post("/glassesofwater", authentication, addToGlassesOfWater);
foodTracker.post("/activetime", authentication, addToActiveTime);

//put
foodTracker.put("/breakfast", authentication, updateBreakfast);
foodTracker.put("/snack", authentication, updateSnack);
foodTracker.put("/lunch", authentication, updateLunch);
foodTracker.put("/dinner", authentication, updateDinner);
foodTracker.put("/glassesofwater", authentication, updateGlassesOfWater);
foodTracker.put("/activetime", authentication, updateActiveTime);

//delete
foodTracker.delete("/breakfast/:id", authentication, deleteToBreakfast);
foodTracker.delete("/snack/:id", authentication, deleteToSnack);
foodTracker.delete("/lunch/:id", authentication, deleteToLunch);
foodTracker.delete("/dinner/:id", authentication, deleteToDinner);
foodTracker.delete(
  "/glassesofwater/:id",
  authentication,
  deleteToGlassesOfWater
);
foodTracker.delete("/activetime/:id", authentication, deleteToActiveTime);

module.exports = foodTracker;
