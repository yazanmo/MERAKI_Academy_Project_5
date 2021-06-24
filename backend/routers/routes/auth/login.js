const express = require("express");
const authentication = require("./../../middlewares/authentication");
const { login } = require("./../../controllers/auth/login");

const loginRouter = express.Router();
  
loginRouter.post("/login", login);

module.exports = loginRouter;
