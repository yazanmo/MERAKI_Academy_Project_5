const db = require("./../../db/db");



const bookTime=(req,res)=>{
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

const getBookTime=(req,res)=>{
    const user_id=req.token.id;
const query=`SELECT * FROM schedule WHERE user_id=${user_id} AND is_deleted=0;`
db.query(query,(err,result)=>{
    if(err)res.status(400).send(err)
    res.status(200).json(result)
})
}
module.exports = {
    bookTime,
    getBookTime,
  };