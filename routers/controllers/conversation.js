const db = require("./../../db/db");
//done
const newConversation = (req, res) => {
  const senderId = req.token.id;
  const receiverId = req.body.receiver_id;

  const data = [senderId, receiverId];
  const query = `INSERT INTO conversation (sender_id,reciver_id) VALUES (?,?)`;

  db.query(query, data, (err, result) => {
    if (err) return res.status(500).send("insert is not done");
    res.status(201).json(result);
  });
};

const newMessages = (req, res) => {
  const user_id = req.body.id;
  const message = req.body.message;
  const roomId = req.body.room;
  console.log("new message", req.body);
  const query = `INSERT INTO messages (message,sender_id,conversation_id) VALUES (?,?,?) `;
  const data = [message, user_id, roomId];

  db.query(query, data, (err, result1) => {
    console.log("err", err);
    if (err) return res.status(500).send("INSERT is not done");
    console.log("result1", result1);
    res.status(200).json(result1);
  });
};

const getConversation = (req, res) => {
  const user_id = req.body.sender;
  const receiverId = req.body.receiver;

  const query = `SELECT messages.sender_id AS id_sender ,messages.message , conversation.* FROM conversation INNER JOIN messages ON conversation.id= messages.conversation_id  
  WHERE conversation.sender_id =? AND conversation.reciver_id=? `;
  const data = [user_id, receiverId];
  db.query(query, data, (err, result) => {
    if (err) return res.status(400).send("SELECT is not done");
    const query = `SELECT * FROM conversation WHERE sender_id =? AND reciver_id=? `;
    const data = [user_id, receiverId];
    db.query(query, data, (err, conversation) => {
      if (err) return res.status(400).send("SELECT is not done");
      console.log("conversation", conversation);
      res
        .status(200)
        .json({ result: { result }, conversation: { conversation } });
    });
  });
};

module.exports = {
  newConversation,
  getConversation,
  newMessages,
};
