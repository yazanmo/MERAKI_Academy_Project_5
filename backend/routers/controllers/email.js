const db = require("./../../db/db");
const nodemailer = require("nodemailer");

//send email for doctors


const sendEmail = (req, res) => {
  const { doctor_id, password } = req.body;
const arr= [doctor_id]
let receiverEmail = null 
  const command = `SELECT * FROM doctors WHERE doctor_id = ?`;
  db.query(command,arr,(err,result)=>{
      if (err)  res.status(500).send(err)
      receiverEmail= result[0].email,
      res.json(result)
  })

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

module.exports = {sendEmail }


