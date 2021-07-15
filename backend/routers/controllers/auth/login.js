const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = (req, res) => {
  console.log("google login",req.body);
  const { email, password } = req.body;
  const query = `SELECT * FROM users WHERE email = ? AND is_deleted =0`;
  const data = [email];
  db.query(query, data, (err, result) => {
    if (err) throw err;
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
            expiresIn: "60000000000000m",
          };
          res.json({
            token: jwt.sign(payload, SECRET, option),
            role_id: result[0].role_id,
            user_id: result[0].id,
          });
        } else {
          res.status(500).send("password is not exist");
        }
      });
    } else {
      res.status(500).send("email is not exist");
    }
  });
};

module.exports = {
  login,
};
