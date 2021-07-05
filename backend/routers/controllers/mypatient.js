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

module.exports = {
  buyService,
};
