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
foodTracker.post("/breakfast/", authentication, getBreakfast);
foodTracker.post("/snack/", authentication, getSnack);
foodTracker.post("/lunch/", authentication, getLunch);
foodTracker.post("/dinner/", authentication, getDinner);
foodTracker.post("/glassesofwater/", authentication, getGlassesOfWater);
foodTracker.post("/activetime/", authentication, getActiveTime);

//post
foodTracker.post("/add/breakfast", authentication, addToBreakfast);
foodTracker.post("/add/snack", authentication, addToSnack);
foodTracker.post("/add/lunch", authentication, addToLunch);
foodTracker.post("/add/dinner", authentication, addToDinner);
foodTracker.post("/add/glassesofwater", authentication, addToGlassesOfWater);
foodTracker.post("/add/activetime", authentication, addToActiveTime);

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
