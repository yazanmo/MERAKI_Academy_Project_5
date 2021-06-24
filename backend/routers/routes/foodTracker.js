const express = require("express");
const authentication = require("./../middlewares/authentication");
const {
  createFoodTracker,
  updateFoodTracker,
} = require("./../controllers/foodTracker");

const foodTracker = express.Router();

foodTracker.post("/foodTracker", authentication, createFoodTracker);
foodTracker.put("/foodTracker", authentication, updateFoodTracker);

module.exports = foodTracker;
