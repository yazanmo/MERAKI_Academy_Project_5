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

const getUserById = (req, res) => {
  const user_id = req.body.id;
  const query = `SELECT * FROM users WHERE id=?`;
  const data = [user_id];
  db.query(query, data, (err, result) => {
    if (err) res.status(500).send("select is not done");

    const query = `SELECT breakfast.breakfast_id, breakfast.name as breakfast ,breakfast.user_id ,foodTraker.foodTraker_id
  FROM foodTraker
  INNER JOIN breakfast ON foodTraker.breakfast_id = breakfast.breakfast_id 
  WHERE foodTraker.user_id =?`;
    const data = [user_id];
    db.query(query, data, (err, result1) => {
      if (err) res.status(500).send("select is not done");
      const query = `SELECT snack.snack_id,  snack.name as snack ,snack.user_id ,foodTraker.foodTraker_id
    FROM foodTraker
    INNER JOIN snack ON foodTraker.snack_id = snack.snack_id 
    WHERE foodTraker.user_id =?`;
      const data = [user_id];
      db.query(query, data, (err, result2) => {
        if (err) res.status(500).send("select is not done");
        const query = `SELECT lunch.lunch_id, lunch.name as lunch ,lunch.user_id ,foodTraker.foodTraker_id
      FROM foodTraker
      INNER JOIN lunch ON foodTraker.lunch_id = lunch.lunch_id 
      WHERE foodTraker.user_id =?`;
        const data = [user_id];
        db.query(query, data, (err, result3) => {
          if (err) res.status(500).send("select is not done");
          const query = `SELECT dinner.dinner_id, dinner.dinner_id, dinner.name as dinner ,dinner.user_id ,foodTraker.foodTraker_id
        FROM foodTraker
        INNER JOIN dinner ON foodTraker.dinner_id = dinner.dinner_id 
        WHERE foodTraker.user_id =?`;
          const data = [user_id];
          db.query(query, data, (err, result4) => {
            if (err) res.status(500).send("select is not done");
            const query = `SELECT glassesOfWater.glassesOfWater_id, glassesOfWater.name as glassesOfWater ,glassesOfWater.user_id ,foodTraker.foodTraker_id
          FROM foodTraker
          INNER JOIN glassesOfWater ON foodTraker.glassesOfWater_id = glassesOfWater.glassesOfWater_id 
          WHERE foodTraker.user_id =?`;
            const data = [user_id];
            db.query(query, data, (err, result5) => {
              if (err) res.status(500).send("select is not done");
              const query = `SELECT activeTime.activeTime_id, activeTime.name as activeTime ,activeTime.user_id ,foodTraker.foodTraker_id
            FROM foodTraker
            INNER JOIN activeTime ON foodTraker.activeTime_id = activeTime.activeTime_id 
            WHERE foodTraker.user_id =?`;
              const data = [user_id];
              db.query(query, data, (err, result6) => {
                if (err) res.status(500).send("select is not done");
                res.status(200).json({
                  userInfo: { result },
                  breakfast: { result1 },
                  snack: { result2 },
                  lunch: { result3 },
                  dinner: { result4 },
                  glassesOfWater: { result5 },
                  activeTime: { result6 },
                });
              });
            });
          });
        });
      });
    });
  });
};

module.exports = {
  getUserInformation,
  updateUserInformationById,
  deleteUserById,
  getUserById,
};
