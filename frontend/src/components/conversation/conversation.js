import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://localhost:5000";
socket = io(CONNECTION_PORT);


const Conversation = (props) => {
  const { sender, receiver } = props;

  const userId = localStorage.getItem("user_id");
  const [result, setResult] = useState([]);

  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [messageList, setMessageList] = useState([]);

  // useEffect(() => {}, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });
  const connectToRoom = () => {
    socket.emit("join_room", room);
    // console.log("room id", room);
  };
  const sendMessage = () => {
    const messageContent = {
      room,
      content: {
        author: username,
        message,
      },
    };
    socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.content]);
    axios
      .post(`http://localhost:5000/conversation/message`, {
        message,
        id: userId,
        room,
      })
      .then((result) => {
        // console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // setMessage("");
  };
  useEffect(() => {
    axios
      .post(`http://localhost:5000/conversation/con`, { sender, receiver })
      .then((result) => {
        setResult(result.data.result.result[0]);
        setRoom(result.data.conversation.conversation[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  connectToRoom();
  return (
    <div>
      <>
        <div>
          {messageList.map((val, i) => {
            return (
              <h1 key={i}>
                {val.author} {val.message}
              </h1>
            );
          })}
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="write you message ..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button onClick={sendMessage}>send</button>
        </div>
      </>
    </div>
  );
};

export default Conversation;

