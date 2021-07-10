import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

const Conversation = ({ sender, receiver }) => {
  const history = useHistory();
  console.log(sender, receiver);
  // const [socket, setSocket] = useState(null)
  const socket = useRef(io("ws://localhost:5000"));
  const userId = localStorage.getItem("user_id");
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.current = io("ws://localhost:5000");
  });

  useEffect(() => {
    axios
      .post(`http://localhost:5000/conversation/con`, { sender, receiver })
      .then((result) => {
        setResult(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    socket.current.emit("addUser", userId);
    socket.current.on("getUsers", (users) => {
      console.log(users);
    });
  }, [userId]);

  socket.current.emit("sendMessage", {
    userId,
    receiverId:receiver,
    text: message,
  });

  return (
    <div>
      <div>
        {result ? result.map((results) => <p>{results.text}</p>) : <></>}
      </div>
      <input
        placeholder="write a message here"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </div>
  );
};

export default Conversation;
