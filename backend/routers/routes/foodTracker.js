const express = require("express");

const { createFoodTracker } = require("./../controllers/foodTracker");

const foodTracker = express.Router();

foodTracker.post("/foodTracker", createFoodTracker);

module.exports = foodTracker;
