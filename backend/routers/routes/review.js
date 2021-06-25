const express = require("express");


const { createNewReview,getAllReviews,updateReviewById ,deleteReviewById} = require("./../controllers/review");

const reviewRouter = express.Router();

reviewRouter.post("/doctor/review", createNewReview);
reviewRouter.get("/doctor/reviwes/:id", getAllReviews);
reviewRouter.put("/doctor/review/:id", updateReviewById);
reviewRouter.delete('/doctor/review/:id',deleteReviewById)

module.exports = reviewRouter;
