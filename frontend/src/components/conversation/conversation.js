import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";
import "./conversation.css";

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
  const [idSender, setIdSender] = useState(null);

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
  }, [message]);
  connectToRoom();
  return (
    <div className="conversation">
      <>
        <div className="message">
          {result &&
            result.map((val, i) => {
              // if (val.id_sender === userId) {
              return (
                <>
                  <div
                    className={
                      val.id_sender == userId ? "message-right" : "message-left"
                    }
                    key={i}
                  >
                    <p key={i}>{val.message}</p>
                    {console.log(
                      "hiiiiiiiiiiii mai",
                      val.id_sender,
                      "user_id" + userId
                    )}
                  </div>
                </>
              );
              // } else {
              //   return (
              //     <>
              //       <div className="message-left">
              //         <p key={i}>{val.message}</p>
              //         {console.log("hiiiiiiiiiiii mai", val.id_sender)}
              //       </div>
              //     </>
              //   );
              // }
            })}
        </div>

        <div>
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
