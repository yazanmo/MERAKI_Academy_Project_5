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
foodTracker.get("/breakfast", authentication, getBreakfast);
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
foodTracker.delete("/breakfast", authentication, deleteToBreakfast);
foodTracker.delete("/snack", authentication, deleteToSnack);
foodTracker.delete("/lunch", authentication, deleteToLunch);
foodTracker.delete("/dinner", authentication, deleteToDinner);
foodTracker.delete("/glassesofwater", authentication, deleteToGlassesOfWater);
foodTracker.delete("/activetime", authentication, deleteToActiveTime);

// foodTracker.post("/foodTracker", authentication, createFoodTracker);
// foodTracker.put("/foodTracker", authentication, updateFoodTracker);

module.exports = foodTracker;
