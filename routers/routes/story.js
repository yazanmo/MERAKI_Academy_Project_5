const express = require("express");
const authentication = require("./../middlewares/authentication");

const {
  createSuccessStory,
  getAllSuccessStories,
  deleteStoryById,
} = require("./../controllers/story");

const storyRouter = express.Router();

storyRouter.post("/story", authentication, createSuccessStory);
storyRouter.delete("/stories", authentication, deleteStoryById);
storyRouter.get("/stories", getAllSuccessStories);
storyRouter.delete("/stories", authentication, deleteStoryById);

module.exports = storyRouter;
