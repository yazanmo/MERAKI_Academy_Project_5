const db = require("./../../db/db");

const buyService = (req, res) => {
  const user_id = req.token.id;
  const doctorsService_id = req.params.id;

  const query = `INSERT INTO purchased (doctorsService_id,user_id) VALUES (?,?)`;
  const data = [doctorsService_id, user_id];

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
    console.log(result[0].doctor_id);
    const query = `SELECT users.firstName ,users.lastName  ,doctorsDetails.description , doctorsDetails.user_id AS doctor_id,doctorsDetails.price
    FROM doctorsDetails
        INNER JOIN users
            ON  users.id = doctorsDetails.user_id WHERE users.id = ? `;
    const data = [result[0].doctor_id];

    db.query(query, data, (err, results) => {
      if (err) res.status(400).send(err);
      console.log(result);

      res.status(200).json(results);
    });
  });

  const getMyPatient= ()=>{
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
      console.log(result[0].doctor_id);

  }
  //   `
  // SELECT

  // ``SELECT users.firstName ,users.lastName , purchased.* ,doctorsDetails.description , doctorsDetails.user_id AS doctor_id,doctorsDetails.price
  //           FROM purchased
  //               INNER JOIN users
  //                   ON  users.id =purchased.user_id
  //                   INNER JOIN doctorsDetails
  //                   ON  doctorsDetails.id =purchased.doctorsService_id
  //                   INNER JOIN doctorsDetails
  //                   ON  doctorsDetails.users_id =users.id`;
};

module.exports = {
  buyService,
  getMyDoctor,
};
