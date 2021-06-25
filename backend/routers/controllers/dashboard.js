const db = require("./../../db/db");
const bcrypt = require("bcrypt");

const createUserDoctor = (req, res) => {
  const { firstName, lastName, age, email, password, role_id, img } = req.body;

  const q = `SELECT email FROM users WHERE email = ?`;
  const data = [email];
  db.query(q, data, async (err, result) => {
    if (result.length == 0) {
      const query = `INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES (?,?,?,?,?,2,?);`;
      let pass = await bcrypt.hash(password, 10);
      const arr = [firstName, lastName, age, email, pass, role_id, img];
      db.query(query, arr, (err1, result) => {
        if (err1) throw err1;
        const query = `SELECT * FROM users WHERE email = ?;`;
        const data3 = [email];
        db.query(query, data3, (err, result3) => {
          if (err) throw err;
          res.json(result3);
        });
      });
    } else {
      res.send("email is exist");
    }
  });
};
const deleteDoctorById = (req, res) => {
  const id = req.body.id;
  const query = `DELETE FROM users WHERE id = ? AND role_id=2`;
  const data = [id];

  db.query(query, data, (err, result) => {
    if (err) res.status(404).send("id is not exist");
    res.status(200).send("deleted is done");
  });
};
module.exports = {
  createUserDoctor,
  deleteDoctorById,
};
