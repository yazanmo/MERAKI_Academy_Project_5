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
  const query = ` SELECT doctorsDetails.user_id AS doctor_id
  FROM purchased
  LEFT JOIN users
  ON  users.id =purchased.user_id
  LEFT JOIN doctorsDetails
  ON  doctorsDetails.id =purchased.doctorsService_id WHERE users.id = ? `;
  const data = [user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(400).send(err);
    const query = `SELECT users.firstName ,users.lastName  ,doctorsDetails.description  ,doctorsDetails.id AS id_service  ,users.img, doctorsDetails.user_id AS doctor_id,doctorsDetails.price
    FROM doctorsDetails
    INNER JOIN users
    ON  users.id = doctorsDetails.user_id `;
    const data = [result[0].doctor_id];

    db.query(query, data, (err, results) => {
      if (err) res.status(400).send(err);

      res.status(200).json(results);
    });
  });
};

const getMyPatient = (req, res) => {
  const user_id = req.token.id;
  const query = ` SELECT doctorsDetails.user_id AS user_id
    FROM purchased
    LEFT JOIN users
    ON  users.id =purchased.doctorsService_id
    LEFT JOIN doctorsDetails
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
