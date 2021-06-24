const db = require("./../../db/db");


// this function to get the user information 
const getUserInformation=(req,res)=>{
const id=req.token.id;
const query=`SELECT * FROM users WHERE id=${id}`
db.query(query,(err,result)=>{
    if(err) res.status(404).send(err)
    res.status(200).json(result)
})
}

 const updateUserInformationById=(req,res)=>{
    const id=req.token.id;
    const {firstName ,lastName,age ,email,password,role_id,img}=req.body
    const query=`UPDATE users
    SET firstName=? ,lastName=?,age=? ,email=?,password=?,role_id=?,img=?
    WHERE id=${id}`
    const array=[firstName ,lastName,age ,email,password,role_id,img]
    db.query(query,array,(err,result)=>{
        if(err) res.status(404).send(err)
        res.status(200).json(result)
    })
 }

module.exports={
    getUserInformation,
    updateUserInformationById
}