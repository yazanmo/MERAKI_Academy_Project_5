const db = require("./../../db/db");

const addToBreakfast = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO breakfast (name, user_id) VALUES (?,?);`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    console.log(result.insertId);
    if (err) throw err;
    const query = `INSERT INTO foodTraker (breakfast_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done ");
      res.status(200).send("insert is done");
    });
  });
};

const addToSnack = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO snack (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `INSERT INTO foodTraker (snack_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done");
      res.status(200).send("insert is done");
    });
  });
};

const addToLunch = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO lunch (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `INSERT INTO foodTraker (lunch_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done");
      res.status(200).send("insert is done");
    });
  });
};

const addToDinner = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO dinner (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `INSERT INTO foodTraker (dinner_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done");
      res.status(200).send("insert is done");
    });
  });
};

const addToGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO glassesOfWater (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `INSERT INTO foodTraker (glassesOfWater_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done");
      res.status(200).send("insert is done");
    });
  });
};

const addToActiveTime = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `INSERT INTO activeTime (name, user_id) VALUES (?,?)`;
  const data = [name, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `INSERT INTO foodTraker (activeTime_id, user_id) VALUE(?,?)`;
    const data = [result.insertId, user_id];
    db.query(query, data, (err, result) => {
      if (err) return res.status(500).send("insert is not done");
      res.status(200).send("insert is done");
    });
  });
};

const updateBreakfast = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const { name } = req.body;
  const query = `UPDATE breakfast SET
  name=?  WHERE user_id=? AND breakfast_id = ?`;
  const data = [name, user_id, id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};
const updateSnack = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `UPDATE snack SET
  name=? WHERE user_id=?`;
  const data = [name, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

const updateLunch = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `UPDATE lunch SET
  name=? WHERE user_id=?`;
  const data = [name, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

const updateDinner = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `UPDATE dinner SET
  name=? WHERE user_id=?`;
  const data = [name, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

const updateGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `UPDATE glassesOfWater SET
  name=? WHERE user_id=?`;
  const data = [name, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

const updateActiveTime = (req, res) => {
  const user_id = req.token.id;
  const { name } = req.body;
  const query = `UPDATE activeTime SET
  name=? WHERE user_id=?`;
  const data = [name, user_id];

  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("update is not done");
    res.status(200).json(result);
  });
};

const deleteToBreakfast = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE breakfast_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM breakfast WHERE breakfast_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

const deleteToSnack = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE snack_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM snack WHERE snack_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

const deleteToLunch = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE lunch_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM lunch WHERE lunch_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

const deleteToDinner = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE dinner_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM dinner WHERE dinner_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

const deleteToGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE glassesOfWater_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM glassesOfWater WHERE glassesOfWater_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

const deleteToActiveTime = (req, res) => {
  const user_id = req.token.id;
  const id = req.body.id;
  const query = `DELETE FROM foodTraker WHERE activeTime_id = ? AND user_id= ?`;
  const data = [id, user_id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    const query = `DELETE FROM activeTime WHERE activeTime_id = ? AND user_id= ? `;
    const data = [id, user_id];
    db.query(query, data, (err, result) => {
      if (err) res.status(400).send("DELETE is not done");
      res.status(200).json(result);
    });
  });
};

// const createFoodTracker = (req, res) => {
//   const user_id = req.token.id;
//   const { breakfast, snack, lunch, dinner, glassesOfWater, activeTime } =
//     req.body;

//   const query = `INSERT INTO foodTraker (breakfast,snack,lunch,dinner,glassesOfWater,activeTime,user_id) VALUES (?,?,?,?,?,?,?)`;
//   const data = [
//     breakfast,
//     snack,
//     lunch,
//     dinner,
//     glassesOfWater,
//     activeTime,
//     user_id,
//   ];
//   db.query(query, data, (err, result) => {
//     if (err) res.status(500).send("insert is not done");
//     res.status(200).json(result);
//   });
// };

// const updateFoodTracker = (req, res) => {
//   const user_id = req.token.id;
//   const { breakfast, snack, lunch, dinner, glassesOfWater, activeTime } =
//     req.body;
//   const query = `UPDATE foodTraker SET
//   breakfast=?,snack=?,lunch=?,dinner=?,glassesOfWater=?,activeTime=? WHERE user_id=?`;
//   const data = [
//     breakfast,
//     snack,
//     lunch,
//     dinner,
//     glassesOfWater,
//     activeTime,
//     user_id,
//   ];

//   db.query(query, data, (err, result) => {
//     if (err) res.status(500).send("update is not done");
//     res.status(200).json(result);
//   });
// };

const getBreakfast = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT breakfast.breakfast_id, breakfast.name as breakfast ,breakfast.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN breakfast ON foodTraker.breakfast_id = breakfast.breakfast_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getSnack = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT snack.snack_id,  snack.name as snack ,snack.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN snack ON foodTraker.snack_id = snack.snack_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getLunch = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT lunch.lunch_id, lunch.name as lunch ,lunch.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN lunch ON foodTraker.lunch_id = lunch.lunch_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getDinner = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT dinner.dinner_id, dinner.dinner_id, dinner.name as dinner ,dinner.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN dinner ON foodTraker.dinner_id = dinner.dinner_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT glassesOfWater.glassesOfWater_id, glassesOfWater.name as glassesOfWater ,glassesOfWater.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN glassesOfWater ON foodTraker.glassesOfWater_id = glassesOfWater.glassesOfWater_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getActiveTime = (req, res) => {
  const user_id = req.token.id;
  const query = `SELECT activeTime.activeTime_id, activeTime.name as activeTime ,activeTime.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN activeTime ON foodTraker.activeTime_id = activeTime.activeTime_id 
  WHERE foodTraker.user_id =?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

// const getFoodTraker = (req, res) => {
//   const user_id = req.token.id;
//   const query = `SELECT breakfast.name , snack.name  , lunch.name ,dinner.name , glassesOfWater.name , activeTime.name
//   FROM foodTraker
//   INNER JOIN breakfast ON foodTraker.breakfast_id = breakfast.breakfast_id
//   INNER JOIN snack ON foodTraker.snack_id = snack.snack_id
//   INNER JOIN lunch ON foodTraker.lunch_id = lunch.lunch_id
//   INNER JOIN dinner ON foodTraker.dinner_id = dinner.dinner_id
//   INNER JOIN glassesOfWater ON foodTraker.glassesOfWater_id = glassesOfWater.glassesOfWater_id
//   INNER JOIN activeTime ON foodTraker.activeTime_id = activeTime.activeTime_id
//   WHERE user_id =?
//   `;
//   const data = [user_id];

//   db.query(query, data, (err, result) => {
//     if (err) res.status(500).send("select is not done");
//     res.status(200).json(result);
//   });
// };

module.exports = {
  // createFoodTracker,
  // updateFoodTracker,
  addToBreakfast,
  addToSnack,
  addToLunch,
  addToDinner,
  addToGlassesOfWater,
  addToActiveTime,

  updateBreakfast,
  updateSnack,
  updateLunch,
  updateDinner,
  updateGlassesOfWater,
  updateActiveTime,

  deleteToBreakfast,
  deleteToSnack,
  deleteToLunch,
  deleteToDinner,
  deleteToGlassesOfWater,
  deleteToActiveTime,

  getBreakfast,
  getSnack,
  getLunch,
  getDinner,
  getGlassesOfWater,
  getActiveTime,
};
