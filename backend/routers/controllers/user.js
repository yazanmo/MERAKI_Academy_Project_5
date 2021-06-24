const db = require("./../../db/db");



const getUserInformation=(req,res)=>{
const id=req.token.id;
const query=`SELECT * FROM users WHERE id=${id}`
db.query(query,(err,result)=>{
    if(err) res.status(404).send(err)
    res.status(200).json(result)
})
}

 

module.exports={
    getUserInformation
}