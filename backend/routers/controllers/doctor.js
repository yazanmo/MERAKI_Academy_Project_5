const db = require("./../../db/db");

const cerateDoctor = (req, res) => {
    const {firstName,lastName,age,email,password,role_id,img} = req.body;
    const query=`INSERT INTO users (firstName,lastName,age,email,password,role_id,img) VALUES (?,?,?,?,?,?,?)`
    const array=[firstName,lastName,age,email,password,role_id,img]
    db.query(query,array,(err,result)=>{
        if(err) res.status(404).send(err)
        res.status(201).json(result)
    })
  };

const getAllDoctors = (req, res) => {
  const query = `SELECT * FROM users WHERE role_id=2`;
  db.query(query, (err, result) => {
    if (err) res.status(404).send(err);
    res.status(200).json(result);
  });
};

module.exports = {
  getAllDoctors,
  cerateDoctor,
};
