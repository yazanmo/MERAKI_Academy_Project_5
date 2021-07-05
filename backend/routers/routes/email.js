const express = require("express")

const {sendEmail} = require("./../controllers/email")

const sendEmailRouter = express.Router()

sendEmailRouter.post("/email",sendEmail)

module.exports = sendEmailRouter

