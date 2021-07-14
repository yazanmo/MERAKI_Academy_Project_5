const db = require("./../../db/db");

const addToBreakfast = (req, res) => {
  const user_id = req.token.id;
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;

  const query = `INSERT INTO breakfast (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?);`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
  db.query(query, data, (err, result) => {
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
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;
  const query = `INSERT INTO snack (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
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
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;
  const query = `INSERT INTO lunch  (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
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
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;
  const query = `INSERT INTO dinner  (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
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
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;
  const query = `INSERT INTO glassesOfWater (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
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
  const {
    name,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  } = req.body;
  const query = `INSERT INTO activeTime (name, user_id ,calories,date,carbohydrates_total_g,cholesterol_mg,fat_saturated_g,fiber_g,potassium_mg,protein_g,serving_size_g,sodium_mg,sugar_g) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const data = [
    name,
    user_id,
    calories,
    date,
    carbohydrates,
    cholesterol,
    fat_saturated,
    fiber,
    potassium,
    protein,
    serving,
    sodium_mg,
    sugar_g,
  ];
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
  const id = req.params.id;
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
  const id = req.params.id;
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
  const id = req.params.id;
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
  const id = req.params.id;
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
  const id = req.params.id;
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
  const id = req.params.id;
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

const getBreakfast = (req, res) => {
  const user_id = req.token.id;
  const date = req.body.date;
  const query = `SELECT breakfast.* ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN breakfast ON foodTraker.breakfast_id = breakfast.breakfast_id 
  WHERE foodTraker.user_id =? AND breakfast.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getSnack = (req, res) => {
  const user_id = req.token.id;
  const date = req.body.date;
  const query = `SELECT snack.*,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN snack ON foodTraker.snack_id = snack.snack_id 
  WHERE foodTraker.user_id =? AND snack.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");

    res.status(200).json(result);
  });
};

const getLunch = (req, res) => {
  const user_id = req.token.id;
  const date = req.body.date;
  const query = `SELECT lunch.* ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN lunch ON foodTraker.lunch_id = lunch.lunch_id 
  WHERE foodTraker.user_id =? AND lunch.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");

    res.status(200).json(result);
  });
};

const getDinner = (req, res) => {
  const user_id = req.token.id;
  const date = req.body.date;
  const query = `SELECT dinner.* ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN dinner ON foodTraker.dinner_id = dinner.dinner_id 
  WHERE foodTraker.user_id =? AND dinner.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getGlassesOfWater = (req, res) => {
  const user_id = req.token.id;
  const date = req.body.date;
  const query = `SELECT glassesOfWater.* ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN glassesOfWater ON foodTraker.glassesOfWater_id = glassesOfWater.glassesOfWater_id 
  WHERE foodTraker.user_id =? AND glassesOfWater.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

const getActiveTime = (req, res) => {
  const user_id = req.token.id;
  const date = req.params.date;
  const query = `SELECT activeTime.*
  FROM foodTraker
  INNER JOIN activeTime ON foodTraker.activeTime_id = activeTime.activeTime_id 
  WHERE foodTraker.user_id =? AND activeTime.date = ?`;
  const data = [user_id, date];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");
    res.status(200).json(result);
  });
};

module.exports = {
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
