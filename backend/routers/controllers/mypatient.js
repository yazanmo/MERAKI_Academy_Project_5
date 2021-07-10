const db = require("./../../db/db");

const buyService = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;

  const query = `INSERT INTO purchased (doctorsService_id,user_id) VALUES (?,?)`;
  const data = [id, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(400).send("insert is not done");
    res.status(200).send("insert is done");
  });
};

const getMyDoctor = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT doctorsDetails.user_id AS doctor_id,doctorsDetails.description  , users.*, purchased.* FROM doctorsDetails JOIN purchased ON purchased.doctorsService_id=doctorsDetails.id
   JOIN users on users.id= doctorsDetails.user_id where purchased.user_id= ?;
  `;
  const data = [user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

const getMyPatient = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT  purchased.*  , users.* ,doctorsDetails.user_id AS doctor_id  FROM users JOIN purchased ON purchased.user_id=users.id
  JOIN doctorsDetails ON purchased.doctorsService_id=doctorsDetails.id WHERE purchased.doctorsService_id
   AND doctorsDetails.user_id= ? ;
  `;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

module.exports = {
  buyService,
  getMyDoctor,
  getMyPatient,
};
