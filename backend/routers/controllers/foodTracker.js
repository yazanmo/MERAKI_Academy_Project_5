const db = require("./../../db/db");

const createFoodTracker = (req, res) => {
  const { breakfast, snack, lunch, glassesOfWater, activeTime, user_id } =
    req.body;

  const query = `INSERT INTO foodTraker (breakfast,snack,lunch,glassesOfWater,activeTime,user_id) VALUES (?,?,?,?,?,?)`;
  const data = [breakfast, snack, lunch, glassesOfWater, activeTime, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
};

const updateFoodTrackerById = (req, res) => {};

module.exports = {
  createFoodTracker,
};
