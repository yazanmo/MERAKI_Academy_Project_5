const db = require("./../../db/db");



const BookTime=(req,res)=>{
const user_id=req.token.id;
const doctor_id=req.params.id;
const {time,date}=req.body;
const query=`INSERT INTO schedule (user_id ,doctor_id,time,date) VALUES (?,?,?,?) ; `
const array=[user_id,doctor_id,time,date]
db.query(query,array,(err,result)=>{
    if(err) res.status(400).send(err)
    res.status(201).json(result)
})
}
module.exports = {
    BookTime,
  };