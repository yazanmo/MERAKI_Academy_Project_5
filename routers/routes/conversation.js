const express = require("express");
const authentication = require("./../middlewares/authentication");

const {
  newConversation,
  getConversation,
  newMessages,
} = require("./../controllers/conversation");

const conversation = express.Router();

conversation.post("/conversation", authentication, newConversation);
conversation.post("/conversation/message", newMessages);
conversation.post("/conversation/con", getConversation);

module.exports = conversation;
