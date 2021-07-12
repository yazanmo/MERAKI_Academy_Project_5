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

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList([...messageList, data]);
    });
  });
  console.log("message List", messageList);
  useEffect(() => {});
  const connectToRoom = () => {
    socket.emit("join_room", room);
  };
  const sendMessage = () => {
    const messageContent = {
      room,
      message,
    };
    socket.emit("send_message", messageContent);
    setMessageList([...messageList, messageContent.message]);
    axios
      .post(`http://localhost:5000/conversation/message`, {
        message,
        id: userId,
        room,
      })
      .then((result) => {})
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .post(`http://localhost:5000/conversation/con`, { sender, receiver })
      .then((result) => {
        setRoom(result.data.conversation.conversation[0].id);
        setResult(result.data.result.result);
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
          {result &&
            result.map((val, i) => {
              return <h1 key={i}>{val.message}</h1>;
            })}
        </div>

        <div>
          <div>
            {messageList &&
              messageList.map((val, i) => {
                console.log("val", val);
                return <h1 key={i}>{val}</h1>;
              })}
          </div>{" "}
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
