const db = require("./../../db/db");
const nodemailer = require("nodemailer");

//send email for doctors

const sendEmil = (req, res) => {
  const { receiverEmail, password } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "process.env.EMAIL",
      pass: "process.env.PASSWORD",
    },
  });

  let mailOptions = {
    from: "ATeamMeraki@gmail.com",
    to: `${receiverEmail}`,
    subject: "Welcome to you in our family",
    text: `your password : ${password}`,
  };

transporter.sendMail(mailOptions,(err,data)=>{
    if(err){console.log(err);}
    else{console.log('email sent');}
})


};


