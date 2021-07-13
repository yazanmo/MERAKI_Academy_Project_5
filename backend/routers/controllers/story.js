const { query } = require("./../../db/db");
const db = require("./../../db/db");

//as a user, I can add my story  to the success story

const createSuccessStory = (req, res) => {
  const { description } = req.body;
  // const description = req.body.description
  const user_id = req.token.id;
  console.log("user_id", user_id);
  const command = `INSERT INTO Success (description,user_id) VALUES (?,?)`;
  const arr = [description, user_id];
  db.query(command, arr, (err, result) => {
    if (err) res.status(400).send(err);
    const query = `SELECT * FROM Success`;
    db.query(query, (err, result) => {
      res.status(201).json(result);
    });
  });
};

//As a user, I should be able to get all successful stories

const getAllSuccessStories = (req, res) => {
  const command = `SELECT users.lastName,users.firstName ,users.img ,Success.description  FROM Success
   INNER JOIN users ON 
   users.id=Success.user_id WHERE 
   Success.is_deleted=0 `;
   const page = req.query.page
   const limit = req.query.limit
   const starterIndex = (page-1)*limit
   const endIndex = page * limit

   console.log("stoooories",page,limit);
  db.query(command, (err, results) => {
    if (err) res.status(404).send(err);
    console.log("storyyyy array",results);
    const result = results.slice(starterIndex,endIndex)
    console.log("resultSlice",result);
    res.status(200).json(results);
  });
};

//as a user, I can delete my story

const deleteStoryById = (req, res) => {
  const user_id = req.token.id;
  const command = `UPDATE success SET
is_deleted= 1 WHERE user_id=?`;
  const arr = [user_id];
  db.query(command, arr, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json("Deleted successfully");
  });
};

module.exports = {
  createSuccessStory,
  getAllSuccessStories,
  deleteStoryById,
};
