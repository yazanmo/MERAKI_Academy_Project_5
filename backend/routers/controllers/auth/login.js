const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ?`;
  const data = [email];
  db.query(query, data, (err, result) => {
    if (err) return res.send("email is not exist");
    if (result[0]) {
      bcrypt.compare(password, result[0].password, (err, result2) => {
        if (err) throw err;

        if (result2 === true) {
          const SECRET = process.env.SECRET;
          const payload = {
            id: result[0].id,
            role_id: result[0].role_id,
          };
          const option = {
            expiresIn: "60m",
          };
          res.json({ token: jwt.sign(payload, SECRET, option) });
        }
      });
    }
  });
};

module.exports = {
  login,
};
