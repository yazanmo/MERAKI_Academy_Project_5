const db = require("./../../db/db");

const bookTime = (req, res) => {
  const user_id = req.token.id;
  const doctor_id = req.params.id;
  const { time, date } = req.body;
  const query = `INSERT INTO schedule (user_id ,doctor_id,time,date) VALUES (?,?,?,?) ; `;
  const array = [user_id, doctor_id, time, date];
  db.query(query, array, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(201).json(result);
  });
};

const getBookTime = (req, res) => {
  const doctor_id = req.token.id;

  const query = `SELECT doctorsDetails.id AS doctorServes,schedule.id AS schedule_id,schedule.doctor_id,schedule.user_id,schedule.time,schedule.date,
  users.*  FROM schedule JOIN users ON schedule.user_id=users.id

  JOIN doctorsDetails ON schedule.doctor_id=doctorsDetails.id WHERE doctorsDetails.user_id= ?`;

  const arr = [doctor_id];
  db.query(query, arr, (err, result) => {
    if (err) res.status(400).send(err);
    res.status(200).json(result);
  });
};
const getScheduleUser = (req, res) => {
  const users_id = req.token.id;
  const query = `SELECT doctorsDetails.* , schedule.id AS schedule_id ,
   schedule.doctor_id , schedule.user_id ,schedule.time ,schedule.date ,users.* FROM  doctorsDetails
  INNER JOIN schedule  ON doctorsDetails.id=schedule.doctor_id 
  INNER JOIN users ON users.id=doctorsDetails.user_id WHERE schedule.user_id=? ;`;

  const arr = [users_id];
  db.query(query, arr, (err, result) => {
    if (err) res.status(400).send(err);

    res.status(200).json(result);
  });
};

const deleteScheduleUser = (req, res) => {
  const users_id = req.token.id;
  const schedule_id = req.params.id;

  const query = `DELETE FROM schedule WHERE user_id=? AND id=? ;`;
  const array = [users_id, schedule_id];
  db.query(query, array, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};
const deleteScheduleDoctor = (req, res) => {
  const doctorServer_id = req.body.doctorServes;
  const schedule_id = req.body.schedule_id;
  console.log(doctorServer_id, schedule_id);
  const query = `DELETE FROM schedule WHERE doctor_id=? AND id=? ; `;
  const array = [doctorServer_id, schedule_id];
  db.query(query, array, (err, result) => {
    console.log(result);
    if (err) throw err;
    res.status(200).json(result);
  });
};
module.exports = {
  bookTime,
  getBookTime,
  getScheduleUser,
  deleteScheduleUser,
  deleteScheduleDoctor,
};
