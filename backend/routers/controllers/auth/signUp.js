const db = require("./../../../db/db");
const bcrypt = require("bcrypt");
    
const register = (req, res) => {
  const { firstName, lastName, age, email, password, role_id, img } = req.body;

  const q = `SELECT email FROM users WHERE email = ?`;
  const data = [email];
  db.query(q, data, async (err, result) => {
    if (result.length == 0) {
      const query = `INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES (?,?,?,?,?,1,?);`;
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

module.exports = {
  register,
};
