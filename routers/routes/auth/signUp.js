const express = require("express");
const { register } = require("./../../controllers/auth/signUp");

const registerRouter = express.Router();
    
registerRouter.post("/register", register);

module.exports = registerRouter;
