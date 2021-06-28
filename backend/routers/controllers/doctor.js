const db = require("./../../db/db");

// this function to get all doctors
const getAllDoctors = (req, res) => {
  const query = `SELECT * FROM users WHERE role_id=2 AND is_deleted=0`;
  db.query(query, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

// this function to get doctor by id
const getDoctorById = (req, res) => {
  const id = req.params.id;
  const query = `SELECT users.firstName ,users.lastName,users.age,users.email,doctorsDetails.price , users.img, doctorsDetails.description ,
    doctorsDetails.Qualifications,doctorsDetails.practicalExperiences 
    FROM users 
    INNER JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE users.is_deleted =0  AND doctorsDetails.id=? `;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

module.exports = {
  getAllDoctors,
  getDoctorById,
};
