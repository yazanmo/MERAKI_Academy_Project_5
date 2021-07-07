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
  const query = `SELECT firstName ,lastName FROM doctorsDetails JOIN purchased ON purchased.doctorsService_id=doctorsDetails.id
   JOIN users as u on u.id= doctorsDetails.user_id where purchased.user_id= ?;
  `;
  const data = [user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

const getMyPatient = (req, res) => {
  const user_id = req.token.id;

  const query = `SELECT firstName ,lastName FROM doctorsDetails JOIN purchased ON purchased.doctorsService_id=doctorsDetails.id
   JOIN users as u on u.id= purchased.user_id where purchased.user_id= ?;
  `;

  const query = ` SELECT doctorsDetails.user_id AS user_id
    FROM purchased
    INNER JOIN users
    ON  users.id =purchased.doctorsService_id
    INNER JOIN doctorsDetails
     ON  doctorsDetails.id =purchased.doctorsService_id WHERE users.id = ? `;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    const query = `SELECT users.firstName ,users.lastName  ,users.age , users.img,doctorsDetails.user_id AS user_id
      FROM doctorsDetails
      INNER JOIN users
      ON  users.id = doctorsDetails.user_id `;
    // const data = [result[0].user_id];

    db.query(query, (err, results) => {
      if (err) res.status(400).send(err);
      res.status(200).json(results);
    });
  });
};

module.exports = {
  buyService,
  getMyDoctor,
  getMyPatient,
};
