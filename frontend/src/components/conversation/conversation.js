import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "http://localhost:5000";
socket = io(CONNECTION_PORT);

const Conversation = (props) => {
  const { sender, receiver } = props;
  const history = useHistory();
  console.log("__props__", props);
  // const [socket, setSocket] = useState(null)
  // const socket = useRef(io("ws://localhost:5000"));
  const userId = localStorage.getItem("user_id");
  const [result, setResult] = useState([]);
  // const [message, setMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

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
    setLoggedIn(true);
    socket.emit("join_room", room);
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
    // setMessage("");
  };
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

  return (
    <div>
      {!loggedIn ? (
        <div>
          <input
            type="text"
            placeholder="Username here ..."
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="RoomId here ..."
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <button onClick={connectToRoom}>enter the room</button>
        </div>
      ) : (
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
            <button onClick={sendMessage}></button>
          </div>
        </>
      )}
    </div>
  );
};

export default Conversation;
