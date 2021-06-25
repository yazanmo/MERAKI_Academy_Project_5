const db = require("../../db/db");

//as a doctor, I can see my profile

const getDoctorProfile = (req, res) => {
 const user_id = req.token.id;
  const command = `SELECT users.firstName ,users.lastName,users.age,users.email,doctorsDetails.price,
doctorsDetails.Qualifications,doctorsDetails.practicalExperiences
FROM users 
INNER JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE  user_id = ?`;
const arr =[user_id]
db.query(command,arr,(err,result)=>{
  if (err) res.status(500).send(err);
  res.status(201).json(result);
})

};

//as a doctor, after the admin accept me I can full my information

const createDetails = (req, res) => {
  const { description, price, Qualifications, practicalExperiences } = req.body;
  const user_id = req.token.id;
  const arr = [
    description,
    price,
    Qualifications,
    practicalExperiences,
    user_id,
  ];

  const command = `INSERT INTO doctorsDetails  (  description,price, Qualifications, practicalExperiences,user_id) VALUES (?,?,?,?,?)`;
  db.query(command,arr, (err, result) => {
    if (err) res.status(500).send(err);
    res.status(201).json(result);
  });
};

//as a doctor i can update my information

const updateDetailsById = (req, res) => {
  const user_id = req.token.id;
  const {description, Qualifications, practicalExperiences, qualificationsFile } = req.body;
  const query = `UPDATE doctorsDetails SET
  description=?, Qualifications=?,practicalExperiences=?,qualificationsFile=? WHERE user_id=?`;
  const data = [
    description,
    Qualifications,
    practicalExperiences,
    qualificationsFile,
    user_id,
  ];

  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
};

//as a doctor, i can delete my details

const deleteDetailsById = (req, res) => {
  const user_id = req.token.id;
  const command = `DELETE FROM doctorsDetails WHERE user_id =? `;
  const arr = [user_id];
  db.query(command,arr, (err, result) => {
    if (err) res.status(500).send(err);
    res.status(202).json(result);
  });
};

module.exports = {
  createDetails,
  updateDetailsById,
  deleteDetailsById,
  getDoctorProfile
};
