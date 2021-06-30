const db = require("./../../db/db");
// this function to get all doctors
const getAllDoctors = (req, res) => {
 
  const query = `SELECT  * FROM users 
  RIGHT JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE users.is_deleted =0 AND role_id=2`;
  db.query(query, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};
const doctorDetailsFilter = (req, res) => {
  const { num1, num2 } = req.body;
  const query = `SELECT  * FROM users 
  RIGHT JOIN doctorsDetails ON users.id = doctorsDetails.user_id WHERE users.is_deleted =0 AND role_id=2
   AND price BETWEEN ? AND ? `;
  const data = [num1, num2];
  db.query(query, data,(err, result) => {
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



const allInfoOfDoctor = (req, res) => {

  const { FirstName, lastName, age, email,password,description,
    Qualifications,practicalExperiences,qualificationsFile } = req.body;
    const arr = [
      FirstName, lastName, age, email,password,description,
      Qualifications,practicalExperiences,qualificationsFile];

      const command = `INSERT INTO doctors  (FirstName, lastName, description,email,
        Qualifications,practicalExperiences,qualificationsFile) VALUES (?,?,?,?,?,?,?)`;
        
      

      db.query(command, arr, (err, result) => {
        if (err) res.status(400).send(err);
        res.status(201).json(result);
      });

     
}



module.exports = {
  getAllDoctors,
  getDoctorById,
  doctorDetailsFilter,
  allInfoOfDoctor,
  
};