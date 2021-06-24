const express = require("express");
const authentication = require("./../middlewares/authentication")

const { createSuccessStory } = require("./../controllers/story");


const storyRouter = express.Router();


storyRouter.post('/success',authentication,createSuccessStory)

module.exports= storyRouter
