const db = require("./../../db/db");

// this function to get the user information

const getUserInformation = (req, res) => {
  const id = req.token.id;
  const query = `SELECT * FROM users WHERE id=${id}`;
  db.query(query, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

//this function for update information for user

const updateUserInformationById = (req, res) => {
  const id = req.token.id;
  const { firstName, lastName, age, email, img } = req.body;
  const query = `UPDATE users
    SET firstName=? ,lastName=?,age=? ,email=?,img=?
    WHERE id=${id}`;
  const array = [firstName, lastName, age, email, img];
  db.query(query, array, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

//this function for delete user by id

const deleteUserById = (req, res) => {
  const id = req.token.id;
  const query = `UPDATE users
     SET is_deleted=1
     WHERE id=${id}`;

  db.query(query, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};

module.exports = {
  getUserInformation,
  updateUserInformationById,
  deleteUserById,
};
