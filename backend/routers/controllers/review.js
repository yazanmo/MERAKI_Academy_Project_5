const db = require("./../../db/db");

const createNewReview = (req, res) => {
  const commenter_id = req.token.id;
  const { comment, rating, doctor_id } = req.body;
  const query = `INSERT INTO reviews (comment, rating,doctor_id,commenter_id ) VALUES (?,?,?,?)`;
  const data = [comment, rating, doctor_id, commenter_id];
  db.query(query, data, (err, results) => {
    if (err) res.status(400);
    res.status(201).json(result);
  });
};

const getAllReviews = (req, res) => {
  const id = req.params.id;
  const query = `SELECT *  FROM  reviews where is_deleted=0 AND doctor_id =${id}`;
  db.query(query, (err, result) => {
    if (err) res.status(500).send(err);

    res.status(200).json(result);
  });
};

const updateReviewById = (req, res) => {
  const id = req.params.id;
  const commenter_id = req.token.id;
  const { comment, rating } = req.body;

  const query = `UPDATE reviews SET comment=?, rating = ? WHERE id=${id} AND commenter_id= ${commenter_id}`;
  const data = [comment, rating];
  db.query(query, data, (err, results) => {
    if (err) res.status(500).send(err);
    res.status(200).json(results);
  });
};

const deleteReviewById = (req, res) => {
  const id = req.params.id;
  const commenter_id = req.token.id;

  const query = `UPDATE reviews SET is_deteted=1 WHERE id=${id}  AND commenter_id= ${commenter_id}`;

  db.query(query, (err, results) => {
    if (err) res.status(404).send(err);
    res.status(500).send("deleted is done");
  });
};

module.exports = {
  createNewReview,
  getAllReviews,
  updateReviewById,
  deleteReviewById,
};
