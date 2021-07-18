const db = require("./../../db/db");
const nodemailer = require("nodemailer");
require("dotenv").config();

//send email for doctors

const sendEmail = (req, res) => {
  const { doctor_id, password } = req.body;
  const arr = [doctor_id];
  let receiverEmail = "";
  const command = `SELECT * FROM doctors WHERE doctor_id = ?`;
  db.query(command, arr, async (err, result) => {
    if (err) res.status(500).send(err);
    receiverEmail = await result[0].email;

    send(receiverEmail);
  });
  console.log("receiverEmailOUT", receiverEmail);

  const send = (receiverEmail) => {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: "ATeamMeraki@gmail.com",
      to: `${receiverEmail}`,
      subject: "Welcome to you in our family",
      text: `You have been chosen to be part of our family,
      We hope you will do your best to help our customers

     your email is : ${receiverEmail}
     your password is: ${password}


     Health care administration
      `,
    };

    console.log("mailOptions", mailOptions.to);
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log("error in sending email", err);
      } else {
        console.log("email sent");
      }
    });
  };
};

module.exports = { sendEmail };
