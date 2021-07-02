const express = require("express");
const authentication = require("./../middlewares/authentication");

const {
  createNewReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
} = require("./../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/doctor/review", authentication, createNewReview);
reviewRouter.get("/doctor/review/:id", getAllReviews);
reviewRouter.put("/doctor/review/:id", authentication, updateReviewById);
reviewRouter.delete("/review/:id", authentication, deleteReviewById);

module.exports = reviewRouter;
