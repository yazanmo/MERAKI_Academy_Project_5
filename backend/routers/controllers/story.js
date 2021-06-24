const db = require("./../../db/db")


//as a user, I can add my story  to the success story

const createSuccessStory = (req,res)=>{
const description = req.body.description
const user_id=req.token.id
console.log("user_id",user_id);
const command = `INSERT INTO Success (description,user_id) VALUES (?,?)`
const arr= [description,user_id]
db.query(command,arr,(err,result)=>{
    if (err) res.status(404).send(err)
    res.status(201).json(result);
})

}




module.exports={
    createSuccessStory
}