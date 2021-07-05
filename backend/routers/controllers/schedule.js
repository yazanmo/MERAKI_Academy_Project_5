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
    const doctor_id=req.token.id;
    console.log(doctor_id);
const query=`SELECT * FROM doctorsDetails inner join users on users.id=doctorsDetails.user_id
 WHERE doctorsDetails.user_id=? ;`
const arr= [doctor_id]
db.query(query,arr,(err,result)=>{
    if(err)res.status(400).send(err)

    
    const query=`SELECT * FROM doctorsDetails inner join schedule on schedule.user_id=doctorsDetails.id 
    inner join users on users.id=doctorsDetails.user_id WHERE users.id=?
    ;`
    console.log(result);
    const arr= [result[0].id,result[0].user_id]
    db.query(query,arr,(err,result)=>{

        if(err)res.status(400).send(err)

        const query=`SELECT * FROM schedule inner join users on schedule.user_id=users.id ;`
        db.query(query,arr,(err,result1)=>{

            if(err)res.status(400).send(err)
            res.status(200).json(result1)
        })
        
        })
    
})

}
module.exports = {
    bookTime,
    getBookTime,
  };